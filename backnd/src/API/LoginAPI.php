<?php

namespace API;

use \Controller\UsuarioController;
use \Controller\TokenController;

class LoginAPI
{

    public static function login($email = "email", $password = "password", $ip = "")
    {
        $usuarioController = new UsuarioController();
        $tokenController = new TokenController();

        $response = array(
            "result" => 'ERROR',
            "aditional" => '---'
        );

        if (strlen($email) < 4) {
            $response["aditional"] = "ETS";
            return json_encode($response);
        }
        if (strlen($email) > 80) {
            $response["aditional"] = "ETL";
            return json_encode($response);
        }
        if (strpos($email, '@') == false) {
            $response["aditional"] = "IEM";
            return json_encode($response);
        }
        if (strlen($password) < 8) {
            $response["aditional"] = "PTS";
            return json_encode($response);
        }
        if (strlen($password) > 300) {
            $response["aditional"] = "PTL";
            return json_encode($response);
        }
        if (0 === preg_match('~[0-9]~', $password)) {
            $response["aditional"] = "IPW";
            return json_encode($response);
        }
        if (0 === preg_match("/[a-z]/i", $password)) {
            $response["aditional"] = "IPW";
            return json_encode($response);
        }

        if ($usuarioController->dataExists("email", "usuarios", $email) == false) {
            $response["aditional"] = "ENC";
            return json_encode($response);
        }

        $login = $usuarioController->login($email, $password);

        if($login) {
            $response["result"] = "OK";
        } else {
            $response["aditional"] = "IPW";
            return json_encode($response);
        }

        $response["aditional"] = $tokenController->generateToken($email, $ip);
        return json_encode($response);
    }
}

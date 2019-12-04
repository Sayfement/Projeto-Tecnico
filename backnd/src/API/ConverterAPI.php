<?php
namespace API;

use \Controller\UsuarioController;
use \Controller\TokenController;
use \Controller\MoedaController;

class ConverterAPI
{

    public static function converter($email = "email", $moeda = '', $token = "")
    {
        $usuarioController = new UsuarioController();
        $tokenController = new TokenController();
        $moedaController = new MoedaController();

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

        if($moedaController->getMoedaByNome($moeda) == 'NONAPLICABLE') {
            $response["aditional"] = "IMO";
            return json_encode($response); 
        }

        if ($usuarioController->dataExists("email", "usuarios", $email) == false) {
            $response["aditional"] = "ENC";
            return json_encode($response);
        }

        /**
         * No SENAI, comentar o código do if verifyToken
         * Caso não seja comentado, irá resultar em um erro
         * ocasionado pelo Redis não estar instalado no sistema
         */
        //if ($tokenController->verifyToken($token, $email_from) == false) {
          //  $response["aditional"] = "ITK";
           // return json_encode($response);
        //}

        $user_id = $usuarioController->getData("id", "usuarios", "email", $email);

        $saldo = $moedaController->calculate(intval($user_id), intval($moedaController->getMoedaByNome($moeda)->getId()));
        $usuarioController->updateData("moeda_id", "contas", "user_id", $user_id, $moedaController->getMoedaByNome($moeda)->getId());

        $response["result"] = 'OK';
        $response["aditional"] = $saldo;
        return json_encode($response);
    }
}

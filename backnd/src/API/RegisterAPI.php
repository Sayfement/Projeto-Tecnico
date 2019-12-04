<?php

namespace API;

use \Controller\UsuarioController;
use \Controller\CriptoController;
use \Controller\TokenController;

class RegisterAPI
{

    public static function register($email = "iem", $password = "", $nome="", $tipo_conta = 0, $telefone = "", $celular = "", $endereco = "", $complemento = "", $cep="", $cpf = "", $rg = "", $cnpj = "", $ip="")
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
        if (strlen($nome) < 3) {
            $response["aditional"] = "NTS";
            return json_encode($response);

        }
        if (strlen($nome) > 50) {
            $response["aditional"] = "NTL";
            return json_encode($response);

        }
        if (is_numeric($tipo_conta) == false) {
            $response["aditional"] = "ITC";
            return json_encode($response);

        }
        if (intval($tipo_conta) != 1 and intval($tipo_conta) != 0) {
            $response["aditional"] = "ITC";
            return json_encode($response);

        }
        if (strlen($telefone) > 13) {
            $response["aditional"] = "ITL";
            return json_encode($response);

        }
        if (strlen($celular) > 13) {
            $response["aditional"] = "ICL";
            return json_encode($response);

        }
        if (strlen($endereco) > 200) {
            $response["aditional"] = "ETL";
            return json_encode($response);

        }
        if (strlen($endereco) < 3) {
            $response["aditional"] = "ENTS";
            return json_encode($response);

        }
        if (strlen($complemento) > 200) {
            $response["aditional"] = "CTL";
            return json_encode($response);

        }
        if (strlen($complemento) < 3) {
            $response["aditional"] = "CTS";
            return json_encode($response);

        }
        if (strlen($cep) > 9) {
            $response["aditional"] = "CETL";
            return json_encode($response);

        }
        if (strlen($cep) < 8) {
            $response["aditional"] = "CETS";
            return json_encode($response);

        }
        if (strlen($rg) > 8) {
            $response["aditional"] = "IRG";
            return json_encode($response);

        }
        if (strlen($cnpj) > 14) {
            $response["aditional"] = "ICN";
            return json_encode($response);

        }
        if (strlen($cpf) > 11) {
            $response["aditional"] = "ICP";
            return json_encode($response);

        }

        if ($usuarioController->dataExists("email", "usuarios", $email) == true) {
            $response["aditional"] = "EAE";
            return json_encode($response);

        }
        if ($usuarioController->dataExists("cpf", "dados_pessoais", $cpf) == true) {
            $response["aditional"] = "CAE";
            return json_encode($response);

        }
        if ($usuarioController->dataExists("cnpj", "dados_pessoais", $cnpj) == true) {
            $response["aditional"] = "CNAE";
        }

        $criptoController = new CriptoController();

        $usuarioController->registerUser($nome, $email, $criptoController->encrypt($password), intval($tipo_conta), $telefone, $celular, $endereco, $complemento, $cpf, $rg, $cnpj, $cep);
        $response["result"] = "OK";
        $response["aditional"] = $tokenController->generateToken($email, $ip);
        return json_encode($response);
    }
}

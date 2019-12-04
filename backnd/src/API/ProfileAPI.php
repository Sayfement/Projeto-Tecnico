<?php

namespace API;

use \Controller\UsuarioController;
use \Controller\TokenController;
use \Controller\MoedaController;
use \Controller\TransferenciaController;

class ProfileAPI
{

    public static function load($email = "email", $token = "")
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
        $moeda_id = $usuarioController->getData("moeda_id", "contas", "user_id", $user_id);

        $user_info = array(
            "Email" => $email,
            "Tipo_Conta" => strval($usuarioController->getData("tipo_conta", "usuarios", "id", $user_id)),
            "Moeda" => strval($moeda_id),
            "Saldo" => $moedaController->calculate(intval($user_id), $moeda_id),
            "Telefone" => strval($usuarioController->getData("telefone", "contatos", "user_id", $user_id)),
            "Celular" => strval($usuarioController->getData("celular", "contatos", "user_id", $user_id)),
            "Endereco" => strval($usuarioController->getData("endereco", "enderecos", "user_id", $user_id)),
            "Complemento" => strval($usuarioController->getData("complemento", "enderecos", "user_id", $user_id)),
            "CEP" => strval($usuarioController->getData("cep", "enderecos", "user_id", $user_id)),
            "CPF" => strval($usuarioController->getData("cpf", "dados_pessoais", "user_id", $user_id)),
            "CNPJ" => strval($usuarioController->getData("cnpj", "dados_pessoais", "user_id", $user_id)),
            "RG" => strval($usuarioController->getData("rg", "dados_pessoais", "user_id", $user_id)),
            "Nome"  => strval($usuarioController->getData("nome", "dados_pessoais", "user_id", $user_id)),
        );

        $response["result"] = 'OK';
        $response["aditional"] = \json_encode($user_info);
        return json_encode($response);
    }

    public static function view($email = "email")
    {
        $usuarioController = new UsuarioController();

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

        if ($usuarioController->dataExists("email", "usuarios", $email) == false) {
            $response["aditional"] = "ENC";
            return json_encode($response);
        }

        $user_id = $usuarioController->getData("id", "usuarios", "email", $email);

        $user_info = array(
            "Email" => $email,
            "Nome"  => strval($usuarioController->getData("nome", "dados_pessoais", "user_id", $user_id)),
        );

        $response["result"] = 'OK';
        $response["aditional"] = \json_encode($user_info);
        return json_encode($response);
    }

    public static function historico($email = "email", $token = "")
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
        $transferenciaController = new TransferenciaController();
        $historico = [];

        foreach ($transferenciaController->carregaHistorico(intval($user_id)) as $row) {
            $de_email = $usuarioController->getData("email", "usuarios", "id", $row["de_id"]);
            $para_email = $usuarioController->getData("email", "usuarios", "id", $row["para_id"]);

            if($para_email == "sayfement@sayfement.com") {
                continue;
            }
            $historico[strval($row["id"])] = array(
                "de" => $de_email,
                "para" => $para_email,
                "quantia" => $row["quantia"],
                "moeda_id" => $row["moeda_id"],
                "horario" => $row["horario"]
            );
        }

        $response["result"] = 'OK';
        $response["aditional"] = \json_encode($historico);
        return json_encode($response);
    }
}

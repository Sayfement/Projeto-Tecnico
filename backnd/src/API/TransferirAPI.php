<?php
namespace API;

use \Controller\UsuarioController;
use \Controller\TokenController;
use \Controller\TransferenciaController;
use \Controller\MoedaController;

class TransferirAPI
{

    public static function transferir($email_from = "email", $email_to = "email", $value = '0.0', $token = "")
    {
        $usuarioController = new UsuarioController();
        $transferenciaController = new TransferenciaController();
        $tokenController = new TokenController();

        $response = array(
            "result" => 'ERROR',
            "aditional" => '---'
        );

        if (is_numeric($value) == false) {
            $response["aditional"] = "IVA";
            return json_encode($response);
        }

        if (floatval($value) <= 0.0) {
            $response["aditional"] = "IVA";
            return json_encode($response);
        }

        if (strlen($email_to) < 4) {
            $response["aditional"] = "ETS";
            return json_encode($response);
        }
        if (strlen($email_to) > 80) {
            $response["aditional"] = "ETL";
            return json_encode($response);
        }
        if (strpos($email_to, '@') == false) {
            $response["aditional"] = "IEM";
            return json_encode($response);
        }
        if (strlen($email_from) < 4) {
            $response["aditional"] = "ETS";
            return json_encode($response);
        }
        if (strlen($email_from) > 80) {
            $response["aditional"] = "ETL";
            return json_encode($response);
        }
        if (strpos($email_from, '@') == false) {
            $response["aditional"] = "IEM";
            return json_encode($response);
        }

        if($email_from == $email_to) {
            $response["aditional"] = "IEM";
            return json_encode($response);
        }

        if (floatval($value) <= 3.0) {
            $response["aditional"] = "VTS";
            return json_encode($response);
        }

        if ($usuarioController->dataExists("email", "usuarios", $email_from) == false) {
            $response["aditional"] = "EFNC";
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

        if ($usuarioController->dataExists("email", "usuarios", $email_to) == false) {
            $response["aditional"] = "ETNC";
            return json_encode($response);
        }

        if($transferenciaController->transferir($email_from, $email_to, $value) == false) {
            $response["aditional"] = "IVA";
            return json_encode($response);
        }

        $response["result"] = 'OK';
        $response["aditional"] = 'FINISHED';
        return json_encode($response);
    }

    public static function adicionar($email = "email", $value = '0.0')
    {
        $usuarioController = new UsuarioController();
        $transferenciaController = new TransferenciaController();
        $moedaController = new MoedaController();

        $response = array(
            "result" => 'ERROR',
            "aditional" => '---'
        );

        if (is_numeric($value) == false) {
            $response["aditional"] = "IVA";
            return json_encode($response);
        }

        if (floatval($value) <= 0.0) {
            $response["aditional"] = "IVA";
            return json_encode($response);
        }

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

        if (floatval($value) <= 3.0) {
            $response["aditional"] = "VTS";
            return json_encode($response);
        }

        if ($usuarioController->dataExists("email", "usuarios", $email) == false) {
            $response["aditional"] = "EFNC";
            return json_encode($response);
        }

        $id = $usuarioController->getData("id", "usuarios", "email", $email);
        $moeda_id = $usuarioController->getData("moeda_id", "contas", "user_id", $id);
        $moeda = $moedaController->getMoedaById(intval($moeda_id));

        $transferenciaController->log(null, $id, $moedaController->converter($moedaController->getMoedaByNome("Dolar"), $moeda, floatval($value)), $moeda);

        $response["result"] = 'OK';
        $response["aditional"] = 'FINISHED';
        return json_encode($response);
    }
}

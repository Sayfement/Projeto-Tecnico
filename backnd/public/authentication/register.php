<?php

require '../../vendor/autoload.php';

use \API\RegisterAPI as register;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

$data = json_decode(file_get_contents('php://input'), true);

$email = $data["email"];
$password = $data["password"];
$nome = $data["nome"];
$tipo_conta = $data["tipo_conta"];
$telefone = $data["telefone"];
$celular = $data["celular"];
$endereco = $data["endereco"];
$complemento = $data["complemento"];
$cep = $data["cep"];
$cpf = $data["cpf"];
$rg = $data["rg"];
$cnpj = $data["cnpj"];
$ip = get_client_ip();

echo register::register($email, $password, $nome, $tipo_conta, $telefone, $celular, $endereco, $complemento, $cep, $cpf, $rg, $cnpj, $ip);
return;
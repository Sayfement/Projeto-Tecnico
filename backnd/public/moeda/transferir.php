<?php

require '../../vendor/autoload.php';

use \API\TransferirAPI as transferir;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents('php://input'), true);

$email_from = $data["email_from"];
$email_to = $data["email_to"];
$value = $data["value"];
$token = $data["token"];

echo transferir::transferir($email_from, $email_to, $value, $token);
return;
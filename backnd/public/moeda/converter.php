<?php

require '../../vendor/autoload.php';

use \API\ConverterAPI as converter;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
//header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents('php://input'), true);

$email = $data["email"];
$moeda = $data["moeda"];
$token = $data["token"];

echo converter::converter($email, $moeda, $token);
return;
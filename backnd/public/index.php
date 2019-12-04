<?php
ini_set('display_errors', 1);
error_reporting(E_ALL | E_WARNING);

/**
 * Classe usada para testes
 */

require '../vendor/autoload.php';

use \Controller\MoedaController;
use \Controller\UsuarioController;
use \Controller\TransferenciaController;

$transferenciaController = new TransferenciaController();
$moedaController = new MoedaController();

/**
 * Registra as moedas suportadas pelo sistema
 */
if ($moedaController->moedaExists("Dolar") == false) {
    $moedaController->registerMoeda($nome = "Dolar", $abreviacao = "US$", $cotacao = 1.00);
}
if ($moedaController->moedaExists("Real") == false) {
    $moedaController->registerMoeda($nome = "Real", $abreviacao = "BRL", $cotacao = 4.18);
}
if ($moedaController->moedaExists("Euro") == false) {
    $moedaController->registerMoeda($nome = "Euro", $abreviacao = "EUR", $cotacao = 0.91);
}
if ($moedaController->moedaExists("Libra") == false) {
    $moedaController->registerMoeda($nome = "Libra", $abreviacao = "LB£", $cotacao = 0.80);
}

/**
 * Carrega as moedas registradas
 */
$moedaController->loadMoedas();

/**
 * Faz o teste de conversão de moedas
 */
echo "10 dólares em reais é igual a: " . $moedaController->converter($moedaController->getMoedaByNome("Dolar"), $moedaController->getMoedaByNome("Real"), 10) . "<br>";
echo "Cotação do dólar registrada: " . $moedaController->getMoedaByNome("Dolar")->getCotacao() . " " . $moedaController->getMoedaByNome("Dolar")->getAbreviacao();
echo "<br>";
echo "Cotação do real registrada: " . $moedaController->getMoedaByNome("Real")->getCotacao() . " " . $moedaController->getMoedaByNome("Real")->getAbreviacao();

$usuarioController = new UsuarioController();

/**
 * Registra o usuário principal do sistema
 */
if ($usuarioController->dataExists("email", "usuarios", "sayfement@sayfement.com") == false) {
    $usuarioController->registerUser("Sayfement", "sayfement@sayfement.com", "12345678a", 1, "", "", "SENAI", "DDS", "", "", "", "");
    $system_id = $usuarioController->getData("id", "usuarios", "email", "sayfement@sayfement.com");
    $usuarioController->updateData("moeda_id", "contas", "user_id", $system_id, $moedaController->getMoedaByNome("Dolar")->getId());
}

/**
 * Registra os usuários de testes
 */
if ($usuarioController->dataExists("email", "usuarios", "ybroetto@hotmail.com") == false) {
    $usuarioController->registerUser("Yan Broetto", "ybroetto@hotmail.com", "12345678a", 0, "", "", "SENAI", "DDS", "", "", "", "");
}
if ($usuarioController->dataExists("email", "usuarios", "davi123@gmail.com") == false) {
    $usuarioController->registerUser("Davi Souza", "davi123@gmail.com", "12345678a", 0, "", "", "SENAI", "DDS", "", "", "", "");
}
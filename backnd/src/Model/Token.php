<?php

namespace Model;

use \Controller\CriptoController;

/**
 * Classe Token
 * É uma classe para controlar os logins do sistema
 * Um token é expirado a cada uma hora
 **/

class Token {

    private $token, $email, $ip;

    public function __construct(string $email="", string $ip="") {
        $criptoController = new CriptoController();

        $this->token = $criptoController->generateSalt(32);
        $this->email = $email;
        $this->ip = $ip;
    }

    public function getToken() {
        return $this->token;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getIP() {
        return $this->ip;
    }
}
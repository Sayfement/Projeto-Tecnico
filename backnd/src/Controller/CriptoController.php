<?php

namespace Controller;

use \Controller\UsuarioController;

class CriptoController
{

    public function encryptSalt($value, $salt) : string
    {
        $hashed_with_salt = hash("sha256", $salt . $value);
        return $salt . "$" . $hashed_with_salt;
    }

    public function encrypt($value, bool $toSalt=true) : string
    {
        $salt = $this->generateSalt();
        $hashed = hash ("sha256", $value);
        if($toSalt) {
            return $this->encryptSalt($hashed, $salt);
        }
        return $hashed;
    }

    public function generateSalt($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}

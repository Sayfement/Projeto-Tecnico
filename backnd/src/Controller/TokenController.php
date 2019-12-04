<?php

namespace Controller;

use \Model\Token;
use \Persistence\RedisConnection as redis;

/**
 * Classe TokenController
 * Esta classe controla todos os tokens do servidor alocados no Redis.
 */

class TokenController
{
    public function generateToken($email, $ip): string
    {
        if ($this->tokenLoaded($email)) {
            return redis::Connect()->get($email);
        }
        $token = new Token($email, $ip);
        redis::Connect()->setex($email, 3600, $token->getToken());
        return $token->getToken();
    }

    public function verifyToken($token, $email): bool
    {
        if(tokenLoaded($email)) {
            if(redis::Connect()->get($email) == $token) {
                return true;
            }
        }
        return false;
    }

    public function tokenLoaded($email): bool
    {
        if(redis::Connect()->exists($email)) {
            return true;
        }
        return false;
    }

    public function getToken($email): string
    {
        return redis::Connect()->get($email);
    }
}

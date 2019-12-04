<?php

namespace Persistence;

class RedisConnection
{

    private static $conn;

    public static function Connect()
    {
        try {
            $init = \parse_ini_file(__DIR__ . "/../../config/config.ini", true);

            $host = $init['DATABASE']['host'];
            $redis = new \Redis();
            $redis->connect($host, 6379, 2.5, NULL, 150);

            if (!self::$conn) {
                self::$conn = $redis;
            }
        } catch (\Exception $ex) {
            print("Erro ao conectar o SGBD (REDIS): " . $ex->getMessage());
            die();
        }
        return self::$conn;
    }
}

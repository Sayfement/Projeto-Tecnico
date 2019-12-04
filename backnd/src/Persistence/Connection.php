<?php

namespace Persistence;

class Connection {

    private static $conn;

    public static function Connect() {
        try {
            $init = \parse_ini_file(__DIR__ . "/../../config/config.ini", true);

            $dsn = $init['DATABASE']['dsn'];
            $dbuser = $init['DATABASE']['dbuser'];
            $dbpass = $init['DATABASE']['dbpass'];;
            $options = [\PDO::ATTR_PERSISTENT => true];

            if( ! self::$conn) {
                self::$conn = new \PDO($dsn, $dbuser, $dbpass, $options);
                self::$conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            }
        } catch( \Exception $ex) {
            print("Erro ao conectar o SGBD: " . $ex->getMessage());
            die();
        }
        return self::$conn;
    }

}
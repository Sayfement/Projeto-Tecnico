<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit589e48f72ebd188d8e7798b9f3b7e03f
{
    public static $prefixLengthsPsr4 = array (
        'U' => 
        array (
            'Ufee\\Sqlite3\\' => 13,
        ),
        'P' => 
        array (
            'Persistence\\' => 12,
        ),
        'M' => 
        array (
            'Model\\' => 6,
        ),
        'C' => 
        array (
            'Controller\\' => 11,
        ),
        'A' => 
        array (
            'API\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Ufee\\Sqlite3\\' => 
        array (
            0 => __DIR__ . '/..' . '/ufee/sqlite3/src',
        ),
        'Persistence\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/Persistence',
        ),
        'Model\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/Model',
        ),
        'Controller\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/Controller',
        ),
        'API\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/API',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit589e48f72ebd188d8e7798b9f3b7e03f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit589e48f72ebd188d8e7798b9f3b7e03f::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

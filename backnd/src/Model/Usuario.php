<?php

namespace Model;

use \Model\Moeda;

/**
 * Classe Usuario
 * */
class Usuario {

    private $id, $email, $senha, $tipo_conta, $nome,
            $telefone, $celular, $endereco, $complemento, $cpf, $rg, $cnpj, $moeda;

    public function __construct(int $id=0, string $email="", string $senha="", int $tipo_conta=0, string $telefone="", string $celular="", string $endereco="", string $complemento="", string $cpf="", string $rg="", string $cnpj="", Moeda $moeda=null, string $nome) {
        $this->id = $id;
        $this->email = $email;
        $this->senha = $senha;
        $this->tipo_conta = $tipo_conta;
        $this->telefone = $telefone;
        $this->celular = $celular;
        $this->endereco = $endereco;
        $this->complemento = $complemento;
        $this->cpf = $cpf;
        $this->rg = $rg;
        $this->cnpj = $cnpj;
        $this->moeda = $moeda;
    }

    public function getEmail() {
        return $this->email;
    }

    public function getSenha() {
        return $this->senha;
    }

    public function setEmail(string $email) {
        $this->email = $email;
    }

    public function setSenha(string $senha) {
        $this->senha = $senha;
    }

}

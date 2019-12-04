<?php

namespace Model;

/**
 * Classe Moeda
 **/

class Moeda {

    private $id, $nome, $abreviacao, $cotacao;

    public function __construct(int $id=0, string $nome="", string $abreviacao="", float $cotacao=0.0) {
        $this->id = $id;
        $this->nome = $nome;
        $this->abreviacao = $abreviacao;
        $this->cotacao = $cotacao;
    }

    public function getId() {
        return $this->id;
    }

    public function getNome() {
        return $this->nome;
    }
    
    public function getAbreviacao() {
        return $this->abreviacao;
    }

    public function getCotacao() {
        return $this->cotacao;
    }

    public function setNome(string $nome) {
        $this->nome = $nome;
    }

    public function setAbreviacao(string $abreviacao) {
        $this->nome = $abreviacao;
    }

    public function setCotacao(string $cotacao) {
        $this->nome = $cotacao;
    }
}
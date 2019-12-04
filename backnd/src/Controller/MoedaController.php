<?php

namespace Controller;

use \Model\Moeda;
use \Controller\TransferenciaController;
use \Persistence\Connection as Con;

/**
 * Classe MoedaController
 */
class MoedaController
{

    private $loaded = false;
    protected static $moedas = array();

    public function getMoedaByNome(string $nome): Moeda
    {
        $this->loadMoedas();
        foreach (self::$moedas as $moeda) {
            if ($moeda->getNome() == $nome) {
                return $moeda;
            }
        }
        return 'NONAPLICABLE';
    }

    public function getMoedaById(int $id): Moeda
    {
        $this->loadMoedas();
        foreach (self::$moedas as $moeda) {
            if ($moeda->getId() == $id) {
                return $moeda;
            }
        }
        return $this->getMoedaById(1);
    }

    public function loadMoeda(int $id, string $nome, string $abreviacao, float $cotacao)
    {
        array_push(self::$moedas, new Moeda($id, $nome, $abreviacao, $cotacao));
    }

    public function loadMoedas()
    {
        if($this->loaded) {
            return;
        }
        $this->loaded = true;
        $pdo = Con::Connect();
        $stm_moeda = $pdo->prepare("SELECT * FROM moedas;");
        $stm_moeda->execute();
        $result = $stm_moeda->fetchAll();

        foreach ($result as $row) {
            $this->loadMoeda($row["id"], $row["nome"], $row["abreviacao"], $row["cotacao"]);
        }
    }

    public function moedaExists($nome): bool
    {
        $retval = false;

        $pdo = Con::Connect();
        $stm_moeda = $pdo->prepare("SELECT nome FROM moedas WHERE nome = :nome;");
        $stm_moeda->bindParam(":nome", $nome);
        $stm_moeda->execute();
        $result = $stm_moeda->fetchAll();

        foreach ($result as $row) {
            if ($row["nome"] == $nome) {
                $retval = true;
                break;
            }
        }
        return $retval;
    }

    public function getCotacaoAt($moeda_id, $transferencia_id): float
    {
        $retval = 0.0;

        $pdo = Con::Connect();
        $stm_moeda = $pdo->prepare("SELECT cotacao FROM transferencias_cotacoes WHERE transferencia_id = :transferencia_id and moeda_id = :moeda_id;");
        $stm_moeda->bindParam(":transferencia_id", $transferencia_id);
        $stm_moeda->bindParam(":moeda_id", $moeda_id);
        $stm_moeda->execute();
        $result = $stm_moeda->fetchAll();

        foreach ($result as $row) {
            $retval = $row["cotacao"];
            break;
        }
        return $retval;
    }

    public function converter(Moeda $moeda_from, Moeda $moeda_to, $value) : float {
        $dolar = $value / $moeda_from->getCotacao();
        $result = $dolar * $moeda_to->getCotacao();

        return $result;
    }

    public function converterEdited(float $moeda_from_cotacao, float $moeda_to_cotacao, $value) : float {
        $dolar = $value / $moeda_from_cotacao;
        $result = $dolar * $moeda_to_cotacao;

        return $result;
    }

    public function calculate(int $user_id, $moeda) : float {
        $transferenciaController = new TransferenciaController();
        $saldo = 0.0;
        foreach ($transferenciaController->getTransFerencias($user_id) as $row) {
            $moedaTransaction = $row["moeda_id"];
            $moedaTransactionCotacao = $this->getCotacaoAt($moedaTransaction, $row["id"]);
            $moedaTargetCotacao = $this->getCotacaoAt($moeda, $row["id"]);
            $saldo = ($row["de_id"] == $user_id) ? $saldo - $this->converterEdited($moedaTransactionCotacao, $moedaTargetCotacao, floatval($row["quantia"])) :
            $saldo + $this->converterEdited($moedaTransactionCotacao, $moedaTargetCotacao, floatval($row["quantia"]));
        }
        return $saldo;
    }

    public function registerMoeda($nome, $abreviacao, $cotacao)
    {
        $pdo = Con::Connect();

        $stm_moedas = $pdo->prepare("INSERT INTO moedas(nome, abreviacao, cotacao)
        VALUES (:nome, :abreviacao, :cotacao);");
        $stm_moedas->bindParam(":nome", $nome);
        $stm_moedas->bindParam(":abreviacao", $abreviacao);
        $stm_moedas->bindParam(":cotacao", $cotacao);
        $stm_moedas->execute();
    }
}

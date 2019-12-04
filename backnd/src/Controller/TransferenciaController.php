<?php
namespace Controller;

use \Controller\UsuarioController;
use \Controller\MoedaController;
use \Persistence\Connection as Con;
use \Model\Moeda;

/**
 * Classe TransferenciaController
 */
class TransferenciaController
{

    /** 
     * Método para transferir saldo de uma conta para outra
     **/
    public function transferir($from, $to, $value) : bool
    {
        $usuarioController = new UsuarioController();
        $moedaController = new MoedaController();

        $from_id = $usuarioController->getData("id", "usuarios", "email", $from);
        $from_moeda_id = $usuarioController->getData("moeda_id", "contas", "user_id", $from_id);
        $from_moeda = $moedaController->getMoedaById(intval($from_moeda_id));
        $from_has = $moedaController->calculate(intval($from_id), $from_moeda_id);
        //$from_has = floatval($usuarioController->getData("saldo", "contas", "user_id", $from_id));
        $from_dolar = $moedaController->converter($from_moeda, $moedaController->getMoedaByNome("Dolar"), $from_has);

        $valueDolar = $moedaController->converter($from_moeda, $moedaController->getMoedaByNome("Dolar"), floatval($value));

        if ($valueDolar > $from_dolar) {
            return false;
        }
        
        //$new_from_has = $moedaController->converter($moedaController->getMoedaByNome("Dolar"), $from_moeda, ($from_dolar - $valueDolar));
        //$usuarioController->updateData("saldo", "contas", "user_id", $from_id, $new_from_has);

        $to_id = $usuarioController->getData("id", "usuarios", "email", $to);
        $to_moeda_id = $usuarioController->getData("moeda_id", "contas", "user_id", $to_id);
        $to_moeda = $moedaController->getMoedaById(intval($to_moeda_id));
        $to_has = $moedaController->calculate(intval($to_id), $to_moeda_id);
        //$to_has = floatval($usuarioController->getData("saldo", "contas", "user_id", $to_id));
        $to_dolar = $moedaController->converter($to_moeda, $moedaController->getMoedaByNome("Dolar"), $to_has);

        $taxa = $this->calcularTaxa($valueDolar);
        //$receive = ($to_dolar + $valueDolar) - $taxa;
        //$new_to_has = $moedaController->converter($moedaController->getMoedaByNome("Dolar"), $to_moeda, $receive);
        //$usuarioController->updateData("saldo", "contas", "user_id", $to_id, $new_to_has);

        $system_id = $usuarioController->getData("id", "usuarios", "email", "sayfement@sayfement.com");
        //$system_has = floatval($usuarioController->getData("saldo", "contas", "user_id", $system_id));
        //$usuarioController->updateData("saldo", "contas", "user_id", $system_id, $system_has + $taxa);

        $this->log($from_id, $to_id, $moedaController->converter($moedaController->getMoedaByNome("Dolar"), $to_moeda, floatval($valueDolar) - $taxa), $to_moeda);
        $this->log($from_id, $system_id, $taxa, $moedaController->getMoedaByNome("Dolar"));
        return true;
    }

    public function log($from, $to, $value, Moeda $moeda)
    {
        $pdo = Con::Connect();
        $moeda_id = $moeda->getId();
        $moeda_cotacao = $moeda->getCotacao();
        $stm_log = ($from == null) ?
        $pdo->prepare("INSERT INTO transferencias(para_id, quantia, moeda_id, cotacao)
        VALUES (:para_id, :quantia, :moeda_id, :cotacao_moeda);") :
        $pdo->prepare("INSERT INTO transferencias(de_id, para_id, quantia, moeda_id, cotacao)
        VALUES (:de_id, :para_id, :quantia, :moeda_id, :cotacao_moeda);"); 
        if($from != null) {
            $stm_log->bindParam(":de_id", $from);
        }
        $stm_log->bindParam(":para_id", $to);
        $stm_log->bindParam(":quantia", $value);
        $stm_log->bindParam(":moeda_id", $moeda_id);
        $stm_log->bindParam(":cotacao_moeda", $moeda_cotacao);
        $stm_log->execute();

        $id = $pdo->lastInsertId();
        $this->logCotacoes(intval($id));
    }

    public function logCotacoes(int $transferenciaId)
    {
        $pdo = Con::Connect();
        $stm_moeda = $pdo->prepare("SELECT id, cotacao FROM moedas;");
        $stm_moeda->execute();
        $result = $stm_moeda->fetchAll();

        foreach ($result as $row) {
            $stm_log = $pdo->prepare("INSERT INTO transferencias_cotacoes(transferencia_id, moeda_id, cotacao)
            VALUES (:transferencia_id, :moeda_id, :cotacao_moeda);");
            $stm_log->bindParam(":transferencia_id", $transferenciaId);
            $stm_log->bindParam(":moeda_id", $row["id"]);
            $stm_log->bindParam(":cotacao_moeda", $row["cotacao"]);
            $stm_log->execute();
        }
    }

    public function calcularTaxa($value) : float
    {
        return ($value * 2.99 / 100);
    }

    public function getTransferencias(int $user_id)
    {
        $pdo = Con::Connect();
        $stm_moeda = $pdo->prepare("SELECT * FROM transferencias WHERE de_id = :user_id OR para_id = :user_id;");
        $stm_moeda->bindParam(":user_id", $user_id);
        $stm_moeda->execute();
        $result = $stm_moeda->fetchAll();

        return $result;
    }

    public function carregaHistorico(int $user_id) : array
    {
        $pdo = Con::Connect();
        $stm_moeda = $pdo->prepare("SELECT id, de_id, para_id, quantia, moeda_id, horario FROM transferencias WHERE de_id = :user_id OR para_id = :user_id;");
        $stm_moeda->bindParam(":user_id", $user_id);
        $stm_moeda->execute();
        $result = $stm_moeda->fetchAll();

        return $result;
    }
}

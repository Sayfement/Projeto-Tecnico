<?php

/**
 * Classe UsuarioController
 * */

namespace Controller;

use \Model\Usuario;
use \Controller\MoedaController;
use \Persistence\Connection as Con;

class UsuarioController
{

    protected $moedaController, $criptoController;
    
    protected $usuarios;

    public function __construct()
    {
        $this->criptoController = new CriptoController();
        $this->moedaController = new MoedaController();
        $this->usuarios = array();
    }
    
    public function login(string $email, string $senha): bool
    {
        $passwordHash = $this->getData("senha", "usuarios", "email", $email);
        list($salt) = explode('$', $passwordHash);
        if($this->criptoController->encryptSalt($this->criptoController->encrypt($senha, false), $salt) != $passwordHash) {
            return false;
        }
        return true;
    }

    public function loadUserCache(string $email)
    {
        $this->usuarios[] = new Usuario($id = 1, $email = "ybroetto@hotmail.com", $senha = "87342823", $tipo_conta = 0, $telefone = "", $celular = "27998853178", $endereco = "", $complemento = "", $cpf = "", $rg = "", $cnpj = "", $moeda = $this->moedaController->getMoedaByNome("Real"));
    }

    public function getUserCache(string $email): Usuario
    {
        foreach ($this->usuarios as $usuario) {
            if ($usuario->getEmail() == $email) {
                return $usuario;
            }
        }
        return null;
    }

    public function dataExists($data, $table, $value) : bool
    {
        $retval = false;

        $pdo = Con::Connect();
        $stm_usuario = $pdo->prepare("SELECT ". $data ." FROM ". $table ." WHERE ". $data ." = :value;");
        $stm_usuario->bindParam(":value", $value);
        $stm_usuario->execute();
        $result = $stm_usuario->fetchAll();

        foreach ($result as $row) {
            if ($row[$data] == $value) { 
                $retval = true;
                break;
            }
        }
        return $retval;
    }

    public function getData($get, $table, $value, $data) : string
    {
        $retval = "";

        $pdo = Con::Connect();
        $stm_usuario = $pdo->prepare("SELECT ". $get ." FROM ". $table ." WHERE ". $value ." = :data;");
        $stm_usuario->bindParam(":data", $data);
        $stm_usuario->execute();
        $result = $stm_usuario->fetchAll();


        foreach ($result as $row) {
            $retval = $row[$get];
            break;
        }
        return $retval;
    }

    /**
     * Atualizar um dado de um usuário
     *
     * @param [column_set] $set
     * @param [table] $table
     * @param [column_get] $column_value
     * @param [column_get_value] $id
     * @param [new_value] $value
     * @return void
     */
    public function updateData($set, $table, $column_value, $id, $value)
    {
        $pdo = Con::Connect();
        $stm_data = $pdo->prepare("UPDATE ". $table ." SET ". $set ." = :value WHERE ". $column_value ." = :id;");
        $stm_data->bindParam(":value", $value);
        $stm_data->bindParam(":id", $id);
        $stm_data->execute();
    }

    public function registerUser(string $nome="", string $email = "", string $senha = "", int $tipo_conta = 0, string $telefone = "", string $celular = "", string $endereco = "", string $complemento = "", string $cpf = "", string $rg = "", string $cnpj = "", string $cep = "")
    {
        $pdo = Con::Connect();

        $moeda = $this->moedaController->getMoedaByNome("Real")->getId();

        $stm_usuarios = $pdo->prepare("INSERT INTO usuarios(email, senha, tipo_conta)
        VALUES (:email, :senha, :tipo_conta);");
        $stm_usuarios->bindParam(":email", $email);
        $stm_usuarios->bindParam(":senha", $senha);
        $stm_usuarios->bindParam(":tipo_conta", $tipo_conta);
        $stm_usuarios->execute();
        $id = $pdo->lastInsertId();

        $stm_contatos = $pdo->prepare("INSERT INTO contatos(user_id, telefone, celular)
        VALUES (:user_id, :telefone, :celular);");
        $stm_contatos->bindParam(":user_id", $id);
        $stm_contatos->bindParam(":telefone", $telefone);
        $stm_contatos->bindParam(":celular", $celular);
        $stm_contatos->execute();

        $stm_contas = $pdo->prepare("INSERT INTO contas(user_id, moeda_id)
        VALUES (:user_id, :moeda_id);");
        $stm_contas->bindParam(":user_id", $id);
        $stm_contas->bindParam(":moeda_id", $moeda);
        $stm_contas->execute();

        $stm_enderecos = $pdo->prepare("INSERT INTO enderecos(user_id, endereco, complemento, cep)
        VALUES (:user_id, :endereco, :complemento, :cep);");
        $stm_enderecos->bindParam(":user_id", $id);
        $stm_enderecos->bindParam(":endereco", $endereco);
        $stm_enderecos->bindParam(":complemento", $complemento);
        $stm_enderecos->bindParam(":cep", $cep);
        $stm_enderecos->execute();

        $stm_dados = $pdo->prepare("INSERT INTO dados_pessoais(user_id, cpf, cnpj, rg, nome)
        VALUES (:user_id, :cpf, :cnpj, :rg, :nome);");
        $stm_dados->bindParam(":user_id", $id);
        $stm_dados->bindParam(":cpf", $cpf);
        $stm_dados->bindParam(":cnpj", $cnpj);
        $stm_dados->bindParam(":rg", $rg);
        $stm_dados->bindParam(":nome", $nome);
        $stm_dados->execute();
    }
}

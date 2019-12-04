CREATE DATABASE IF NOT EXISTS sayfement;

USE sayfement;

CREATE TABLE IF NOT EXISTS usuarios(id int not null primary key auto_increment, email varchar(80) not null,
senha text not null, tipo_conta tinyint(1) not null);

CREATE TABLE IF NOT EXISTS moedas(id int not null primary key auto_increment, nome varchar(50) not null,
abreviacao char(3) not null, cotacao double not null);

CREATE TABLE IF NOT EXISTS contas(user_id int not null, moeda_id int not null, FOREIGN KEY(user_id)
REFERENCES usuarios(id), FOREIGN KEY(moeda_id) REFERENCES moedas(id));

CREATE TABLE IF NOT EXISTS contatos(user_id int not null, telefone varchar(13) not null, celular varchar(13) not null, FOREIGN KEY(user_id)
REFERENCES usuarios(id));

CREATE TABLE IF NOT EXISTS enderecos(user_id int not null, endereco varchar(200) not null, complemento varchar(200) not null
, cep varchar(9) not null, FOREIGN KEY(user_id) REFERENCES usuarios(id));

CREATE TABLE IF NOT EXISTS dados_pessoais(user_id int not null, cpf varchar(11) not null, cnpj varchar(14) not null
, rg varchar(8) not null, nome varchar(50) not null, FOREIGN KEY(user_id) REFERENCES usuarios(id));

CREATE TABLE IF NOT EXISTS logs(user_id int, acao varchar(100),
ip varchar(10) not null, horario timestamp not null, FOREIGN KEY(user_id) REFERENCES usuarios(id));

CREATE TABLE IF NOT EXISTS transferencias(id int not null auto_increment primary key,
 de_id int null, FOREIGN KEY(de_id) REFERENCES usuarios(id), para_id int not null,
quantia double not null, moeda_id int not null,
cotacao double not null,  horario timestamp not null,
 FOREIGN KEY(para_id) REFERENCES usuarios(id), 
FOREIGN KEY(moeda_id) REFERENCES moedas(id));

CREATE TABLE IF NOT EXISTS transferencias_cotacoes(
transferencia_id int not null, 
moeda_id int not null, cotacao double not null, 
FOREIGN KEY(moeda_id) REFERENCES moedas(id));

DELIMITER $$
CREATE IF NOT EXISTS TRIGGER inserir_log AFTER INSERT ON usuarios
FOR EACH ROW
BEGIN
INSERT INTO logs(user_id, acao, ip) VALUES (new.id, CONCAT('criado usuario com o email ', new.email), '127.0.0.1');
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER transferir_log AFTER INSERT ON transferencias
FOR EACH ROW
BEGIN   
INSERT INTO logs(user_id, acao, ip) VALUES (new.de_id, CONCAT(COALESCE(new.de_id, 'banco'), ' transferiu ', new.quantia, '(', new.moeda_id,') para ', new.para_id), '127.0.0.1');
END $$
DELIMITER ;	
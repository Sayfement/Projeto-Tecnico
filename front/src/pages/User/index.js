import React, { Component } from 'react';
//import './scss/style.scss'
// import UserController from '../../Controller/UserController';
// import UserModel from '../../Model/UserModel';
//import localStorage from 'react-use-localstorage';
import  "./usuario.css"

import boleto from "./fotos/boleto-logo.png";
import elo from "./fotos/elo-logo.png";
import itau from "./fotos/itau-logo.png";
import MasterCard from "./fotos/mastercard-logo.png";
import neeko from "./fotos/neeko.jpg";
import senna from "./fotos/senna.jpeg"
import senna1 from "./fotos/senna1.png";
import senna2 from "./fotos/senna2.png";
import senna3 from "./fotos/senna3.png";
import sg from "./fotos/sg.jpg";
import visa from "./fotos/visa-logo.png";


import axios from 'axios';

export class User extends Component {

    user;

    constructor(props) {
        super(props)
    //http://localhost:8000/profile/load.php
        this.state = {
           email: localStorage.getItem('email'),
           token: localStorage.getItem('token'),
           tipo_conta: 0,
           moeda: '',
           saldo: '',
           telefone: '',
           celular: '',
           endereco: '',
           complemento: '',
           edificio: '',
           cep: '',
           cpf: '',
           cnpj: '',
           rg: '',
           nome: '',
        }
        axios.post('http://10.150.1.115:8000/profile/load.php', this.state)
      .then(response => {
          var json = JSON.parse(response.data.aditional);
          
          this.state.tipo_conta = json["Tipo_Conta"];
          this.state.moeda = json["Moeda"];
          this.state.saldo = json["Saldo"];
          this.state.telefone = json["Telefone"];
          this.state.celular = json["Celular"];
          this.state.endereco = json["Endereco"];
          this.state.complemento = json["Complemento"];
          this.state.cep = json["CEP"];
          this.state.cpf = json["CPF"];
          this.state.cnpj = json["CNPJ"];
          this.state.rg = json["RG"];
          this.state.nome = json["Nome"];
          this.forceUpdate();
      })
      .catch(error => {
        console.log(error);
      });
      }

      changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
      }
    
      submitHandler = e => {
        e.preventDefault()
      }

      render() {
        
        const {saldo} = this.state
        
        var msg = `Você tem R$${saldo} de saldo. Deseja ter alguma ajuda para navegar no nosso sistema?`;
        return ( 
        
        <div>
            <nav className="navbar navbar-light light-blue lighten-4 fixed-top">
                {/* Navbar brand */}
                <a className="navbar-brand" href="#" id="logo">Sayfement</a>
                {/* Collapse button */}
                <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                {/*SO MAIS UM TESTE*/}
                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                {/* Links.. VINCULADO COM O BANCO DE DADOS!!!! COMANDO QUE COLOCA AS OPÇOES DO LADO DIRETO DA TELA */}
                <ul className="navbar-nav float-right">
                    {/*-NAV BAAAAAAAAR!!!!!!!!!!!!*/}
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li><li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Config de Cartões:
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Meus Cartoes: </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" data-toggle="modal" data-target="#modalvisa" href="#">Visa</a>
                        <a className="dropdown-item" data-toggle="modal" data-target="#mastercard" href="#">MasterCard</a>
                        {/*<a class="dropdown-item" data-toggle="modal" data-target="#renner" href="#">Renner</a>*/}
                        <a className="dropdown-item" data-toggle="modal" data-target="#boleto" href="#">Adicionar cartão</a>
                    </div></li><li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Config de banco:
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" data-toggle="modal" data-target="#deposito" href="#">Deposito</a>
                        <a className="dropdown-item" data-toggle="modal" data-target="#retirada" href="#">Retirar Dinheiro</a>
                        <a className="dropdown-item" data-toggle="modal" data-target="#extrato1" href="#">Extrato do mes</a>
                        <a className="dropdown-item" data-toggle="modal" data-target="#extratototal" href="#">Extrato Total</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" data-toggle="modal" data-target="#pagamento" href="#">Pagamentos</a>
                        <a className="dropdown-item" data-toggle="modal" data-target="#modaltransfer" href="#">Transferencia</a>
                    </div></li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="modal" data-target="#modalsair" href="#">Sair</a> {/*QUANDO CLICAR, VAI PERGUNTAR SE WUER SAIR*/}
                    </li>
                </ul>
                </div>
                {/* Collapsible content */}
            </nav>
            <footer className="footer">
                <div className="Shell">
                <section className="footer_sector footer_section--partners">
                    <div className="footer_col footer_col--third">
                    <p className="footer_subtitle footer_subtitle--spacer-1"> C O L U N A S </p>
                    {/*AS COLUNAS*/}
                    <div className="row">
                        <div className="col-sm-6 col-md-4 nb-4 " id="card1">
                        {/*para ficarem todos alinhados quando a tela diminuir*/}
                        <div className="card">
                            <div className="card-body text-center">
                            <h6 className="card-title">MEIOS DE PAGAMENTO</h6>
                            <ul className="list_credit-cards">
                                <li>
                                <img src={visa} alt="cartao visa" />
                                </li>
                                <li>
                                <img src={boleto} alt="boleto" />
                                </li>
                                <li>
                                <img src={elo} alt="elo" />
                                </li>
                                <li>
                                <img src={itau} alt="itau" />
                                </li>
                                <li>
                                <img src={MasterCard} alt="mastercad" />
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-md-4 nb-4" id="card2">
                        <div className="card">
                            <div className="card-body text-center">
                            <h6>CONFERIR AS ESTATISTICAS: </h6>
                            {/*<button type="button" class="btn btn-light center">MINHAS ESTATISTICAS:</button>*/}
                            </div>
                            <div className="progress">
                            {/*VINCULAR AO BANCO DE DADOS*/}
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                            <p>PRIMEIRO MES</p>
                            </div>
                            <br />
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                            <p>SEGUNDO MES</p>
                            </div>
                            <br />
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                            <p>TERCEIR MES</p>
                            </div>
                            <br />
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                            <p>QUARTO MES</p>
                            </div>
                            <br />
                            <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                            <p>QUINTO MES; LIMITE</p>
                            </div>
                            {/*-CASO ELA USE 5/6 CARTOES, TERA UM GRAFICO PRA CASA, MOSTRANDO O USO DE CADA MES*/}
                        </div>
                        </div>
                        <div className="col-sm-12 col-md-4 nb-4" id="card3">
                        <div className="card">
                            <div className="card-body text-center">
                            <h6>CLIQUE NO BOTÃO PARA CONFERIR O SEU SALDO: </h6>
                            <button type="button" className="btn btn-light center">MEU SALDO</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
            </footer>
            {/*-A LISTA PARA SEPARA DOSLIDE*/}
            <hr />
            {/*SLIDES/ AS DIMNÇOES TEM QEU SER 1920x450*/}
            {/*-IMAGENS QUE VAO FICAR NO CORPO DO SITE, COLOQUE AS IMAGENS DA EMPRESA!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
            <div id="carouselSite" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselSite" data-slide-to={0} className="active" />
                <li data-target="#carouselSite" data-slide-to={1} />
                <li data-target="#carouselSite" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={sg} className="img-fluid d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                    {/*-todo o tamanho menor q o md, nao exibe*/}
                    <h3>SG</h3>
                    <p>LEAGUE OF LEAGENDS</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={senna} className="img-fluid d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                    {/*-todo o tamanho menor q o md, nao exibe*/}
                    <h3>SENNA</h3>
                    <p>LEAGUE OF LEAGENDS</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={neeko} className="img-fluid d-block w-100" />
                    <div className="carousel-caption d-none d-md-block">
                    {/*-todo o tamanho menor q o md, nao exibe*/}
                    <h3>NEEKO</h3>
                    <p>LEAGUE OF LEAGENDS</p>
                    </div>
                </div>
                </div>
                <hr />
                <a className="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"> </span>
                <span className="sr-only">Anterior</span>
                </a>
                <a className="carousel-control-next" href="#carouselSite" role="buton" data-slide="next">
                <span className="carousel-control-next-icon" />
                <span className="sr-only"> Próximo</span>
                </a>
            </div>
            {/*JUMBOTROOON*/}
            <hr /> {/*-lista q separa*/}
            {/*-CARDS*/}
            {/*<style>

            ul{
            position: absolute;
            right: 100%;
            }
                </style>*/}
            {/*pagamento*/}
            <div className="modal fade" id="pagamento" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header"> {/* style="background-color:blue" MUDA AS CORES*/}
                    <h5 className="modal-title" id="TituloModalCentralizado">Pagamentos:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: 'darkgray'}}>
                    - R$ 179,99 em Franguinho do Gilson _________________08/10/18
                    <br /><div className="dropdown-divider" />
                    - R$ 257,50 em Ilha do Carangueijo __________ 07/10/18
                    <br /><div className="dropdown-divider" />
                    - R$ 169,90 em Zara __________ 01/10/18
                    <br /><div className="dropdown-divider" />
                    + R$ 10,000,00 recebidos de YouTube __________ 05/09/18
                    <br /><div className="dropdown-divider" />
                    - R$ 18,50 em Açaí primavera __________ 02/09/18
                    <br /><div className="dropdown-divider" />
                    + R$ 50,00 recebidos de Lucas __________ 28/08/18
                    <br /><div className="dropdown-divider" />
                    + R$ 12,00 recebidos de Ana __________ 22/08/18
                    <br /><div className="dropdown-divider" />
                    - R$ 124,98 em Churrascaria do Paulão __________ 18/09/18
                    <br /><div className="dropdown-divider" />
                    - R$ 2,356,58 em Casas Bahia __________ 19/04/18
                    <br /><div className="dropdown-divider" />
                    - R$ 3,599,00 em Sipolatti __________ 08/04/18
                    <br /><div className="dropdown-divider" />
                    + R$ 8,500,00 recebidos de YouTube _________________ 02/02/18
                    <br /><div className="dropdown-divider" />
                    </div>
                    <a href="#" role="button" className="btn btn-secondary popover-test" title="Título do popover" data-content="O conteúdo do popover é definido aqui.">Retirar o Extrato</a> {/*<div*/} {/*POSSO USAR ESSE NO SITE*/}
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">retirar</button>
                    </div>
                </div>
                </div>
            </div>
            {/*-MODAL DE SAIR*/}
            <div className="modal fade" id="modalsair" tabIndex={-1} role="dialog" style={{color: 'cornsilk'}}> {/*fade faz um estilo em rolagem;-*/}
                <div className="modal-dialog" role="document">
                <div className="modal-centent">
                    <div className="modal-header">
                    <h5 className="modal-title">DESEJA SAIR DO SITE?</h5>
                    <button type="button" className="close" data-dismiss="modal">
                        <span>x</span> {/* O X PARA fechar o modal*/}
                    </button>
                    </div>
                    <div className="modal-body" style={{color: 'cornsilk'}}> {/*-TEXTO OU OUTRAS COISAS QUE FICAM NELE.*/}
                    <p>Caso a sua opção escolhida for "SAIR", seja bem vindo quando voltar.
                        Agradescemos sempre a sua visita; duvidas? entre em contato com os nossos
                        desenvolvidores. Obrigado.</p>
                    </div>
                    <div className="modal-footer"> {/*BOTOES*/}
                    <button type="button" className="btn btn-danger" data-dismiss="modal">SIM</button> {/*BOTÃO DE SAIR-*/}
                    <button type="button" className="btn btn-danger" data-dismiss="modal">NÃO</button> {/*BOTÃO DE SAIR-*/}
                    </div>
                </div>
                </div>
            </div>
            {/*-MODAL CARTÃO VISA->

            <!-Botão para acionar modal 
            <button type="button" class="btn btn-primary" data-toggle="modal"   data-target="#ExemploModalCentralizado">
            Abrir modal de demonstração
            </button>*/}
            <div className="modal fade" id="modalvisa" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#393960'}}>
                    <div className="modal-header" style={{backgroundColor: '#393960'}}>
                    <h5 className="modal-title" id="TituloModalCentralizado" style={{color: 'aliceblue'}}>Cartão Visa</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: '#57579e'}}>
                    <p style={{color: 'aliceblue'}}> ...</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">Salvar mudanças</button>
                    </div>
                </div>
                </div>
            </div>
            {/*-MODAL Do mastercard*/}
            <div className="modal fade" id="mastercard" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#393960'}}>
                    <div className="modal-header" style={{backgroundColor: '#393960'}}>
                    <h5 className="modal-title" id="TituloModalCentralizado" style={{color: 'aliceblue'}}>Cartão MasterCard</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: '#57579e'}}>
                    <p style={{color: 'aliceblue'}}> ...</p>
                    </div>
                    <div className=" modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">Salvar mudanças</button>
                    </div>
                </div>
                </div>
            </div>
            {/*-MODAL Do Renner
            <div class="modal fade" id="renner" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style="background-color: #393960;">
            <div class="modal-header" style="background-color:#393960;">
            <h5 class="modal-title" id="TituloModalCentralizado" style="color:aliceblue">Cartão Renner</h5>
            
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body" style="background-color: #57579e;" >
            <p style="color:aliceblue;"> ...</p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary">Salvar mudanças</button>
            </div>
                </div>
            </div>
            </div>*/}
            {/* Modal  de trasnferencia*/}
            <div className="modal fade" id="modaltransfer" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#393960'}}>
                    <div className="modal-header" style={{backgroundColor: '#393960'}}> {/* style="background-color:blue" MUDA AS CORES*/}
                    <h5 className="modal-title" id="TituloModalCentralizado">Quanto deseja transferir?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: '#57579e'}}>
                    <h5>digite um valor</h5>
                    <label htmlFor="recipient-name" className="col-form-label">Valor a ser transferido (ultilize virgula e pontos):</label>
                    <p> R$<input type="text" className="form-control" id="recipient-number" /></p>
                    <label htmlFor="recipient-name" className="col-form-label">Destinatário:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <p style={{color: 'white'}}> Confire as informações e evie o valor
                    <a href="#" role="button" className="btn btn-secondary popover-test" title="Título do popover" data-content="O conteúdo do popover é definido aqui.">enviar</a> </p>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
                </div>
            </div>
            {/*MODAL DE ADICIONAR CARTÃAAAAAO*/}
            <div className="modal fade" id="boleto" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#8c8cc5'}}>
                    <div className="modal-header"> {/* style="background-color:blue" MUDA AS CORES*/}
                    <h5 className="modal-title" id="TituloModalCentralizado">Adicionar cartão</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: '#4b4b81'}}>
                    <h5>informações do catrtão:</h5>
                    <form>
                        <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Digite o número do cartão:</label>
                        <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Não se esqueça dos pontos, traços" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Digite o nome completo do Titular</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Nome completo" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">vencimento</label>
                        <input type="date" className="form-control" id="formGroupExampleInput2" placeholder="data de vencimento" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">CW</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Não sei o que CW" />
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Nome do cartão </label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Opcional" />
                        </div>
                        </div>
                    </form>
                    <p> Confire as informações e adicione o seu novo cartão.
                        <a href="#" role="button" className="btn btn-secondary popover-test" title="Título do popover" data-content="O conteúdo do popover é definido aqui.">Adicionar</a> </p>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/*Modal EXTRATO DO MES */}
            <div className="modal fade" id="extrato1" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#676796'}}>
                    <div className="modal-header" style={{backgroundColor: '#4b4b81'}}>
                    <h5 className="modal-title" id="TituloModalCentralizado">Extrato do Mes: </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    - R$ 36,85 em Burger King __________ 10/9
                    <br />
                    - R$ 100,00 Transferência para Lucas __________ 2/10
                    <div className="dropdown-divider" />
                    Saldo do mês: _________________ - R$ 136,85 
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">Salvar mudanças</button>
                    </div>
                </div>
                </div>
            </div>
            {/*EXTRATO TOTAL*/}
            <div className="modal fade" id="extratototal" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#8c8cc5'}}>
                    <div className="modal-header" style={{backgroundColor: '#4a4a86'}}> {/* style="background-color:blue" MUDA AS CORES*/}
                    <h5 className="modal-title" id="TituloModalCentralizado">EXTRATO TOTAL:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: '#4b4b81'}}>
                    <h5>digite um valor</h5>
                    <label htmlFor="recipient-name" className="col-form-label">inicio e fim do extrato:</label>
                    <p> inicio<input type="date" className="form-control" id="recipient-number" /></p>
                    <hr />
                    <label htmlFor="recipient-name" className="col-form-label">Destinatário:</label>
                    <p> fim<input type="date" className="form-control" id="recipient-name" /></p>
                    </div>
                    - R$ 179,99 em Franguinho do Gilson _________________08/10/18
                    <br /><div className="dropdown-divider" />
                    - R$ 257,50 em Ilha do Carangueijo __________ 07/10/18
                    <br /><div className="dropdown-divider" />
                    - R$ 169,90 em Zara __________ 01/10/18
                    <br /><div className="dropdown-divider" />
                    + R$ 10,000,00 recebidos de YouTube __________ 05/09/18
                    <br /><div className="dropdown-divider" />
                    - R$ 18,50 em Açaí primavera __________ 02/09/18
                    <br /><div className="dropdown-divider" />
                    + R$ 50,00 recebidos de Lucas __________ 28/08/18
                    <br /><div className="dropdown-divider" />
                    + R$ 12,00 recebidos de Ana __________ 22/08/18
                    <br /><div className="dropdown-divider" />
                    - R$ 124,98 em Churrascaria do Paulão __________ 18/09/18
                    <br /><div className="dropdown-divider" />
                    - R$ 2,356,58 em Casas Bahia __________ 19/04/18
                    <br /><div className="dropdown-divider" />
                    - R$ 3,599,00 em Sipolatti __________ 08/04/18
                    <br /><div className="dropdown-divider" />
                    + R$ 8,500,00 recebidos de YouTube _________________ 02/02/18
                    <br /><div className="dropdown-divider" />
                    <a href="#" role="button" className="btn btn-secondary popover-test" title="Título do popover" data-content="O conteúdo do popover é definido aqui.">Retirar o Extrato</a> {/*<div*/}
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">retirar</button>
                    </div>
                </div>
                </div>
            </div>
            {/*MODAL DE deposito*/}
            <div className="modal fade" id="deposito" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#8c8cc5'}}>
                    <div className="modal-header"> {/* style="background-color:blue" MUDA AS CORES*/}
                    <h5 className="modal-title" id="TituloModalCentralizado">Deposito:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: '#4b4b81'}}>
                    <h5>quanto voce quer depositas?</h5>
                    <label htmlFor="recipient-name" className="col-form-label">Valor a ser transferido (ultilize virgula e pontos):</label>
                    <form>
                        <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>R$ 100,50</option>
                            <option>R$ 150,50</option>
                            <option>R$ 200,50</option>
                            <option>R$ 250,50</option>
                            <option>R$ 300,50</option>
                        </select>
                        </div>
                        <div className="form-row">
                        <div className="col-7">
                            <input type="text" className="form-control" placeholder="City" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="State" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="conta" />
                        </div>
                        </div>
                    </form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Para quem deseja depositar?</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <label htmlFor="recipient-name" className="col-form-label">Destinatário:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                    <div className="dropdown-divider" />
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                        Deposito via boleto
                        <div className="modal-body" style={{backgroundColor: '#57579e'}}>
                            <div className="form-row">
                            <div className="col-7">
                                <input type="text" className="form-control" placeholder="City" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="State" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="conta" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Para quem deseja depositar?</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <h5>quanto voce quer depositas?</h5>
                            <label htmlFor="recipient-name" className="col-form-label">Valor a ser transferido (ultilize virgula e pontos):</label>
                            <p> R$<input type="text" className="form-control" id="recipient-number" /></p>
                            <p>Ao realizar este pagament, voce estará se responsabilizando.</p>
                            <label htmlFor="recipient-name" className="col-form-label">Destinatário:</label>
                            <input type="text" className="form-control" id="recipient-name" />
                        </div>
                        </label>
                    </div>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Ao realizar este pagament, voce estará se responsabilizando.
                    </label>
                    </div>
                    <p> Confire as informações e evie o valor
                    </p>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
                </div>
            </div>
            {/*MODAL DE retirar Dinheiro*/}
            <div className="modal fade" id="retirada" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{backgroundColor: '#8c8cc5'}}>
                    <div className="modal-header"> {/* style="background-color:blue" MUDA AS CORES*/}
                    <h5 className="modal-title" id="TituloModalCentralizado">Retirar Dinheiro:</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body" style={{backgroundColor: '#4b4b81'}}>
                    <h5>quanto voce quer retirar da sua conta?</h5>
                    <form>
                        <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Escolha um valor:</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>R$ 20,50</option>
                            <option>R$ 50,50</option>
                            <option>R$ 70,50</option>
                            <option>R$ 80,50</option>
                            <option>R$ 90,50</option>
                            <option>R$ 100,50</option>
                            <option>R$ 150,50</option>
                            <option>R$ 200,50</option>
                            <option>R$ 250,50</option>
                            <option>R$ 300,50</option>
                        </select>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Ao realizar esta retirada, voce estará se responsabilizando.
                        </label>
                        </div>
                        <p> Confire as informações e retire o valor
                        <a href="#" role="button" className="btn btn-secondary popover-test" title="Título do popover" data-content="O conteúdo do popover é definido aqui."> retirar</a> </p>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </form></div>
                </div>
                </div>
            </div>
            </div>

         );
      }

    }


export default User;
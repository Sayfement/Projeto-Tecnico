import React from 'react';
import './css/usuario.css'
//import './scss/style.scss'

function User() {
return (       
       <div>
            <div>
               
                <title>SAYFEMENT</title>
                
                <nav className="navbar navbar-light light-blue lighten-4 fixed-top">
                    <a className="navbar-brand" href="#" id="logo">Sayfement</a>
                    
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul className="navbar-nav float-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Transferencia</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Depósito</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Retirar Dinheiro</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Extrato do Mes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Extrato Completo</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Pagamentos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Meus Cartões</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Meus Bancos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Sair</a>
                            </li>

                        </ul>
                    </div>
                </nav>
                
                <footer className="footer">
                    <div className="Shell">
                        <section className="footer_sector footer_section--partners">
                            <div className="footer_col footer_col--third">
                                <p className="footer_subtitle footer_subtitle--spacer-1  ">
                                    <u>A J U D A</u>
                                </p>
                                {/*AS COLUNAS*/}
                                <div className="row">
                                    <div className="col-sm-6 col-md-4 nb-4 container" id="card1">
                                        {/*para ficarem todos alinhados quando a tela diminuir*/}
                                        <div className="card-body text-center">
                                            <h6 className="card-title">Deseja ter alguma ajuda para navegar no nosso sistema?</h6>
                                            <p>Na tela inicial voce encontrará a opção “Fale Conosco”, lá aonde voce poderá nos enviar suas duvidas, o 
                                                atendimento é rapido e pratico.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>                
            </div>
        </div>
    );
}

export default User;
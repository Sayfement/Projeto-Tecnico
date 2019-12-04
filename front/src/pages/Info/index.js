import React from 'react';
import {Link} from 'react-router-dom';

function Info() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top"  >
                <a className="navbar-brand" to="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 d-lg-none">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/register">Crie sua conta<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/info">Fale conosco</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/"  aria-disabled="true">Duvidas frequentes</Link>
                        </li>
                    </ul>
                </div>
                <Link className=" btn btn-primary btn-sm collapse navbar-collapse" to="/register" role="button" id="cc">
                    Crie sua conta 
                </Link>
                <Link className=" btn btn-primary btn-sm collapse navbar-collapse" to="/info" role="button" id="fc">
                    Fale conosco
                </Link>
            </nav>
            <div className="footer">
                <div className="Shell">
                    <section className="footer_sector footer_section--partners">
                        <div className="footer_col footer_col--third">
                            <p className="footer_subtitle footer_subtitle--spacer-1"> 
                                <u>S E G U R A N Ç A</u> 
                            </p>
                            
                            {/*AS COLUNAS*/}
                            
                            <div className="row">
                                <div className="col-sm-6 col-md-4 nb-4 container" id="card2">
                                    {/*para ficarem todos alinhados quando a tela diminuir*/}
                                    <div className="card-body text-center">
                                    <h6 className="card-title">A sua segurança está em boas mãos, suas informações pessoas estão em sigilo.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


            {/*PARTE 3*/}
            {/*-A LISTA PARA SEPARA DOSLIDE*/}

            <hr />
            
            <footer className="footer">
                <div className="Shell">
                    <section className="footer_sector footer_section--partners">
                        <div className="footer_col footer_col--third">
                            <p className="footer_subtitle footer_subtitle--spacer-1">
                                <u>FALE CONOSCO</u>
                            </p>
                            
                            {/*AS COLUNAS*/}

                            <div className="row">
                                <div className="col-sm-6 col-md-4 nb-4 container" id="card2">
                                    {/*para ficarem todos alinhados quando a tela diminuir*/}
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Esta opção esta relacionado com a opção na pagina inicial “Fale conosco”,
                                            aonde poderá tirar as suas duvidas diretas com os nossos atendentes e 
                                            desenvolvedores. </h6>
                                        <p>Agradescemos a sua iniciativa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
            
            
            {/*PARTE 4*/}
            {/*-A LISTA PARA SEPARA DOSLIDE*/}

            <hr />
            
            <footer className="footer">
                <div className="Shell">
                    <section className="footer_sector footer_section--partners">
                        <div className="footer_col footer_col--third">
                            <p className="footer_subtitle footer_subtitle--spacer-1"><u>S O B R E</u></p>
                            {/*AS COLUNAS*/}
                            <div className="row">
                                <div className="col-sm-6 col-md-4 nb-4 container" id="card4">
                                    {/*para ficarem todos alinhados quando a tela diminuir*/}
                                    <div className="card-body text-center">
                                        <h6 className="card-title">O Sayfement é um sistema software, construido por Yan B, Davi, Igor Ribeiro, Mattedi, Christopher e 
                                            Pablo, com o objetivo inicial de ser lançado no mercado e gerar um retorno financeiro gigante a fim
                                            de enriquecer os desenvolvedores, porém esse objetivo foi por água abaixo quando em uma aula
                                            pedimos uma informação ao professor e ele nos informou que para um sistema de pagamentos
                                            funcione de verdade, precisamos desembolsar uma pequena quantia de R$ 5,000,000.
                                            Essa informação levou embora as esperança de todos de enriquecer com esse projeto, junto com a
                                            força de vontade de termina-lo. :’</h6>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
            
            
            {/*PARTE 5*/}
            {/*-A LISTA PARA SEPARA DOSLIDE*/}
            
            <hr />
            
            <footer className="footer">
                <div className="Shell">
                    <section className="footer_sector footer_section--partners">
                        <div className="footer_col footer_col--third">
                            <p className="footer_subtitle footer_subtitle--spacer-1"><u>D E S E N V O L V E D O R E S</u></p>
                            {/*AS COLUNAS*/}
                            <div className="row">
                                <div className="col-sm-6 col-md-4 nb-4 " id="card5"> 
                                    {/*para ficarem todos alinhados quando a tela diminuir*/}
                                    <div className="card-body text-center">
                                        <h6 className="card-title">
                                            <p>Yan Broetto:
                                            EStudante....
                                            foto, bdhbajhdsbads
                                            </p>
                                            <p>Pablo Vitorino:
                                            estudanterjahfsjjflkfasfdjabf
                                            </p>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 nb-4 " id="card6">
                                <div className="card-body text-center ">
                                    <h6 className="card-title">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                Yan Broetto: EStudante.... 
                                                {/*<img src className="rounded mx-auto d-block" alt="..." />*/}
                                                bdhbajhdsbads
                                            </li>
                                            <li className="list-group-item">
                                                MATTEDI estudanterjahfsjjflkfasfdjabf
                                            </li>
                                            <li className="list-group-item">
                                                DAVI EStudante.... 
                                                {/*<img src className="rounded mx-auto d-block" alt="..." />*/}
                                                bdhbajhdsbads
                                            </li>
                                            <li className="list-group-item">
                                                IGOR PINHEIRO RIBEIRO: estudanterjahfsjjflkfasfdjabf
                                            </li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 nb-4" id="card7">
                            <div className="card-body text-center">
                                <h6 className="card-title" /><h6>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            CHRISTOPHER EStudante 
                                            {/*<img src className="rounded mx-auto d-block" alt="..." />*/}
                                            bdhbajhdsbads
                                        </li>
                                        <li className="list-group-item">
                                            Pablo Vitorino: estudanterjahfsjjflkfasfdjab
                                        </li>
                                        <li className="list-group-item">
                                            Yan Broetto: EStudante.... 
                                            {/*<img src className="rounded mx-auto d-block" alt="..." />*/}
                                            bdhbajhdsbads
                                        </li>
                                        <li className="list-group-item">
                                            Pablo Vitorino: estudanterjahfsjjflkfasfdjabf
                                        </li>
                                    </ul>
                                </h6>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
            
            <hr />

            <footer className="footer">
            <div className="Shell">
                <section className="footer_sector footer_section--partners">
                <div className="footer_col footer_col--third">
                    <p className="footer_subtitle footer_subtitle--spacer-1"><u>A P P S</u></p>
                    
                    <div className="row">
                    <div className="col-sm-6 col-md-4 nb-4 container" id="card8">
                        
                        <div className="card-body text-center">
                        <h6 className="card-title">
                            <p>O link para o nosso aplicativo mobile:
                            http/:mcskcnknhskjdkjd </p>
                            <ul className="list_credit-cards">
                            <li>
                            </li></ul>
                        </h6></div>
                    </div>
                    </div>
                </div></section>
            </div>
            </footer>

            <hr />

            <footer className="footer">
                <div className="Shell">
                    <section className="footer_sector footer_section--partners">
                        <div className="footer_col footer_col--third">
                            <p className="footer_subtitle footer_subtitle--spacer-1">
                                <u> TERMOS DE USO</u>
                            </p>
                            
                            <div className="row">
                                <div className="col-sm-6 col-md-4 nb-4 container" id="card8">
                                   
                                    <div className="card-body text-center">
                                        <h6 className="card-title">
                                            <p>O link para o nosso aplicativo mobile:
                                                http/:mcskcnknhskjdkjd
                                            </p>
                                            <ul className="list_credit-cards">
                                                <li>
                                                </li>
                                            </ul>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>

            <hr/>

        </div>
    );
}

export default Info;
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

import phone from '../../assets/home/phone1.png';
import play from '../../assets/home/play1.png';
import appStore from '../../assets/home/appStore1.png';
//import circulo from '../../assets/home/circulo1.png';
import face from '../../assets/145797-social-network-logo-collection/Editados/facebook.png';
import insta from '../../assets/145797-social-network-logo-collection/Editados/instagram.png';
import tt from '../../assets/145797-social-network-logo-collection/Editados/twitter.png';
import googlePlus from '../../assets/145797-social-network-logo-collection/Editados/google-plus.png';



import './css/style.css';



export class Home extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password:''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://10.150.1.115:8000/authentication/login.php', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render() {
    const {email,password} = this.state
    return (
      
        <div className="conteiner-fluid">
          
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
                  <a className="nav-link " to="/"  aria-disabled="true">Duvidas frequentes</a>
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
            
          <div className="conteudo">
            
            <section className="Login1">
              <div className="lgn">
                
                <form onSubmit={this.submitHandler}>
                  <input type="text" name="email" id="nome" className="border-bottom" placeholder="Nome" value={email} onChange={this.changeHandler} />
                  <input type="password" name="password" id="senha" className="border-bottom" placeholder="Senha" value={password} onChange={this.changeHandler} />
                  <Link to="/">Esqueceu sua senha?</Link>
                  <button type="submit" className="btn btn-primary btn-sm border-0" role="button" id="enter">Entrar</button>
                  <Link type="button" className="btn btn-primary btn-sm border-0" to="/register" role="button" id="cc-btn">Criar Conta</Link>
                </form>

              </div>
              <div id="phoneImg">
                <img src={phone} className="img-fluid img-rounded" id="phoneImg" />
              </div>
              <div id="lojas">
                <img src={play} alt="play" className="img-fluid" id="googleplay"/>
                <img src={appStore} className="img-fluid" alt="apple" id="ios"/>
              </div>
            </section>
            
            <section className="comoFunciona">
              <h1>Como funciona o Sayfement?</h1>
              <div className="circle1"></div>
              <p className="d-flex justify-content-center" id="p1">Crie Sua conta é rapido e facil</p>
              <div className="circle2"></div>
              <p className="d-flex justify-content-center" id="p2">Adicione suas contas bancarias</p>
              <div className="circle3"></div>
              <p className="d-flex justify-content-center" id="p3">E pronto use!</p>
            </section>
    
            <section className="share">
                <h1>Compartilhe nas redes sociais</h1>
                
    
                <div className="d-flex justify-content-around bd-highlight mb-3" id="div1">
                  <Link to="/" className="p-2 bd-highlight"><img src={face} id="facebook" alt="facebook.png"></img></Link>
                  <Link to="/" className="p-2 bd-highlight"><img src={insta} alt="instagram.png" id="insta"/></Link>
                  <Link to="/" className="p-2 bd-highlight"><img src={tt} alt="twitter.png" id="tt"/></Link>
                </div>
                
                <div className="d-flex justify-content-center" di="div2">
                  <Link to="/"><img src={googlePlus} alt="google-plus.png" id="gP" /></Link>
                </div>
               
                
            </section>
    
            <section className="fale">
              
              <h1>Fale Conosco</h1>
                <ul className="d-flex justify-content-around">
                  <li><Link to="/" className="d-print-none" id="Email" >E-mail</Link></li>
                  <li><Link to="/" className="d-print-none" id="tel">Telefone</Link></li>
                </ul>
                <ul className="d-flex justify-content-around">
                  <li><Link to="/" className="d-print-none" id="zap">Whatsapp/Telegram</Link></li>
                  <li><Link to="/" className="d-print-none" id="direitos">Seus direitos</Link></li>
                </ul>  
                <ul className="d-flex justify-content-center">
                  <li><Link to="/" className="d-print-none" id="redesSociais">Redes sociais</Link></li>
                </ul>
            </section>
          </div>
    
          <footer  id="rodape">
           
              <div className="container-fluid">
                <ul className="list-unstyled d-flex justify-content-around" id="up">
                  <li>
                    <Link to="/info">Ajuda</Link>
                  </li>
                  <li>
                    <Link to="/info">Fale conosco</Link>  
                  </li>
                  <li>
                    <Link to="/info">Segurança</Link>  
                  </li>
                  <li>
                    <Link to="/">Apps</Link>  
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-unstyled d-flex justify-content-around" id="down">
                  <li>
                    <Link to="/info">Densevolvedores</Link>  
                  </li>
                  <li>
                    <Link to="/info">Privacidade</Link> 
                  </li>
                  <li>
                    <Link to="/info">Termos de Uso</Link> 
                  </li>
                  <li>
                    <Link to="/">Avalie Sua Experiencia</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-copyright text-center py-3" id="copy">© 2019 Copyright:
                <Link to="/"> Sayfement.com</Link>
              </div>
            </footer>
        </div>
      );
    }
    
  }
  

export default Home;

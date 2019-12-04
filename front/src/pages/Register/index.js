import React, {Component} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

import './style.css';



export default class Register extends Component {
    /*function check() {
        if (document.getElementById('password').value ===
            document.getElementById('confirm_password').value) {
            document.getElementById('message').style.color = "#4bdb6f";
            document.getElementById('message').innerHTML = 'As senhas são iguais';
    } else {
            document.getElementById('message').style.color = '#d13d49';
            document.getElementById('message').innerHTML = 'As senhas não são iguais';
        }
    }*/
   constructor (props) {
       super(props)

       this.state = {
        "email": "",
        "password": "",
        "nome": "",        
        "telefone": "",
        "celular": "",
        "cep": "",		 
        "cpf":"", 
        "rg": "",
        "cnpj": "",
        "complemento": "Edificio 127",
        "endereco":"igoremuitolindoejoaoegay",
        "tipo_conta":"0"
       }
   }
   
   check = e => {
       this.setState({[e.target.name]: e.target.value})
   }

   changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://10.150.1.115:8000/authentication/register.php', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
   
  render() {
    const {email,password,nome,telefone,cep,cpf} = this.state
    return <div>
    <div className="signup-form">
        <form onSubmit={this.submitHandler}>
            <h2>Registro</h2>
            <p className="hint-text">Preencha os dados abaixo para realizar o seu cadastro.</p>
            <div className="form-group">
                <div className="form-group">
                    <input type="name" onChange={this.changeHandler} className="form-control" 
                    name="nome" value={nome} placeholder="Nome" required="required" 
                    />
                </div>
                <div className="form-group">
                    <input type="cfpoucnpj" onChange={this.changeHandler} className="form-control" 
                    value={cpf} name="cpf"  placeholder="CPF ou CNPJ" required="required" 
                    />
                </div>
                <div className="form-group">
                    <input type="email" onChange={this.changeHandler} className="form-control" 
                    name="email" value={email} placeholder="E-mail" required="required" 
                    />
                </div>
                <div className="form-group">
                    <input type="tel" onChange={this.changeHandler} className="form-control" 
                    name="telefone" value={telefone} valupattern="\d{11}" placeholder="Telefone" required="required" 
                    />
                </div>
                <div className="form-group">
                    <input type="text" onChange={this.changeHandler} className="form-control" 
                    name="cep" value={cep} pattern="\d{8}" placeholder="CEP" required="required" 
                    />
                </div>
                <div className="form-group">
                    <input type="password" onChange={this.changeHandler} className="form-control" 
                    id={password}  name="password" placeholder="Senha" required="required" 
                    />
                </div>
                <div className="form-group">
                    <input type="password" onChange={this.changeHandler} value={password} name='password' 
                    className="form-control" id="confirm_password"  placeholder="Confirmar Senha" 
                    required="required" onKeyUp={this.check} 
                    />
                    <span id='message'></span>				
                </div>        
                <div className="form-group">
                    <label className="checkbox-inline">
                        <input type="checkbox" required="required"/> Eu aceito os <Link to="/info">Termos de uso</Link> &amp; 
                        <Link to="/info">Privacidade e Política</Link>
                    </label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-light btn-block">Registrar</button>
                </div>
            </div>
        </form>
        <div className="text-center">Já tem uma conta? <Link to="/">Entre aqui</Link></div>
    </div>
</div>
  }
}





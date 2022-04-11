const bcrypt = require('bcrypt');
const fs = require('fs');
let usuarios = require('../database/usuarios.json');
const path = require('path');
const {check, body, validationResult} = require('express-validator')

module.exports = {
  showResgistrar: (req, res) => {
    res.render('registro.ejs');
  },
  store: (req, res) => {
     
    let errors = validationResult(req);
    console.log(errors.mapped());

    if (errors.isEmpty()) {
      // Capturar as informações que o usuário digitou
    let {nome, email, senha} = req.body;

    // Importar o array de usuários
    

    // Determinar o novo idNovo do usuário
    let idNovo = usuarios[usuarios.length - 1].id + 1;

    // Criar a senha criptografada!
    let senhaCriptografada = bcrypt.hashSync(senha, 10);
    
    // Criar um objeto com os dados do usuário.
    let usuario = { 
        "id": idNovo,
        "nome": nome,
        "email": email,
        "senha": senhaCriptografada,
        "adimplente": true
    }

    // Adicionar o novo usuário a este array
    usuarios.push(usuario);

    // Salvar este array no arquivo usuarios.json
    fs.writeFileSync(path.join(__dirname,'/../database/usuarios.json'), JSON.stringify(usuarios, null, 4));
    
    // configurando session para o usuario que acabou de cadastrar
    req.session.usuario = usuario

    // Direcionando o usuário para a rota GET /contatos
    res.redirect('/contatos');

    }else{
      res.render('registro', { errors: errors.mapped(), old: req.body})
    }

    
},
  mostrarLogin: (req, res) => {
    res.render('login.ejs')
  },
  login: (req, res) => {

    // Extrair/capturar o email e a senha digitadas pelo usuario 
    let {email, senha} = req.body;
        /**
         * Equivale a:
         * let email = req.body.email;
         * let senha = req.body.senha;
         */
    // capturar o arrey de usuarios para
    const usuarios = require('../database/usuarios.json')

    // verificar se o email existe e se a senha deste email confere
    //res.send({email, senha, usuarios})
    let usuario = usuarios.find(
      u => u.email == email && bcrypt.compareSync(senha, u.senha)
      
    );
    
    // se o usuario nao for encontrado ou senha invalida
    if(usuario === undefined){
      //mandar erro 
      return res.render('login.ejs',{erro:1,email,senha});
    } 
      // se usuario estive correto: - setar a session do usuario para
      req.session.usuario = usuario;

      //- redirecionar usuario para tela q lista contatos
      res.redirect('/contatos');
    

  }
}
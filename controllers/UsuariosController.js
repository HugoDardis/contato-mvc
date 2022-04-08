const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = {
  showResgistrar: (req, res) => {
    res.render('registro.ejs');
  },
  store: (req, res) => {
        
    // Capturar as informações que o usuário digitou
    let {nome, email, senha} = req.body;

    // Importar o array de usuários
    let usuarios = require('../database/usuarios.json');

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

    // Direcionando o usuário para a rota GET /contatos
    res.redirect('/contatos');
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
    usuarios.find(
      u => u.email == email && bcrypt.compareSync(senha, u.senha)
      //u => {
      // if(u.email == email && bcrypt.compareSync(senha, u.senha)){
      //  return true;
      //} else {
      //  return false;
      //}
      //}
    );
    // se o usuario nao for encontrado ou senha invalida, mandar erro
    // se usuario estive correto: - setar a session do usuario para
    //                            - redirecionar usuario para tela q lista contatos

  }
}
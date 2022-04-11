
module.exports = (req, res, next) => {

  // Importar usuarios 
  const usuarios = require('../database/usuarios.json');

  // Capturar o usuario de id==req.usuario.id 
  const usuario = usuarios.find(u => u.id == req.usuario.id);
  
  // Verificar se o usuario é adimplente
  if(usuario.adimplente){
    // Caso adimplente: Pode ir adiante.
    next();
    
  } else {
    // Caso contrário, enviar uma mensagem de erro educada
    res.send("Favor entrar em contato com o nosso financeiro.")
  }

}
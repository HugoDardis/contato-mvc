// TODO: Supondo que o usuario e de uid=1
let uid = 3;
module.exports = (req, res, next) => {

  // Importar usuarios 
  const usuarios = require('../database/usuarios.json');

  // Capturar o usuario de id==usuariode (outra forma) const usuario = usuarios.find(u => u.id == uid);
  const usuario = usuarios.find(
    u => {
      if(u.id = uid){
        return true;
      } else {
        return false;
      }
    }
  );

  // Verificar se o usuario é adimplente
  if(usuario.adimplente){
    // Caso adimplente: Pode ir adiante.
    next();
    
  } else {
    // Caso contrário, enviar uma mensagem de erro educada
    res.send("Favor entrar em contato com o nosso financeiro.")
  }

}
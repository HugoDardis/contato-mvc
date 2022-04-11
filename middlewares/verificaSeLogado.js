const verificaSeLogado = (req, res, next) => {

  //Verificar se a session existe
  if(req.session.usuario == undefined){
    res.redirect('/login');
  } else {
    
    // pendurar informações do usuario na requisição
    req.usuario = req.session.usuario;  

    // passar para frente........
    next();
    
  }

}

module.exports = verificaSeLogado;
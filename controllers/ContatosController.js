
module.exports = {
  listarContatos: (req, res)=>{
    //Importar os contatos 
    let contatos = require(`../database/contatos_${req.usuario.id}.json`)

    //enviando contaos para o cliente 
    res.render('home.ejs',{contatos: contatos});
  },
  capturarContato: (req, res) => {
    //Importar os contatos 
    let contatos = require(`../database/contatos_${req.usuario.id}.json`)
    
    //Descobrir o id do contato desejado
    let idDoContato = req.params.id;
    
    //Encontrar no array de contatos o contato com id desejado
    let contato = contatos.find(
        (c) => {
          return c.id == idDoContato;
        }
    );

    //retornar o contato para o cliente ou

    //mensagem de erro se o contato nao existir
    
    if(contato === undefined){
      res.send({msg: "O contato nao existe"});
    } else {
        res.send(contato)
      } 
  }
}



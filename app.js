// importar o express

const express = require('express');

// Importar os roteadores 
const UsuariosRouter = require('./routes/UsuariosRouter');
const ContatosRouter = require('./routes/ContatosRouter');

//Criar um servidor/aplicação com o express

const app = express();

//Configurar o EJS como seu template engine

app.set('view engine','ejs');


// Criar uma rota get no endereço '/' para responder com msg ola 

app.get('/', (req, res)=>{
  res.send("Olá");
});

// Usando os roteadores 
app.use('/', UsuariosRouter);
app.use('/', ContatosRouter);

// Levantar/rodar/executar a nosssa aplicação 

app.listen(3000, ()=>{console.log("servidor escutando na porta 3000")});
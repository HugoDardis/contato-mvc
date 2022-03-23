// Importar o express

const express = require("express");

// Importar o ContatosController

const ContatosController = require('../controllers/ContatosController')

// Criar o roteador 

const router = express.Router();

// Pede para o roteador definir uma rota: (metodo: get, endereço /contatos)

router.get('/contatos', ContatosController.listarContatos);
router.get('/contatos/:id', ContatosController.capturarContato)

// Exportar o roteador

module.exports = router;
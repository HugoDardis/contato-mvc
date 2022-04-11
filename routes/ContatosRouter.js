// Importar o express
const express = require("express");

// Importar o ContatosController
const ContatosController = require('../controllers/ContatosController');

// Importar os middlewares
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');
const verificaSeLogado = require('../middlewares/verificaSeLogado');

// Criar o roteador 
const router = express.Router();

// Pede para o roteador definir uma rota: (metodo: get, endereço /contatos)
router.get('/contatos', verificaSeLogado, verificaAdimplencia, ContatosController.listarContatos);
router.get('/contatos/:id', verificaSeLogado, verificaAdimplencia, ContatosController.capturarContato);

// Exportar o roteador
module.exports = router;
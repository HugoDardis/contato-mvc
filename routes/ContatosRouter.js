// Importar o express

const express = require("express");

// Importar o ContatosController

const ContatosController = require('../controllers/ContatosController');

// Importar o middleware
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');

// Criar o roteador 

const router = express.Router();

// Pede para o roteador definir uma rota: (metodo: get, endereço /contatos)

router.get('/contatos', verificaAdimplencia, ContatosController.listarContatos);
router.get('/contatos/:id', verificaAdimplencia, ContatosController.capturarContato);

// Exportar o roteador

module.exports = router;
// Importar o express 
const express = require('express');

// Importar o UsuarioController
const UsuariosController = require('../controllers/UsuariosController');

// criar o roteador
const router = express.Router();

//Criar a rota no roteador para
router.get('/registrar', UsuariosController.showResgistrar);

//Exportar o rotedor para uso esterno 
module.exports = router;
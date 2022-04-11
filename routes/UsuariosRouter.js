// Importar o express 
const express = require('express');

// criar o roteador
const router = express.Router();

// Importar o UsuarioController
const UsuariosController = require('../controllers/UsuariosController');
const validateUserRegister = require('../middlewares/validacaoRegistro');



//Criar a rota no roteador para
router.get('/registrar', UsuariosController.showResgistrar);
router.post('/usuarios', UsuariosController.store);
router.get('/login', UsuariosController.mostrarLogin);
router.post('/login', UsuariosController.login);

//Exportar o rotedor para uso esterno 
module.exports = router;
const { check, body } = require('express-validator');

const validateUserRegister = [
  check('nome')
    .notEmpty().withMessage("Deve preeencher o nome completo")
    .isLength({min: 3, max:150}).withMessage("deve te no minimo 3 caracteres"),
  check('email')
    .notEmpty().withMessage("Deve inserir um email")
    .isEmail().withMessage("o email deve ser valido"),
  check('senha')
    .notEmpty().withMessage("deve inserir uma senha")
    .isLength({min: 3}).withMessage("deve te no minimo 3 caracteres")
]

module.exports = validateUserRegister;
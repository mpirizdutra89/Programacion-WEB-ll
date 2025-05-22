const express = require('express')
const router = express.Router();

const { formulario, nuevoUsuario } = require('../controllers/userController');




router.get('/nueva-persona', nuevoUsuario)

router.post('/formulario', formulario)


module.exports = router
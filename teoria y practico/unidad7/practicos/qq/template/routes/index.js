const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    titulo: 'Inicio',
    mensaje: '¡Bienvenido a tu proyecto Express + Pug mejorado!'
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const ejemploBDController = require('../controllers/ejemploBD')

//Mostrar los registros (SELECT * FROM Usuario)
router.get('/mostrarUsuarios', ejemploBDController.getUsuarios);

//Agregar registro (INSERT into Usuario VALUES ();)
router.post('/agregarUsuario', ejemploBDController.postAgregarUsuario);

module.exports = router;
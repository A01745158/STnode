const express = require('express')
const router = express.Router();
const modeloIAController = require('../controllers/modeloIA')
    // Declarando rutas
router.get('/formularioImagen', modeloIAController.getFormularioImagen);
router.post('/upload', modeloIAController.postUpload);

// Para poder sacarlo
module.exports = router;
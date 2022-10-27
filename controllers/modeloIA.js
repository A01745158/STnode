// para armar las rutas
const path = require('path');
const TeachableMachine = require('@sashido/teachablemachine-node');

const model = new TeachableMachine({
        modelUrl: "https://teachablemachine.withgoogle.com/models/pSHMLwAMk/"
    })
    // Arrow function que va a estar contestando
exports.getFormularioImagen = (req, res) => {
    //Dirname dice la ruta precisa de donde está el doc, con los dos puntos nos regresamos
    res.sendFile(path.join(__dirname, '..', 'views', 'formularioImagen.html'))
}

exports.postUpload = async(req, res) => {
    const { image } = req.files
    if (!image) return res.send('Error al enviar la imagen')
    await image.mv(path.join(__dirname, '..', 'public', 'img', image.name));

    model.classify({
        imageUrl: "http://localhost:8081/img/" + image.name
    }).then((prediccion) => {
        res.send(prediccion)
    }).catch((err) => res.send(err))
}
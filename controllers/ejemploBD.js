const Usuario = require('../models/ejemploBD');

exports.getUsuarios = async(req, res) => {
    //SELECT * FROM Usuario;
    try {
        registros = await Usuario.findAll()
        res.send(registros)

    } catch (e) {
        console.log(e)
        res.send(e)
    }
}
exports.postAgregarUsuario = (req, res) => {
    console.log(req.body)
        // INSERT INTO Usuario VALUES ()
    Usuario.create(req.body)
        .then(resultado => {
            console.log("Registro exitoso") //SErvidor
            res.send("Registro exitoso") // Cliente
        })
        .catch(error => {
            console.log(error)
            res.send("Ocurrió un error")
        })

}
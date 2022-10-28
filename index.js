const express = require('express');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
const modeloIARoutes = require('./routes/modeloIA');
const ejemploBDRoutes = require('./routes/ejemploBD')
const sequelize = require('./utils/database')
const cors = require('cors')
    //middlewares funcionales
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public'))) // Todo lo que está en public va a aparecer como servicios o peticiones
app.use(fileUpload());

app.use(modeloIARoutes);
app.use('/usuario', ejemploBDRoutes);

app.get('/', (req, res) => {
    res.send('Servidor funcional')
})

sequelize.sync()
    .then(resultado => {
        console.log("Conexion exitosa")
        app.listen(8081, () => {
            console.log('Servidor en línea')
        })
    })
    .catch(error => console.log(error))
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const app = express();

//Configuracion de CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Base de datos
dbConnection();

//Rutas
app.use('/api/provincias', require('./routes/provincias.route'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});

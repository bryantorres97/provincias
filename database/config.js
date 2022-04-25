const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('Base de datos online');
	} catch (error) {
		console.log(error);
		throw new Error('Error la conectarse a la base de datos, revisar logs');
	}
};

module.exports = { dbConnection };

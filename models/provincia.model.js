// import {} from 'mongoose';
const { Schema, model } = require('mongoose');

const provinciaSchema = new Schema({
	codigo: { type: String, required: true, unique: true },
	provincia: { type: String },
	cantones: { type: [Object], default: [] },
});

const provinciaModel = model('provincia', provinciaSchema);

module.exports = provinciaModel;

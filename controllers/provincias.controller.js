const { request, response } = require('express');
const provincias = require('../db/provincias.json');

const Provincia = require('../models/provincia.model');

const getProvincias = async (req = request, res = response) => {
	try {
		const provincias = await Provincia.find();
		return res.json({
			status: 'ok',
			provincias,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			status: 'ko',
			message: 'No se ha podido obtener las provincias',
			error,
		});
	}
};

// const getProvincias = (req = request, res = response) => {
// 	let provinciasData = [];
// 	const provinciasCodes = Object.keys(provincias);
// 	// console.log(provinciasCodes);
// 	provinciasCodes.forEach((code) => {
// 		const doc = provincias[code];
// 		provinciasData.push({ codigo: code, ...doc });
// 	});

// 	const nuevasProvincias = provinciasData.map((provincia) => {
// 		let cantonesData = [];
// 		const cantonesCodes = Object.keys(provincia.cantones);
// 		cantonesCodes.forEach((cantonCode) => {
// 			const doc = provincia.cantones[cantonCode];
// 			cantonesData.push({ codigo: cantonCode, ...doc });
// 		});
// 		provincia.cantones = cantonesData;
// 		return provincia;
// 	});

// 	const finalProvincias = nuevasProvincias.map((provincia) => {
// 		let parroquiasData = [];
// 		const cantones = provincia.cantones;
// 		provincia.cantones = cantones.map((canton) => {
// 			if (canton.parroquias) {
// 				const parroquiasCodes = Object.keys(canton.parroquias);
// 				// console.log(parroquiasCodes);
// 				parroquiasCodes.forEach((parroquiaCode) => {
// 					// console.log(parroquiaCode);
// 					const doc = canton.parroquias[parroquiaCode];
// 					// console.log(doc);
// 					parroquiasData.push({ codigo: parroquiaCode, parroquia: doc });
// 				});
// 				canton.parroquias = parroquiasData;
// 			} else {
// 				canton.parroquias = [];
// 			}
// 			return canton;
// 			// return parroquiasData;
// 		});
// 		// console.log(provincia.cantones[0]);

// 		return provincia;
// 		// const parroquiasCodes = Object.keys(provincia.cantones.parroquias);
// 	});

// 	// console.log(provinciasData[0].cantones['101']);
// 	finalProvincias.forEach(async (provincia) => {
// 		const newProv = { codigo: provincia.codigo, provincia: provincia.provincia, cantones: provincia.cantones };
// 		// console.log(provincia);
// 		const prov = await Provincia.create(newProv);
// 		// await prov.save();
// 	});
// 	return res.json(finalProvincias);
// };

module.exports = { getProvincias };

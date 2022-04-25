const { Router } = require('express');
const { getProvincias } = require('../controllers/provincias.controller');

const router = Router();

router.get('/', getProvincias);

module.exports = router;

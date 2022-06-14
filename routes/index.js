const quasarController = require('../controllers/quasarController');

const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({
        "Prueba": "Operación Fuego Quasar",
        "Nombre": "Steven Gomez",
        "Empresa": "Meli"});
});

// POST registrar mensaje y distancia de los satelites
router.post('/topsecret', quasarController.topsecret);

// POST registrar mensaje y distancia de un solo satelite
router.post('/topsecret_split/:satellite_name', quasarController.topsecret_split_post);

// GET consultar mensaje y posicion
router.get('/topsecret_split', quasarController.topsecret_split_get);


module.exports = router;

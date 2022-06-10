const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({
        "Prueba": "Operación Fuego Quasar",
        "Nombre": "Steven Gomez",
        "Empresa": "Meli"});
});

router.post('/topsecret', (req, res) => {
    
});

router.post('/topsecret_split/:satellite_name', (req, res) => {
    
});

router.get('/topsecret_split', (req, res) => {
    res.send('Hello World');
});


module.exports = router;

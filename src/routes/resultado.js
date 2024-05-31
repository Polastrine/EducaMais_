var express = require('express');
var router = express.Router();
var resultadoController = require('../controllers/resultadoController');

router.post('/salvar', function(req, res) {
    resultadoController.salvarPontuacao(req, res);
});

module.exports = router;

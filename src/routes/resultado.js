var express = require('express');
var router = express.Router();
var resultadoController = require('../controllers/resultadoController');

router.post('/salvar', function(req, res) {
    resultadoController.salvarPontuacao(req, res);
});

router.get('/exibirRanking', function(req,res) {
    resultadoController.exibirRanking(req, res)
})

module.exports = router;

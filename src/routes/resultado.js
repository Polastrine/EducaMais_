var express = require('express');
var router = express.Router();
var resultadoController = require('../controllers/resultadoController');

router.post('/salvar', function(req, res) {
    resultadoController.salvarPontuacao(req, res);
});

router.get('/exibirRanking', function(req,res) {
    resultadoController.exibirRanking(req, res)
})

router.get('/exibirPosicaoUsuario/:idUsuario', function(req, res) {
    const idUsuario = req.params.idUsuario;
    resultadoController.exibirPosicaoUsuario(req, res, idUsuario);
});


module.exports = router;

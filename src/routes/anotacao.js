var express = require("express");
var router = express.Router();

var anotacaoController = require("../controllers/anotacaoController");

router.post("/inserirAnotacao", function (req, res) {
    anotacaoController.inserirAnotacao(req, res);
});

router.get("/listarAnotacoes/:idUsuarioServer", function(req, res) {
    anotacaoController.listarAnotacoes(req, res); 
});

router.delete("/deletarAnotacao/:idUsuario/:ordem", function(req, res) {
    anotacaoController.deletarAnotacao(req, res); 
});


router.get("/obterAnotacao/:idUsuario/:ordem", function (req, res) {
    anotacaoController.obterAnotacao(req, res);
});

module.exports = router;

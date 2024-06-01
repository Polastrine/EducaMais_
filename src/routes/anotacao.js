var express = require("express");
var router = express.Router();

var anotacaoController = require("../controllers/anotacaoController");

router.post("/inserirAnotacao", function (req, res) {
    anotacaoController.inserirAnotacao(req, res);
});

router.get("/listarAnotacoes/:idUsuarioServer", function(req, res) {
    anotacaoController.listarAnotacoes(req, res); 
});

router.delete("/deletarAnotacao/:idUsuario/:ordemDesejada", function(req, res) {
    var idUsuario = req.params.idUsuario; 
    var ordemDesejada = req.params.ordemDesejada; 
    anotacaoController.deletarAnotacao(idUsuario, ordemDesejada, res); 
});




module.exports = router;

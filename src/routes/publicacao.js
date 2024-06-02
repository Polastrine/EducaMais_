var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

router.post("/publicar", function (req, res) {
    publicacaoController.publicar(req, res);
});

router.get("/mostrarPublicacao", function (req, res) {
    publicacaoController.mostrarPublicacao(req, res);
});

router.delete("/deletar/:idPublicacao", function (req, res) {
    publicacaoController.deletar(req, res);
});

module.exports = router;

var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/obterDadosGraficos", function (req, res) {
    graficoController.obterDadosGrafico(req, res);
});

module.exports = router;

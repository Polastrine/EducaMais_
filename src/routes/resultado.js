var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/ultimas/:idAquario", function (req, res) {
    resultadoController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    resultado.buscarMedidasEmTempoReal(req, res);
})

module.exports = router; 
var graficoModel = require("../models/graficoModel");

function obterDadosGrafico(req, res) {
    graficoModel.obterDadosGrafico()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json({
                    jogadoresAtivos: resultado[0].jogadoresAtivos,
                    publicacoesGlobal: resultado[0].publicacoesGlobal,
                    pontuacaoGlobal: resultado[0].pontuacaoGlobal,
                    jogosFeitosGlobal: resultado[0].jogosFeitosGlobal
                });
            } else {
                res.status(404).send("Nenhum dado encontrado.");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar os dados do gráfico: ", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obterDadosGrafico
};

var resultadoModel = require('../models/resultadoModel');
var usuarioModel = require('../models/usuarioModel');

function salvarPontuacao(req, res) {
    var pontuacao = req.body.pontuacao;
    var idUsuario = req.body.idUsuario;

    if (pontuacao == undefined || idUsuario == undefined) {
        res.status(400).send("Pontuação ou ID do usuário está indefinido!");
    } else {
        resultadoModel.salvarPontuacao(pontuacao, idUsuario)
            .then(function () {
                return usuarioModel.obterDadosUsuario(idUsuario); // Retornar os dados atualizados do usuário
            })
            .then(function (resultadoDados) {
                const dadosUsuario = resultadoDados[0];
                res.status(200).json({
                    jogosFeitos: dadosUsuario.jogosFeitos,
                    pontuacaoTotal: dadosUsuario.pontuacaoTotal
                });
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).send("Erro ao salvar a pontuação ou obter dados do usuário.");
            });
    }
}

module.exports = {
    salvarPontuacao
};

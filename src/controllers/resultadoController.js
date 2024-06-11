const resultadoModel = require('../models/resultadoModel');
const usuarioModel = require('../models/usuarioModel');


function salvarPontuacao(req, res) {
    let pontuacao = req.body.pontuacao;
    let idUsuario = req.body.idUsuario;

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


function exibirRanking(req, res) {
    resultadoModel.exibirRanking()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(404).send("Nenhum dado encontrado.");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar o ranking: ", erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function exibirPosicaoUsuario(req, res) {
    const idUsuario = req.params.idUsuario;
    resultadoModel.exibirPosicaoUsuario(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) { 
                const posicaoUsuario = resultado[0].Posicao; 
                console.log(`Posição do usuário no controller: ${posicaoUsuario}`);
                res.status(200).json({ posicao: posicaoUsuario });
            } else {
                res.status(404).send("Posição do usuário não encontrada.");
            }
        })
        .catch(function (erro) {
            console.log("Houve um erro ao buscar a posição do usuário: ", erro);
            res.status(500).json(erro.message);
        });
}


module.exports = {
    salvarPontuacao,
    exibirRanking,
    exibirPosicaoUsuario
};

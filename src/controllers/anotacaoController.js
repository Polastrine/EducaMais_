var anotacaoModel = require("../models/anotacaoModel");

function inserirAnotacao(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var anotacao = req.body.anotacaoServer;

    if (!anotacao || !idUsuario) {
        res.status(400).send("Os campos anotação e idUsuario são obrigatórios.");
    } else {
        anotacaoModel.inserirAnotacao(anotacao, idUsuario)
            .then(function () {
                res.status(200).send("Anotação inserida com sucesso.");
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).send("Houve um erro ao tentar inserir a anotação.");
            });
    }
}

function listarAnotacoes(req, res) {
    var idUsuario = req.params.idUsuarioServer; 

    anotacaoModel.listarAnotacoes(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao listar as anotações do usuário! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}



function deletarAnotacao(idUsuario, ordemDesejada, res) {
    anotacaoModel.deletarAnotacao(idUsuario, ordemDesejada)
        .then(function () {
            res.status(200).send("Anotação deletada com sucesso.");
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}




module.exports = {
    inserirAnotacao,
    listarAnotacoes,
    deletarAnotacao
}
var publicacaoModel = require("../models/publicacaoModel");

function publicar(req, res) {
    var descricao = req.body.descricao;
    var idUsuario = req.body.idUsuario;

    if (descricao == undefined || idUsuario == undefined) {
        res.status(400).send("Descrição ou ID do usuário está indefinido!");
    } else {
        publicacaoModel.publicar(descricao, idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function mostrarPublicacao(req, res) {
    publicacaoModel.mostrarPublicacao()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function deletar(req, res) {
    var idPublicacao = req.params.idPublicacao;
    var idUsuario = req.body.idUsuario; // Assuming the user ID is sent in the request body for verification

    if (idPublicacao == undefined || idUsuario == undefined) {
        res.status(400).send("ID da publicação ou ID do usuário está indefinido!");
    } else {
        publicacaoModel.deletar(idPublicacao, idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    publicar,
    mostrarPublicacao,
    deletar
};

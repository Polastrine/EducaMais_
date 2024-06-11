const usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;
                                                                            
    if (!email) {
        res.status(400).send("Seu email está indefinido!");
    } else if (!senha) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {
                if (resultadoAutenticar.length == 0) {
                    res.status(401).send("Email e/ou senha inválido(s)");
                } else if (resultadoAutenticar.length > 1) {
                    res.status(500).send("Mais de um usuário com o mesmo login e senha!");
                } else {
                    const usuario = resultadoAutenticar[0];
                    usuarioModel.obterDadosUsuario(usuario.idUsuario) // Pego o idUsuario vindo como resultado da função autenticar e uso como parâmetro na função obterDadosUsuario()
                        .then(function (resultadoDados) {
                            const dadosUsuario = resultadoDados[0];
                            res.status(200).json({
                                id: usuario.idUsuario,
                                nome: usuario.nome,
                                email: usuario.email,
                                dataCriacao: usuario.dataCriacao,
                                jogosFeitos: dadosUsuario.jogosFeitos,
                                publicacoes: dadosUsuario.publicacoes,
                                seguidores: dadosUsuario.seguidores,
                                pontuacaoTotal: dadosUsuario.pontuacaoTotal
                            });
                        })
                        .catch(function (erro) {
                            console.log(erro);
                            console.log("\nHouve um erro ao obter os dados adicionais do usuário! Erro: ", erro.sqlMessage);
                            res.status(500).json(erro.sqlMessage);
                        });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    const nomeCompleto = req.body.nomeServer;
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nomeCompleto == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeCompleto, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    autenticar,
    cadastrar
}
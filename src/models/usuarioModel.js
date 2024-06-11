var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email, senha, dataCriacao FROM usuario WHERE email = '${email}' AND senha = SUBSTRING(SHA2('${senha}', 256), 1, 15);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nomeCompleto, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeCompleto, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, dataCriacao) VALUES ('${nomeCompleto}', '${email}', SUBSTRING(SHA2('${senha}', 256), 1, 15),now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function obterDadosUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            (SELECT COUNT(idResultado) FROM resultado JOIN usuario ON resultado.fkUsuario = usuario.idUsuario WHERE fkUsuario = ${idUsuario}) AS jogosFeitos,
            (SELECT COUNT(idPublicacao) FROM publicacao JOIN usuario ON publicacao.fkUsuario = usuario.idUsuario WHERE fkUsuario = ${idUsuario}) AS publicacoes,
            (SELECT COUNT(fkSeguido) FROM seguidores JOIN usuario ON seguidores.fkSeguidor = usuario.idUsuario WHERE fkSeguido = ${idUsuario}) AS seguidores,
            (SELECT SUM(pontuacao) FROM resultado JOIN usuario ON resultado.fkUsuario = usuario.idUsuario WHERE fkUsuario = ${idUsuario}) AS pontuacaoTotal
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    autenticar,
    cadastrar,
    obterDadosUsuario,
};
var database = require("../database/config");

function publicar(descricao, idUsuario) {
    var instrucaoSql = `
        INSERT INTO publicacao (publicacao, fkUsuario) VALUES ('${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarPublicacao() {
    var instrucaoSql = `
        SELECT publicacao.idPublicacao, publicacao.publicacao, usuario.nome AS nomeCriador, publicacao.fkUsuario 
        FROM publicacao
        JOIN usuario
        ON publicacao.fkUsuario = usuario.idUsuario
        ORDER BY publicacao.idPublicacao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idPublicacao) {
    var instrucaoSql = `
        DELETE FROM publicacao WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar,
    mostrarPublicacao,
    deletar
};

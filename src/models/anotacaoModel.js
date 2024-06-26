var database = require("../database/config");

function inserirAnotacao(anotacao, idUsuario) {
    var instrucaoSql = `
        INSERT INTO anotacao (anotacao, fkUsuario) VALUES ('${anotacao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarAnotacoes(idUsuario) {
    var instrucaoSql = `
        SELECT ROW_NUMBER() OVER (ORDER BY idAnotacao) AS Ordem, anotacao FROM anotacao WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function deletarAnotacao(idUsuario, ordemDesejada) {
    var instrucaoSql = `
        DELETE FROM anotacao 
        WHERE idAnotacao = (
            SELECT idAnotacao 
            FROM (
                SELECT 
                    idAnotacao, 
                    ROW_NUMBER() OVER (ORDER BY idAnotacao) AS Ordem 
                FROM anotacao 
                WHERE fkUsuario = ${idUsuario}
            ) AS subquery 
            WHERE Ordem = ${ordemDesejada}
        )`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

    function obterAnotacao(idUsuario, ordem) {
        var instrucaoSql = `
            SELECT anotacao FROM (
                SELECT ROW_NUMBER() OVER (ORDER BY idAnotacao) AS Ordem, anotacao 
                FROM anotacao 
                WHERE fkUsuario = ${idUsuario}
            ) AS subquery
            WHERE Ordem = ${ordem};
        `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

module.exports = {
    inserirAnotacao,
    listarAnotacoes,
    deletarAnotacao,
    obterAnotacao
}

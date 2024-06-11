var database = require("../database/config");


function salvarPontuacao(pontuacao, idUsuario) {
    console.log("Acessando a função relativa ao registro da pontuação no banco");
    var instrucaoSql = `
        INSERT INTO resultado (pontuacao, fkUsuario) VALUES (${pontuacao}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function exibirRanking() {
    var instrucaoSql = `
        SELECT 
            ROW_NUMBER() OVER (ORDER BY SUM(resultado.pontuacao) DESC) AS Posição,
            usuario.nome AS Nome,
            SUM(resultado.pontuacao) AS PontuacaoTotal
        FROM usuario 
        JOIN resultado ON usuario.idUsuario = resultado.fkUsuario
        GROUP BY usuario.idUsuario, usuario.nome
        ORDER BY 'Pontuação Total' DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    salvarPontuacao,
    exibirRanking
}

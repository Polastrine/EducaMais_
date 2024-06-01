var database = require("../database/config");


function salvarPontuacao(pontuacao, idUsuario) {
    console.log("Acessando a função relativa ao registro da pontuação no banco");
    var instrucaoSql = `
        INSERT INTO resultado (pontuacao, fkUsuario) VALUES (${pontuacao}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarPontuacao
}

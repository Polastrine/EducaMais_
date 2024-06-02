var database = require("../database/config");

function obterDadosGrafico() {
    console.log("Acessando a função relativa ao registro dos dados do gráfico no banco");
    
    var instrucaoSql = `
        SELECT 
            (SELECT COUNT(idUsuario) FROM usuario) AS jogadoresAtivos,
            (SELECT COUNT(idPublicacao) FROM publicacao) AS publicacoesGlobal,
            (SELECT SUM(pontuacao) FROM resultado) AS pontuacaoGlobal,
            (SELECT COUNT(idResultado) FROM resultado) AS jogosFeitosGlobal
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosGrafico
};

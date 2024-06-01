// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var anotacaoRouter = require("./src/routes/anotacao");
var usuarioRouter = require("./src/routes/usuario");
var publicacaoRouter = require("./src/routes/publicacao");
var resultadoRouter = require("./src/routes/resultado");
var seguidoresRouter = require("./src/routes/seguidores");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/anotacao", anotacaoRouter);
app.use("/usuario", usuarioRouter);
app.use("/publicacao", publicacaoRouter);
app.use("/resultado", resultadoRouter);
app.use("/seguidores", seguidoresRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    #######  #####   ##   ##    ####     ##              ##   ##    ##      ####     #####
    ##       ## ##   ##   ##   ##  ##   ####             ### ###   ####      ##     ##   ##
    ##       ##  ##  ##   ##  ##       ##  ##            #######  ##  ##     ##     #
    #######  ##  ##  ##   ##  ##       ##  ##            #######  ##  ##     ##      #####
    ##       ##  ##  ##   ##  ##       ######            ## # ##  ######     ##          ##
    ##       ## ##   ##   ##   ##  ##  ##  ##            ##   ##  ##  ##     ##     ##   ##
    #######  #####   #######    ####   ##  ##            ##   ##  ##  ##    ####     #####
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :.`);
});

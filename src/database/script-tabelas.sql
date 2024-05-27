-- Arquivo base do script feito no MySQL e quais foram as entidades criadas:

CREATE DATABASE educaMais;

USE educaMais;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha CHAR(15) NOT NULL,
    dataCriacao TIMESTAMP,
    jogosFeitos INT DEFAULT 0,
    pontuacaoTotal INT DEFAULT 0
);

CREATE TABLE anotacao (
	idAnotacao INT PRIMARY KEY AUTO_INCREMENT,
    anotacao VARCHAR(280),
    fkUsuario INT,
    CONSTRAINT chkAnotacaoUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
);

CREATE TABLE publicacao (
	idPublicao INT PRIMARY KEY AUTO_INCREMENT,
    publicacao VARCHAR(280),
    fkUsuario INT,
    CONSTRAINT chkPublicacaoUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
);

CREATE TABLE resultado (
	idResultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,
    fkUsuario INT,
    CONSTRAINT chkResultadoUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
);

CREATE TABLE pergunta (
	idPergunta INT PRIMARY KEY AUTO_INCREMENT,
	textoPergunta VARCHAR(100)
);

CREATE TABLE alternativa (
	idAlternativa INT PRIMARY KEY AUTO_INCREMENT,
    textoAlternativa VARCHAR(25),
    correta BOOLEAN,
    fkPergunta INT,
    CONSTRAINT chkAlternativaPergunta FOREIGN KEY (fkPergunta)
		REFERENCES pergunta(idPergunta)
);

CREATE TABLE resposta (
	idResposta INT PRIMARY KEY AUTO_INCREMENT,
    resposta VARCHAR(25),
    fkPergunta INT,
    fkAlternativa INT,
    fkUsuario INT,
    CONSTRAINT chkRespostaPergunta FOREIGN KEY (fkPergunta)
		REFERENCES pergunta(idPergunta),
    CONSTRAINT chkRespostaAlternativa FOREIGN KEY (fkAlternativa)
		REFERENCES alternativa(idAlternativa),
    CONSTRAINT chkRespostaUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
);

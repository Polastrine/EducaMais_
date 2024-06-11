CREATE DATABASE educaMais;

USE educaMais; 

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    dataCriacao DATE
);

CREATE TABLE seguidores (
	idSeguidores INT,
    fkSeguidor INT,
    fkSeguido INT,
    CONSTRAINT chkAssociativa PRIMARY KEY (idSeguidores,fkSeguidor,fkSeguido),
    CONSTRAINT chkSeguidoresSeguidor FOREIGN KEY (fkSeguidor)
		REFERENCES usuario(idUsuario),
	CONSTRAINT chkSeguidoresSeguido FOREIGN KEY (fkSeguido)
		REFERENCES usuario(idUsuario)
);


CREATE TABLE anotacao (
	idAnotacao INT PRIMARY KEY AUTO_INCREMENT,
    anotacao VARCHAR(280),
    fkUsuario INT,
    CONSTRAINT chkAnotacaoUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
);

CREATE TABLE publicacao (
	idPublicacao INT PRIMARY KEY AUTO_INCREMENT,
    publicacao VARCHAR(280),
    fkUsuario INT,
    CONSTRAINT chkPublicacaoUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
);


CREATE TABLE resultado (
	idResultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT DEFAULT 0,
    fkUsuario INT,
    CONSTRAINT chkResultadoUsuario FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario)
);
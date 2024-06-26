// ANIMÇÕES DE TROCA DOS DISPLAYS:                                   ----------------------------------------------------------------------

function acessarHome() {
    const interfaceBox = document.querySelector('.interfaceBox1');
    const interfaceBox2 = document.querySelector('.interfaceBox2');
    const interfaceBox3 = document.querySelector('.interfaceBox3');
    const interfaceBox4 = document.querySelector('.interfaceBox4');
    const displayToggle = document.querySelector('.displayToggle');
    const displayToggle2 = document.querySelector('.displayToggle2');
    const displayToggle3 = document.querySelector('.displayToggle3');
    const displayToggle4 = document.querySelector('.displayToggle4');

    displayToggle.style.animation = 'opacity 0.8s ease-in-out'

    displayToggle.style.display = 'block'
    displayToggle2.style.display = 'none'
    displayToggle3.style.display = 'none'
    displayToggle4.style.display = 'none'

    interfaceBox.style.display = 'block'
    interfaceBox2.style.display = 'none'
    interfaceBox3.style.display = 'none'
    interfaceBox4.style.display = 'none'

    plotarDados()
}


function acessarForum() {
    const interfaceBox = document.querySelector('.interfaceBox1');
    const interfaceBox2 = document.querySelector('.interfaceBox2');
    const interfaceBox3 = document.querySelector('.interfaceBox3');
    const interfaceBox4 = document.querySelector('.interfaceBox4');
    const displayToggle = document.querySelector('.displayToggle');
    const displayToggle2 = document.querySelector('.displayToggle2');
    const displayToggle3 = document.querySelector('.displayToggle3');
    const displayToggle4 = document.querySelector('.displayToggle4');

    displayToggle2.style.animation = 'opacity 0.8s ease-in-out'

    displayToggle.style.display = 'none'
    displayToggle2.style.display = 'block'
    displayToggle3.style.display = 'none'
    displayToggle4.style.display = 'none'


    interfaceBox.style.display = 'none'
    interfaceBox2.style.display = 'block'
    interfaceBox3.style.display = 'none'
    interfaceBox4.style.display = 'none'
}


function acessarQuiz() {
    const interfaceBox = document.querySelector('.interfaceBox1');
    const interfaceBox2 = document.querySelector('.interfaceBox2');
    const interfaceBox3 = document.querySelector('.interfaceBox3');
    const interfaceBox4 = document.querySelector('.interfaceBox4');
    const displayToggle = document.querySelector('.displayToggle');
    const displayToggle2 = document.querySelector('.displayToggle2');
    const displayToggle3 = document.querySelector('.displayToggle3');
    const displayToggle4 = document.querySelector('.displayToggle4');

    displayToggle3.style.animation = 'opacity 0.8s ease-in-out'

    displayToggle.style.display = 'none'
    displayToggle2.style.display = 'none'
    displayToggle3.style.display = 'block'
    displayToggle4.style.display = 'none'


    interfaceBox.style.display = 'none'
    interfaceBox2.style.display = 'none'
    interfaceBox3.style.display = 'block'
    interfaceBox4.style.display = 'none'
}


function acessarEstatisticas() {
    const interfaceBox = document.querySelector('.interfaceBox1');
    const interfaceBox2 = document.querySelector('.interfaceBox2');
    const interfaceBox3 = document.querySelector('.interfaceBox3');
    const interfaceBox4 = document.querySelector('.interfaceBox4');
    const displayToggle = document.querySelector('.displayToggle');
    const displayToggle2 = document.querySelector('.displayToggle2');
    const displayToggle3 = document.querySelector('.displayToggle3');
    const displayToggle4 = document.querySelector('.displayToggle4');

    displayToggle4.style.animation = 'opacity 0.8s ease-in-out'


    displayToggle.style.display = 'none'
    displayToggle2.style.display = 'none'
    displayToggle3.style.display = 'none'
    displayToggle4.style.display = 'block'


    interfaceBox.style.display = 'none'
    interfaceBox2.style.display = 'none'
    interfaceBox3.style.display = 'none'
    interfaceBox4.style.display = 'block'

    exibirRanking()
}


function voltarHome() {
    window.location.href = '../index.html'
}



function plotarDados() {
    let idUsuario = sessionStorage.ID_USUARIO;
    let nomeUsuario = sessionStorage.NOME_USUARIO;
    let emailUsuario = sessionStorage.EMAIL_USUARIO;
    let dataCriacao = sessionStorage.DATA_CRIACAO;
    let jogosFeitos = sessionStorage.JOGOS_FEITOS;
    let qntdPublicacoes = sessionStorage.PUBLICACOES;
    let pontuacaoTotal = sessionStorage.PONTUACAO_TOTAL;
    let nomeUsuarioNav = '';
    let dataCriacaoEditada = dataCriacao.slice(0, 10);

    for (let posicaoLetra = 0; posicaoLetra < nomeUsuario.length; posicaoLetra++) {
        let letra = nomeUsuario[posicaoLetra];
        if (letra != ' ') {
            nomeUsuarioNav += letra;
        } else {
            break;
        }
    }

    const box_nomeUsuario = document.getElementById('nomePerfilNav');
    const span_nomeUsuario = document.getElementById('boxNomePlotado');
    const span_emailUsuario = document.getElementById('boxEmailPlotado');
    const span_dataCriacaoUsuario = document.getElementById('boxDataPlotada');
    const box_jogosFeitos = document.getElementById('boxJogosPlotados');
    const box_publicacoes = document.getElementById('boxPublicacoesPlotadas');
    const box_pontuacaoTotal = document.getElementById('boxPontuacaoPlotada');
    const box_rankingAtual = document.getElementById('boxRankingPlotado');

    // FETCH PARA OBTENÇÃO DA POSIÇÃO DO USUÁRIO NO RANKING
    // FETCH PARA OBTENÇÃO DA POSIÇÃO DO USUÁRIO NO RANKING
    fetch(`/resultado/exibirPosicaoUsuario/${idUsuario}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            console.log('Erro ao obter posição do usuário no ranking');
        })
        .then(data => { 
            const posicaoUsuario = data.posicao; 
            if (posicaoUsuario !== undefined) {
                box_rankingAtual.innerHTML = `${posicaoUsuario}º`;
            } else {
                console.log('Não encontrada!');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });



    box_nomeUsuario.innerHTML = `<b>${nomeUsuarioNav}</b>`;
    span_nomeUsuario.innerHTML = `${nomeUsuario}`;
    span_emailUsuario.innerHTML = `${emailUsuario}`;
    span_dataCriacaoUsuario.innerHTML = `${dataCriacaoEditada}`;
    box_jogosFeitos.innerHTML = `${jogosFeitos}`;
    box_publicacoes.innerHTML = `${qntdPublicacoes}`;
    if (pontuacaoTotal == 'null') {
        pontuacaoTotal = 0;
    }
    box_pontuacaoTotal.innerHTML = `${pontuacaoTotal}`;
}





// FUNÇÕES RELATIVAS AO QUIZ:                             --------------------------------------------------------------------

let listaPerguntas = [
    {
        id: 1,
        pergunta: 'Qual é o principal componente que mantém uma aeronave voando?',
        respostas: {
            a: 'Asa',
            b: 'Motor',
            c: 'Fuselagem',
            d: 'Roda' 
        },
        respostaCorreta: 'a'
    },
    {
        id: 2,
        pergunta: 'Quem é considerado o pai da aviação?',
        respostas: {
            a: 'Wright Brothers',
            b: 'Alberto Santos-Dumont',
            c: 'Leonardo da Vinci',
            d: 'Amelia Earhart'
        },
        respostaCorreta: 'b'
    },
    {
        id: 3,
        pergunta: 'Qual o primeiro passo no processo de programação?',
        respostas: {
            a: 'Escrever o código',
            b: 'Testar o programa',
            c: 'Compilar o código',
            d: 'Planejar o algoritmo'
        },
        respostaCorreta: 'd'
    },
    {
        id: 4,
        pergunta: 'O que é o ângulo de estol?',
        respostas: {
            a: 'Ângulo da Roda',
            b: 'Ângulo de Visão Periférica',
            c: 'Ângulo Crítico de Inclinação',
            d: 'Ângulo de Manobragem'
        },
        respostaCorreta: 'c'
    },
    {
        id: 5,
        pergunta: 'Quantos bytes há em um kilobyte?',
        respostas: {
            a: '1000',
            b: '1024',
            c: '2048',
            d: '512'
        },
        respostaCorreta: 'b'
    },
    {
        id: 6,
        pergunta: 'Qual é a velocidade mínima necessária para que uma aeronave possa sustentar voo?',
        respostas: {
            a: 'Velocidade do som',
            b: 'Velocidade de cruzeiro',
            c: 'Velocidade de decolagem',
            d: 'Velocidade de estol'
        },
        respostaCorreta: 'd'
    },
    {
        id: 7,
        pergunta: 'Em que ano foi fundada a Embraer?',
        respostas: {
            a: '1960',
            b: '1969',
            c: '1975',
            d: '1983'
        },
        respostaCorreta: 'b'
    },
    {
        id: 8,
        pergunta: 'Qual lógica de programação representa uma condição verdadeira e uma falsa?',
        respostas: {
            a: 'Loop',
            b: 'Variável',
            c: 'Operador lógico',
            d: 'Booleano'
        },
        respostaCorreta: 'd'
    },
    {
        id: 9,
        pergunta: 'Qual é o menor país do mundo?',
        respostas: {
            a: 'Mônaco',
            b: 'Nauru',
            c: 'Vaticano',
            d: 'San Marino'
        },
        respostaCorreta: 'c'
    },
    {
        id: 10,
        pergunta: 'Qual o nome do maior avião comercial fabricado pela Embraer?',
        respostas: {
            a: 'Embraer E190',
            b: 'Embraer E195-E2',
            c: 'Embraer Lineage 1000',
            d: 'Embraer KC-390'
        },
        respostaCorreta: 'b'
    },
    {
        id: 11,
        pergunta: 'Quem inventou a lâmpada?',
        respostas: {
            a: 'Graham Bell',
            b: 'Steve Jobs',
            c: 'Thomas Edison',
            d: 'Henry Ford'
        },
        respostaCorreta: 'c'
    },
    {
        id: 12,
        pergunta: 'Qual é o nome da técnica para encontrar bugs em um programa?',
        respostas: {
            a: 'Debugging',
            b: 'Compiling',
            c: 'Executing',
            d: 'Interpreting'
        },
        respostaCorreta: 'a'
    },
    {
        id: 13,
        pergunta: 'Em que ano foi usado um celular pela primeira vez no Brasil?',
        respostas: {
            a: '1900',
            b: '1990',
            c: '1890',
            d: '2000'
        },
        respostaCorreta: 'b'
    },
    {
        id: 14,
        pergunta: 'Que grande evento histórico aconteceu em 1822 no Brasil?',
        respostas: {
            a: 'Descobrimento do Brasil',
            b: 'Ditadura Militar',
            c: 'Independência do Brasil',
            d: 'Construção de Brasília'
        },
        respostaCorreta: 'c'
    },
    {
        id: 15,
        pergunta: 'Qual lógica é usada para iterar sobre uma coleção de elementos?',
        respostas: {
            a: 'Variável',
            b: 'Operador lógico',
            c: 'Condicional',
            d: 'Loop'
        },
        respostaCorreta: 'd'
    },
    {
        id: 16,
        pergunta: 'Qual é a diferença entre HTML e CSS?',
        respostas: {
            a: 'HTML é uma linguagem de programação e CSS não é',
            b: 'HTML estrutura o conteúdo da página e CSS estiliza a página',
            c: 'HTML é usado para backend e CSS para frontend',
            d: 'HTML é uma biblioteca e CSS é um framework'
        },
        respostaCorreta: 'b'
    },
    {
        id: 17,
        pergunta: 'Qual foi o primeiro computador do mundo?',
        respostas: {
            a: 'ENIAC',
            b: 'Macintosh',
            c: 'Apple II',
            d: 'Ibook'
        },
        respostaCorreta: 'a'
    },
    {
        id: 18,
        pergunta: 'Qual é a principal vantagem de usar o framework React?',
        respostas: {
            a: 'Melhor performance em processamento de dados',
            b: 'Maior segurança na aplicação',
            c: 'Facilidade de manutenção de código e reusabilidade de componentes',
            d: 'Compatibilidade com todas as linguagens de programação'
        },
        respostaCorreta: 'c'
    },
    {
        id: 19,
        pergunta: 'Qual foi o primeiro avião a jato comercial fabricado pela Embraer?',
        respostas: {
            a: 'Embraer ERJ 135',
            b: 'Embraer ERJ 145',
            c: 'Embraer E170',
            d: 'Embraer E190'
        },
        respostaCorreta: 'b'
    },
    {
        id: 20,
        pergunta: 'Qual alternativa não é um eixo de um avião?',
        respostas: {
            a: 'Lateral',
            b: 'Rotacional',
            c: 'Longitudinal',
            d: 'Vertical'
        },
        respostaCorreta: 'b'
    },
    {
        id: 21,
        pergunta: 'De quem é a famosa frase “Penso, logo existo”?',
        respostas: {
            a: 'Platão',
            b: 'Sócrates',
            c: 'Galileu Galilei',
            d: 'Descartes'
        },
        respostaCorreta: 'd'
    },
    {
        id: 22,
        pergunta: 'Quantas casas decimais tem o número pi?',
        respostas: {
            a: 'Infinitas',
            b: 'Centenas',
            c: 'Duas',
            d: 'Vinte'
        },
        respostaCorreta: 'a'
    },
    {
        id: 23,
        pergunta: 'O que é um “commit” em sistemas de controle de versão?',
        respostas: {
            a: 'Um backup do sistema',
            b: 'Uma fusão de dois branches',
            c: 'Uma alteração salva no repositório',
            d: 'Um teste do código'
        },
        respostaCorreta: 'c'
    },
    {
        id: 24,
        pergunta: 'Qual lógica de programação utiliza "se...senão"?',
        respostas: {
            a: 'Loop',
            b: 'Condicional',
            c: 'Variável',
            d: 'Array'
        },
        respostaCorreta: 'b'
    },
    {
        id: 25,
        pergunta: 'Em qual cidade está localizada a sede da Embraer?',
        respostas: {
            a: 'Rio de Janeiro',
            b: 'São Paulo',
            c: 'São José dos Campos',
            d: 'Campinas'
        },
        respostaCorreta: 'c'
    },
    {
        id: 26,
        pergunta: '“It is six twenty" ou "twenty past six”. Que horas são em inglês?',
        respostas: {
            a: '12:06',
            b: '6:02',
            c: '6:20',
            d: '12:20'
        },
        respostaCorreta: 'c'
    },
    {
        id: 27,
        pergunta: 'Qual a finalidade do protocolo HTTP?',
        respostas: {
            a: 'Transferência de arquivos entre cliente e servidor',
            b: 'Resolução de nomes de domínio',
            c: 'Envio de e-mails',
            d: 'Criptografia de dados'
        },
        respostaCorreta: 'a'
    },
    {
        id: 28,
        pergunta: 'Qual é a principal característica do modelo ágil de desenvolvimento de software?',
        respostas: {
            a: 'Documentação extensiva',
            b: 'Flexibilidade e entregas rápidas',
            c: 'Processos rigorosos e sequenciais',
            d: 'Entrega de software ao final do projeto'
        },
        respostaCorreta: 'b'
    },
    {
        id: 29,
        pergunta: 'De qual dirigível o Brasil tem um hangar?',
        respostas: {
            a: 'Zeppelin',
            b: 'Hindenburg',
            c: 'Bodensee',
            d: 'LZ-7'
        },
        respostaCorreta: 'a'
    },
    {
        id: 30,
        pergunta: 'O que é uma função recursiva?',
        respostas: {
            a: 'Uma função que chama outras funções',
            b: 'Uma função que se chama a si mesma',
            c: 'Uma função que não retorna um valor',
            d: 'Uma função que é executada uma vez'
        },
        respostaCorreta: 'b'
    }
];


let posicao = 0;
let pontuacao = 0;
let perguntasAleatorias = listaPerguntas.sort(() => Math.random() - 0.5).slice(0, 10); // Criação de um array com 10 perguntas aleatórias.

function iniciarQuiz() {
    const quizInterface1 = document.querySelector('.quizInicio1');
    const quizInterface2 = document.querySelector('.quizInicio2');

    quizInterface1.style.display = 'none';
    quizInterface2.style.display = 'flex';
    quizInterface2.style.flexDirection = 'column';

    exibirPergunta(posicao);
}

function exibirPergunta(posicao) {
    let pergunta = perguntasAleatorias[posicao].pergunta;
    let alternativas = perguntasAleatorias[posicao].respostas;

    const boxPergunta = document.getElementById('boxPergunta');
    const boxAlternativa1 = document.getElementById('alternativa1');
    const boxAlternativa2 = document.getElementById('alternativa2');
    const boxAlternativa3 = document.getElementById('alternativa3');
    const boxAlternativa4 = document.getElementById('alternativa4');
    const alternativaBoxes = document.querySelectorAll('.alternativa');
    const botaoAvancar = document.querySelector('.botaoAvancar');

    alternativaBoxes.forEach(function (alternativa) {
        alternativa.style.backgroundColor = '#FFFFFF';
    });
    botaoAvancar.style.display = 'none';
    respostaSelecionada = '';

    boxPergunta.innerHTML = `<h2>${pergunta}</h2>`;
    boxPergunta.innerHTML += `<img src="./assets/lampada.png">`;
    boxAlternativa1.innerHTML = `<p>${alternativas.a}</p>`;
    boxAlternativa2.innerHTML = `<p>${alternativas.b}</p>`;
    boxAlternativa3.innerHTML = `<p>${alternativas.c}</p>`;
    boxAlternativa4.innerHTML = `<p>${alternativas.d}</p>`;

    alternativaBoxes.forEach(function (alternativa) {
        alternativa.onclick = function () {
            alternativaBoxes.forEach(function (alternativa) {
                alternativa.style.backgroundColor = '#FFFFFF';
            });
            this.style.backgroundColor = '#fc29d2';
            respostaSelecionada = this.getAttribute('valorAlternativa');
            botaoAvancar.style.display = 'block';
        };
    });
}

function verificarResposta() {
    if (respostaSelecionada == '') {
        alert('Por favor, selecione uma alternativa antes de avançar.');
    } else {
        let respostaCorreta = perguntasAleatorias[posicao].respostaCorreta;
        const alternativaBoxes = document.querySelectorAll('.alternativa');

        alternativaBoxes.forEach(function (alternativa) {
            let valorAlternativa = alternativa.getAttribute('valorAlternativa');
            if (valorAlternativa === respostaCorreta) {
                alternativa.style.backgroundColor = '#008000'; // Verde para correta
            } else if (valorAlternativa === respostaSelecionada) {
                alternativa.style.backgroundColor = '#f7677d'; // Vermelho para errada selecionada
            } else {
                alternativa.style.backgroundColor = '#f7677d'; // Vermelho para erradas não selecionadas
            }
        });

        if (respostaCorreta == respostaSelecionada) {
            pontuacao++;
        }

        posicao++;
        if (posicao < 10) {
            setTimeout(() => exibirPergunta(posicao), 2000);
        } else {
            setTimeout(() => finalizarQuiz(pontuacao), 3000);
        }
    }
}

function finalizarQuiz() {
    const quizInterface2 = document.querySelector('.quizInicio2');
    const quizInterface3 = document.querySelector('.quizInicio3');

    quizInterface2.style.display = 'none';
    quizInterface3.style.display = 'flex';

    let pontuacaoFeita = document.getElementById('pontuacaoFeita');
    pontuacaoFeita.innerHTML = `${pontuacao}/10`;

    fetch("/resultado/salvar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pontuacao: pontuacao,
            idUsuario: sessionStorage.ID_USUARIO
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.log("Erro ao salvar pontuação.");
            }
        })
        .then(function (json) {
            if (json) {
                // Atualizar os dados do usuário no sessionStorage
                sessionStorage.JOGOS_FEITOS = json.jogosFeitos;
                sessionStorage.PONTUACAO_TOTAL = json.pontuacaoTotal;

                setTimeout(() => reiniciarQuiz(), 3000);
            }
        })
        .catch(function (erro) {
            console.log(erro.message);
            mostrarAlerta(erro.message);
        });
}


function reiniciarQuiz() {
    const quizInterface1 = document.querySelector('.quizInicio1')
    const quizInterface3 = document.querySelector('.quizInicio3');

    quizInterface1.style.display = 'block';
    quizInterface3.style.display = 'none';

    // Resetando variáveis
    posicao = 0;
    pontuacao = 0;
    perguntasAleatorias = listaPerguntas.sort(() => Math.random() - 0.5).slice(0, 10); // Reembaralhando perguntas
}





// FUNÇÕES REFERENTES ÀS ANOTAÇÕES PESSOAIS:


function inserirAnotacao() {
    const idUsuario = sessionStorage.ID_USUARIO;
    const anotacaoTexto = document.getElementById('caixaTexto').value;

    fetch(`/anotacao/inserirAnotacao`, {
        credentials: 'include',
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            anotacaoServer: anotacaoTexto,
            idUsuarioServer: idUsuario
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                listarAnotacoes(); // Atualiza a lista de anotações após inserir
            } else {
                console.log("Houve um erro ao tentar inserir a anotação.");
            }
        })
        .catch(function (erro) {
            console.log(erro.message);
        });
}


function listarAnotacoes() {
    const idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/anotacao/listarAnotacoes/${idUsuario}`, {
        credentials: 'include',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.log("Houve um erro ao tentar listar as anotações.");
            }
        })
        .then(function (json) {
            if (json) {
                const anotacoesSalvas = document.getElementById('anotacoesSalvas');
                anotacoesSalvas.innerHTML = '';

                json.forEach(anotacao => {
                    anotacoesSalvas.innerHTML += `
                    <div class="anotacaoSalvada">
                        <h2 onclick='obterAnotacao(${idUsuario}, ${anotacao.Ordem})' class="anotacaoTexto">${anotacao.Ordem}º Anotação </h2>
                        <div onclick='deletarAnotacao(${idUsuario}, ${anotacao.Ordem})' class="btn_removerAnotacao"><h1>X</h1></div>
                    </div>
                `;
                });
            }
        })
        .catch(function (erro) {
            console.log(erro.message);
        });
}


function obterAnotacao(idUsuario, ordem) {
    fetch(`/anotacao/obterAnotacao/${idUsuario}/${ordem}`)
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.log("Erro ao obter anotação.");
            }
        })
        .then(function (json) {
            exibirAnotacao(json);
        })
        .catch(function (erro) {
            console.error("Erro:", erro);
        });
}


function exibirAnotacao(anotacao) {
    let anotacaoText = document.querySelector(".anotacaoText");

    anotacaoText.innerHTML = `${anotacao.anotacao}`;

    abrirAnotacao();
}


function abrirAnotacao() {
    let modal = document.querySelector(".boxAnotacao");
    let desfoque = document.querySelector(".boxDesfoque");

    desfoque.style.visibility = 'visible';
    desfoque.style.opacity = '1';

    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
}


function fecharAnotacao() {
    let modal = document.querySelector(".boxAnotacao");
    let desfoque = document.querySelector(".boxDesfoque");

    desfoque.style.opacity = '0';
    desfoque.style.visibility = 'hidden';

    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
}


function deletarAnotacao(idUsuario, ordem) {
    fetch(`/anotacao/deletarAnotacao/${idUsuario}/${ordem}`, {
        credentials: 'include',
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                console.log("Anotação deletada com sucesso.");
                listarAnotacoes();
            } else {
                console.log("Houve um erro ao tentar deletar a anotação.");
            }
        })
        .catch(function (erro) {
            console.log(erro.message);
        });
}





// FUNÇÕES RELATIVAS AOS GŔAFICOS E AOS SEUS DADOS:                            --------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', (event) => {
    const ctx1 = document.getElementById('myChart1').getContext('2d');

    var graficoBarras1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Jogadores Ativos', 'Publicações', 'Pontuação Global', 'Jogos Feitos'],
            datasets: [{
                label: 'Estatísticas Globais',
                data: [],
                backgroundColor: '#fc29d2', // Cor de fundo
                borderColor: '#ffffff', // Cor da borda branca
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff' // Cor das fontes da legenda
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff', // Cor das fontes do eixo y
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Cor dos traços de fundo do eixo y com opacidade reduzida
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff', // Cor das fontes do eixo x
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Cor dos traços de fundo do eixo x com opacidade reduzida
                    }
                }
            }
        }
    });

    fetch('/grafico/obterDadosGraficos')
        .then(resposta => resposta.json())
        .then(data => {
            graficoBarras1.data.datasets[0].data = [
                data.jogadoresAtivos,
                data.publicacoesGlobal,
                data.pontuacaoGlobal,
                data.jogosFeitosGlobal
            ];
            graficoBarras1.update();

            document.getElementById('jogadoresAtivos').innerText = data.jogadoresAtivos;
            document.getElementById('publicacoesGlobal').innerText = data.publicacoesGlobal;
            document.getElementById('pontuacaoGlobal').innerText = data.pontuacaoGlobal;
            document.getElementById('jogosFeitosGlobal').innerText = data.jogosFeitosGlobal;
        })
        .catch(error => {
            console.error('Erro ao buscar dados do gráfico:', error);
        });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const ctx2 = document.getElementById('myChart2').getContext('2d');

    var graficoBarras2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Pontuação',
                data: [],
                backgroundColor: 'rgb(0, 187, 255)',
                borderColor: '#ffffff',
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ffffff',
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff',
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                }
            }
        }
    });

    exibirRanking(graficoBarras2);
});


function exibirRanking(graficoBarras2) {
    fetch(`/resultado/exibirRanking`, {
        credentials: 'include',
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.log("Houve um erro ao tentar listar o ranking.");
            }
        })
        .then(function (json) {
            if (json) {
                const boxRanking = document.getElementById('ranks');
                boxRanking.innerHTML = '';

                let labels = [];
                let data = [];

                json.forEach(usuario => {
                    boxRanking.innerHTML += `
                    <div class="rankItem">
                        <div class="nomeRank">
                            <span class="nomeText"><p>${usuario.Nome}</p></span>
                        </div>
                        <div class="posicaoRank">
                            <span class="posicaoText"><p>${usuario.Posicao}º</p></span>              
                        </div>
                        <div class="pontuacaoRank">
                            <span class="pontuacaoText"><p>${usuario.PontuacaoTotal}</p></span>
                        </div>
                    </div>
                `;
                    labels.push(usuario.Nome);
                    data.push(usuario.PontuacaoTotal);
                });

                graficoBarras2.data.labels = labels;
                graficoBarras2.data.datasets[0].data = data;
                graficoBarras2.update();
            }
        })
        .catch(function (erro) {
            console.log(erro.message);
        });
}





// FUNÇÕES REFERENTES AO FÓRUM:                                     --------------------------------------------------------------------

mostrarPublicacoes()

function publicar() {
    const descricao = document.querySelector('.caixaTexto2').value;
    const idUsuario = sessionStorage.ID_USUARIO;

    fetch('/publicacao/publicar', {
        credentials: 'include',
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ descricao: descricao, idUsuario: idUsuario })
    })
        .then(response => {
            if (response.ok) {
                mostrarPublicacoes();
                document.querySelector('.caixaTexto2').value = '';
            } else {
                console.log("Erro ao publicar.");
            }
        })
        .catch(error => {
            console.log(error.message);
        });
}


function mostrarPublicacoes() {
    fetch('/publicacao/mostrarPublicacao', {
        credentials: 'include',
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json();
            } else {
                console.log("Erro ao buscar publicações.");
            }
        })
        .then(json => {
            const boxPosts = document.querySelector('.boxPosts');
            boxPosts.innerHTML = '';

            json.forEach(publicacao => {
                const isOwner = publicacao.fkUsuario == sessionStorage.ID_USUARIO;
                boxPosts.innerHTML += `
                <div class="publicacao">
                    <div class="publicacaoText">
                        <p>${publicacao.publicacao}</p>
                    </div>
                    <div class="publicacaoBtn">
                        <div class="nomeCriador"><p>${publicacao.nomeCriador}</p></div>
                        ${!isOwner ? '<div class="btn_seguir" onclick="seguir()"> <img src="./assets/plataforma/seguir.png"></div>' : ''}
                        ${isOwner ? `<div class="btn_remover" onclick="deletar(${publicacao.idPublicacao})"><h3>X</h3></div>` : ''}
                    </div>
                </div>
            `;
            });
        })
        .catch(error => {
            console.log(error.message);
        });
}


function deletar(idPublicacao) {
    const idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/publicacao/deletar/${idPublicacao}`, {
        credentials: 'include',
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ idUsuario: idUsuario })
    })
        .then(response => {
            if (response.ok) {
                mostrarPublicacoes();
            } else {
                console.log("Erro ao deletar publicação.");
            }
        })
        .catch(error => {
            console.log(error.message);
        });
}

function acessarHome(){
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
}


function acessarForum(){
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


function acessarQuiz(){
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
    interfaceBox4.style.display = 'nome'
}


function acessarEstatisticas(){
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
}


function voltarHome(){
    window.location.href = '../index.html'
}


function plotarDados(){
    let nomeUsuario = sessionStorage.NOME_USUARIO;
    let nomeUsuarioNav = '';
    let emailUsuario = sessionStorage.EMAIL_USUARIO;
    let dataCriacao = sessionStorage.DATA_CRIACAO;
    let dataCriacaoEditado = dataCriacao.slice(0,10);

    for(let posicaoLetra = 0; posicaoLetra < nomeUsuario.length; posicaoLetra++){
        let letra = nomeUsuario[posicaoLetra];
        if(letra != ' '){
            nomeUsuarioNav += letra
        } else{
            break
        }
    }
    console.log(nomeUsuarioNav)

    const box_nomeUsuario = document.getElementById('nomePerfil')
    const span_nomeUsuario = document.getElementById('spanNome')
    const span_emailUsuario = document.getElementById('spanEmail')
    const span_dataCriacaoUsuario = document.getElementById('spanData');

    box_nomeUsuario.innerHTML += `<p><b>${nomeUsuarioNav}</b></p>`;
    span_nomeUsuario.innerHTML += `<span class="boxNomePlotado">${nomeUsuario}</span>`  
    span_emailUsuario.innerHTML += `<span class="boxEmailPlotado">${emailUsuario}</span>` 
    span_dataCriacaoUsuario.innerHTML += `<span class="boxDataPlotada">${dataCriacaoEditado}</span>` 
}


let listaPerguntas = [
    {
        id: 1,
        pergunta: 'Qual foi a primeira aeronave fabricada pela Embraer?',
        respostas: {
            a: 'Embraer 110 Bandeirante',
            b: 'Embraer 120 Brasília',
            c: 'Embraer 190',
            d: 'Embraer E-Jet'
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
        pergunta: 'Qual linguagem de programação é conhecida por sua simplicidade e uso em aprendizado?',
        respostas: {
            a: 'C++',
            b: 'Java',
            c: 'Python',
            d: 'Assembly'
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
        pergunta: 'Qual desses aviões foi desenvolvido para substituir o Embraer EMB-120 Brasília?',
        respostas: {
            a: 'Embraer ERJ 145',
            b: 'Embraer E-Jet',
            c: 'Embraer EMB-110 Bandeirante',
            d: 'Embraer KC-390'
        },
        respostaCorreta: 'a'
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
        pergunta: 'Qual é o algoritmo de ordenação mais simples?',
        respostas: {
            a: 'Merge Sort',
            b: 'Quick Sort',
            c: 'Bubble Sort',
            d: 'Heap Sort'
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
        pergunta: 'O que é um loop infinito?',
        respostas: {
            a: 'Um loop que nunca termina',
            b: 'Um loop que termina imediatamente',
            c: 'Um loop que ocorre uma vez',
            d: 'Um loop que depende de uma condição externa'
        },
        respostaCorreta: 'a'
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
        pergunta: 'Quem foi o primeiro brasileiro a pilotar um avião?',
        respostas: {
            a: 'Alberto Santos-Dumont',
            b: 'Rolim Amaro',
            c: 'Edu Chaves',
            d: 'Octávio Pinto'
        },
        respostaCorreta: 'a'
    },
    {
        id: 14,
        pergunta: 'Qual é a função de um compilador em programação?',
        respostas: {
            a: 'Executar o código',
            b: 'Escrever o código',
            c: 'Converter código fonte em código executável',
            d: 'Testar o código'
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
        pergunta: 'O que significa a sigla SQL?',
        respostas: {
            a: 'Structured Query Language',
            b: 'Simple Query Language',
            c: 'Sequential Query Language',
            d: 'Standard Query Language'
        },
        respostaCorreta: 'a'
    },
    {
        id: 18,
        pergunta: 'Qual é a principal vantagem de usar o framework React?',
        respostas: {
            a: 'Melhor performance em processamento de dados',
            b: 'Facilidade de manutenção de código e reusabilidade de componentes',
            c: 'Maior segurança na aplicação',
            d: 'Compatibilidade com todas as linguagens de programação'
        },
        respostaCorreta: 'b'
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
        pergunta: 'Qual é a complexidade do algoritmo de busca binária?',
        respostas: {
            a: 'O(n)',
            b: 'O(n log n)',
            c: 'O(log n)',
            d: 'O(1)'
        },
        respostaCorreta: 'c'
    },
    {
        id: 21,
        pergunta: 'Qual é o objetivo do teste unitário?',
        respostas: {
            a: 'Testar a aplicação como um todo',
            b: 'Testar unidades individuais de código',
            c: 'Testar a performance do sistema',
            d: 'Testar a interface do usuário'
        },
        respostaCorreta: 'b'
    },
    {
        id: 22,
        pergunta: 'Qual destas é uma aeronave de carga desenvolvida pela Embraer?',
        respostas: {
            a: 'Embraer E195-E2',
            b: 'Embraer KC-390',
            c: 'Embraer Phenom 300',
            d: 'Embraer Legacy 650'
        },
        respostaCorreta: 'b'
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
        pergunta: 'Qual linguagem de programação é amplamente usada para desenvolvimento de aplicativos Android?',
        respostas: {
            a: 'Swift',
            b: 'Python',
            c: 'Java',
            d: 'Ruby'
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
        pergunta: 'Qual dessas aeronaves é utilizada para transporte executivo?',
        respostas: {
            a: 'Embraer Phenom 100',
            b: 'Embraer KC-390',
            c: 'Embraer EMB 314 Super Tucano',
            d: 'Embraer E195-E2'
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
        if(posicao < 10){
            setTimeout(() => exibirPergunta(posicao), 2000);
        } else{
            setTimeout(() => finalizarQuiz(), 3000);
        }
    }
}

function finalizarQuiz(){
    const quizInterface2 = document.querySelector('.quizInicio2');
    const quizInterface3 = document.querySelector('.quizInicio3');

    quizInterface2.style.display = 'none';
    quizInterface3.style.display = 'flex';

    let pontuacaoFeita = document.getElementById('pontuacaoFeita')
    pontuacaoFeita.innerHTML = `${pontuacao}/10`

    setTimeout(() => reiniciarQuiz(), 3000);
}

function reiniciarQuiz(){
    const quizInterface1 = document.querySelector('.quizInicio1')
    const quizInterface3 = document.querySelector('.quizInicio3');

    quizInterface1.style.display = 'block';
    quizInterface3.style.display = 'none';

    // Resetando variáveis
    posicao = 0;
    pontuacao = 0;
    perguntasAleatorias = listaPerguntas.sort(() => Math.random() - 0.5).slice(0, 10); // Reembaralhando perguntas
}
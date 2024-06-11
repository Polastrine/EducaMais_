
// Exibir a senha:
    const olhoSenha1 = document.getElementById('olhoSenha1');
    const inputSenha1 = document.getElementById('inputSenha1');
    const olhoSenha2 = document.getElementById('olhoSenha2');
    const inputSenha2 = document.getElementById('inputSenha2');
    const olhoSenha3 = document.getElementById('olhoSenha3');
    const inputSenha3 = document.getElementById('inputSenha3');


    olhoSenha1.addEventListener('click', function() {
        if (inputSenha1.type === 'password') {
            inputSenha1.type = 'text';
        } else {
            inputSenha1.type = 'password';
        }
    });

    olhoSenha2.addEventListener('click', function() {
        if (inputSenha2.type === 'password') {
            inputSenha2.type = 'text';
        } else {
            inputSenha2.type = 'password';
        }
    });

    olhoSenha3.addEventListener('click', function() {
        if (inputSenha3.type === 'password') {
            inputSenha3.type = 'text';
        } else {
            inputSenha3.type = 'password';
        }
    });


// Animação inicial da tela de cadastro e login
document.addEventListener("DOMContentLoaded", function() {
    const boxesDiv = document.querySelector('.boxesDiv');

    boxesDiv.style.transform = 'translateY(780px)';
  });


function mudarTela1() {
    const boxCinza = document.querySelector(".boxCinza");
    const boxRosa = document.querySelector(".boxRosa");
    const boxRosaContent1 = document.querySelector(".boxRosaContent1");
    const boxRosaContent2 = document.querySelector(".boxRosaContent2");
    const boxCinzaContent1 = document.querySelector(".boxCinzaContent1");
    const boxCinzaContent2 = document.querySelector(".boxCinzaContent2");
    const inputNome1 = document.getElementById("inputNome1");
    const inputEmail2 = document.getElementById("inputEmail2");
    const inputSenha2 = document.getElementById("inputSenha2");
    const inputSenha3 = document.getElementById("inputSenha3");


    
        boxCinza.style.transform = "translateX(100%)";
        boxRosa.style.transform = "translateX(-100%)";
        boxCinza.style.borderRadius = "0 50px 50px 0";
        boxRosa.style.borderRadius = "50px 0 0 50px";
        inputNome1.value = '';
        inputEmail2.value = '';
        inputSenha2.value = '';
        inputSenha3.value = '';


    setTimeout(function() {    
        boxRosaContent1.style.display = "none";
        boxRosaContent2.style.display = "flex";
        boxCinzaContent1.style.display = "none";
        boxCinzaContent2.style.display = "block";
    }, 300); // Tempo em milissegundos (300ms = 0.3 segundos)
}

function mudarTela2() {
    const boxCinza = document.querySelector(".boxCinza");
    const boxRosa = document.querySelector(".boxRosa");
    const boxRosaContent1 = document.querySelector(".boxRosaContent1");
    const boxRosaContent2 = document.querySelector(".boxRosaContent2");
    const boxCinzaContent1 = document.querySelector(".boxCinzaContent1");
    const boxCinzaContent2 = document.querySelector(".boxCinzaContent2");
    const inputEmail1 = document.getElementById("inputEmail1");
    const inputSenha1 = document.getElementById("inputSenha1");

    
        boxCinza.style.transform = "translateX(-0%)";
        boxRosa.style.transform = "translateX(0%)";
        boxCinza.style.borderRadius = "50px 0 0 50px";
        boxRosa.style.borderRadius = "0 50px 50px 0";
        inputEmail1.value = '';
        inputSenha1.value = '';

    setTimeout(function() {    
        boxCinzaContent1.style.display = "block";
        boxCinzaContent2.style.display = "none";
        boxRosaContent1.style.display = "flex";
        boxRosaContent2.style.display = "none";
    }, 300); // Tempo em milissegundos (300ms = 0.3 segundos)
}
  



function telaHome(){
    window.location.href="./index.html"
}





// Validações do campo:
function cadastrar(){
    let nomeCompleto = inputNome1.value;
    let email = inputEmail2.value;
    let senha = inputSenha2.value;
    let senhaConfirmacao = inputSenha3.value;

    
    let nomeInput = document.getElementById('inputNome1');
    let emailInput = document.getElementById('inputEmail2');
    let senhaInput = document.getElementById('inputSenha2');
    let senhaConfirmacaoInput = document.getElementById('inputSenha3');

    if (nomeCompleto == ''|| email == '' || senha == '' || senhaConfirmacao == ''){
        nomeInput.style.border = 'solid 2px #FF0000';
        emailInput.style.border = 'solid 2px #FF0000';
        senhaInput.style.border = 'solid 2px #FF0000';
        senhaConfirmacaoInput.style.border = 'solid 2px #FF0000';
        let mensagemAlerta = 'Preencha todos os campos!';
        mostrarAlerta(mensagemAlerta)
    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1){
        emailInput.style.border = 'solid 2px #FF0000';
        let mensagemAlerta = ' Insira um email válido!'
        mostrarAlerta(mensagemAlerta)
    } else {

        let tamanhoSenha = senha.length;
        let listaCaracteres = [
            '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
            ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'
        ];

        if(tamanhoSenha < 6){
            senhaInput.style.border = 'solid 2px #FF0000';
            let mensagemAlerta = ' Sua senha deve ter no mínimo 6 caracteres'
            mostrarAlerta(mensagemAlerta)
        } else{
            let temMaiusculo = false;
            let temNumero = false;
            let temCaractereEspecial = false;

            for(let posicaoLetra = 0; posicaoLetra < tamanhoSenha; posicaoLetra++){
                let letra = senha[posicaoLetra];

                if (letra >= 'A' && letra <= 'Z') {
                    temMaiusculo = true;
                }

                if (letra >= '0' && letra <= '9') {
                    temNumero = true;
                }

                if (listaCaracteres.includes(letra)) {
                    temCaractereEspecial = true;
                }
            }
            if (!temMaiusculo) {
                senhaInput.style.border = 'solid 2px #FF0000';
                let mensagemAlerta = ' Sua senha deve ter pelo menos uma letra maiúscula';
                mostrarAlerta(mensagemAlerta);
            } else if (!temNumero) {
                senhaInput.style.border = 'solid 2px #FF0000';
                let mensagemAlerta = ' Sua senha deve ter pelo menos um número';
                mostrarAlerta(mensagemAlerta);
            } else if (!temCaractereEspecial) {
                senhaInput.style.border = 'solid 2px #FF0000';
                let mensagemAlerta = ' Sua senha deve ter pelo menos um caractere especial';
                mostrarAlerta(mensagemAlerta);
            } else if (senha !== senhaConfirmacao) {
                senhaInput.style.border = 'solid 2px #FF0000';
                senhaConfirmacaoInput.style.border = 'solid 2px #FF0000';
                let mensagemAlerta = 'Confirmação de senha inválida!';
                mostrarAlerta(mensagemAlerta);
            } else {
                    fetch("/usuario/cadastrar", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                        // crie um atributo que recebe o valor recuperado aqui
                        // Agora vá para o arquivo routes/usuario.js
                        nomeServer: nomeCompleto,
                        emailServer: email,
                        senhaServer: senha
                        }),
                    })
                    .then(function (resposta) {
                        console.log('Resposta:', resposta);

                        if (resposta.ok){
                            setTimeout(() => mostrarCadastroEfetuado(), 2000);
                        }
                    })
            }
        }

    }
}

function acessar() {
    let email = inputEmail1.value;
    let senha = inputSenha1.value;

    let emailInput = document.getElementById('inputEmail1');
    let senhaInput = document.getElementById('inputSenha1');

    if (email == '' || senha == '') {
        emailInput.style.border = 'solid 2px #FF0000';
        senhaInput.style.border = 'solid 2px #FF0000';
        let mensagemAlerta = 'Preencha todos os campos!';
        mostrarAlerta(mensagemAlerta);
    } else {
        fetch("/usuario/autenticar", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else if (resposta.status === 403) {
                console.log("Email e/ou senha inválido(s)");
            } else {
                console.log("Houve um erro ao tentar realizar o login!");
            }
        })
        .then(function (json) {
            if (json) {
                // Armazenar os dados do usuário no sessionStorage
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;
                sessionStorage.DATA_CRIACAO = json.dataCriacao;
                sessionStorage.JOGOS_FEITOS = json.jogosFeitos;
                sessionStorage.PUBLICACOES = json.publicacoes;
                sessionStorage.SEGUIDORES = json.seguidores;
                sessionStorage.PONTUACAO_TOTAL = json.pontuacaoTotal;
    
                // Redirecionar para a plataforma
                window.location.href = '../plataforma.html';
            }
        })
        .catch(function (erro) {
            console.log(erro.message);
            mostrarAlerta(erro.message);
        });
    }
}



function mostrarAlerta(mensagemAlerta){
    let boxAlerta = document.querySelector('.caixaAlertaPosition');
    let boxMensagem = document.querySelector('.boxMensagem')
    boxAlerta.style.transform = 'translateY(0%)';
    boxMensagem.innerHTML = `<p>${mensagemAlerta}</p>`
    
}

function fecharAviso(){
    let boxAlerta = document.querySelector('.caixaAlertaPosition');
    boxAlerta.style.transform = 'translateY(-100%)';
    let nomeInput1 = document.getElementById('inputNome1')
    let emailInput1 = document.getElementById('inputEmail1');
    let senhaInput1 = document.getElementById('inputSenha1');
    let emailInput2 = document.getElementById('inputEmail2');
    let senhaInput2 = document.getElementById('inputSenha2');
    let senhaConfirmacaoInput = document.getElementById('inputSenha3');
    nomeInput1.style.border = 'solid 2px #9e9e9e';
    emailInput1.style.border = 'solid 2px #9e9e9e';
    senhaInput1.style.border = 'solid 2px #9e9e9e';
    emailInput2.style.border = 'solid 2px #9e9e9e';
    senhaInput2.style.border = 'solid 2px #9e9e9e';
    senhaConfirmacaoInput.style.border = 'solid 2px #9e9e9e';
    nomeInput1.disabled = false;
    emailInput1.disabled = false;
    senhaInput1.disabled = false;
    senhaConfirmacaoInput.disabled = false;
}

function mostrarCadastroEfetuado(){
    let caixaCadastroPosition = document.querySelector('.caixaCadastroPosition')
    let caixaDesfoque = document.querySelector('.boxDesfoque')
    caixaCadastroPosition.style.display = 'block';
    caixaDesfoque.style.display = 'block';
    caixaCadastroPosition.style.opacity = '100%';
    caixaDesfoque.style.opacity = '100%';
}

function fecharEfetuado(){
    
    let caixaCadastroPosition = document.querySelector('.caixaCadastroPosition')
    let caixaDesfoque = document.querySelector('.boxDesfoque')
    caixaCadastroPosition.style.display = 'none';
    caixaDesfoque.style.display = 'none';
    caixaCadastroPosition.style.opacity = '0%';
    caixaDesfoque.style.opacity = '0%';
    mudarTela2()
}
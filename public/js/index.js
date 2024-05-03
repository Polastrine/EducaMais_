

var aberto=false;

function abrir() { 
	anime({
		targets: '.symbol',
		duration: 100,
		easing: 'linear',
		rotate: '180deg'
	});

	anime({
		targets: '.top',
		duration: 100,
		easing: 'linear',
		opacity: 0
	})
	anime({
		targets: '.bottom',
		easing: 'linear',
		duration: 100,
		opacity: 0
	})

	anime({
		targets: '.mid',
		easing: 'linear',
		duration: 100,
		opacity: 0
	});
	aberto=true;
};
function fechar() { 
  anime({
        targets: '.menu',
        easing: 'linear',
        translateX: ['-100%', '0'], // Movendo o menu para fora da tela à esquerda
        duration: 100
    });
	anime({
		targets: '.symbol',
		duration: 100,
		easing: 'linear',
		rotate: '0deg'
	});
	anime({
		targets: '.top',
		duration: 100,
		easing: 'linear',
		opacity: 1
	})
	anime({
		targets: '.bottom',
		easing: 'linear',
		duration: 100,
		opacity: 1
	})

	anime({
		targets: '.mid',
		easing: 'linear',
		height: '3px',
    opacity: '100%',
		duration: 100
	});
    document.querySelector('.symbol').innerHTML = `<object onclick="menu()" class='hamburguer'>
    <object class="element top"></object>
    <object class="element mid"></object>
    <object class="element bottom"></object>
</object>`
	aberto=false;
    document.querySelector('.lista').style.display = 'none';
    document.querySelector('.lista').style.flexDirection = 'row';
    document.querySelector('.button').style.display = 'none';
};

function expandir(){
    anime({
        targets:'.menu',
        easing: 'linear',
        width: '1300px',
        height: '65px',
        borderRadius: '50px',
        translateX: ['0', '-90%'], // Expandir da direita para a esquerda
        duration:100
    });

    document.querySelector('.symbol').innerHTML = `<img onclick="menu()" id="botaoSair" style="width:20px; position:relative; bottom:22px;" src="./assets/botaoSairNav.png">`
    document.querySelector('.lista').style.display = 'flex';
    document.querySelector('.button').style.display = 'block';
  
}
function diminuir(){
	anime({
		targets:'.menu',
		easing: 'linear',
		height: '65px',
		width: '65px',
		borderRadius: '50px',
		duration:100
	});
}

function menu(){
	if(aberto){
		fechar();
		diminuir();
	} else {
		abrir();
		expandir();
	}
}



function telaLogin(){
    window.location.href="./login.html"
}

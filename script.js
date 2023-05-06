
let menuMobile = document.getElementById("menu-mobile");
let botao = document.getElementById("botao");
const form = document.querySelector('.contato-form');
let btnTema = document.getElementById('btn-tema');




function tamanhoTela() {
    if (window.innerWidth >= 800) {
        menuMobile.classList.remove('active');
    }

    if(window.innerWidth >= 800){
        botao.classList.replace('fa-xmark', 'fa-bars');
    }
}

function clicou() {

    if (menuMobile.classList.contains('active'))
        menuMobile.classList.remove('active');
        
    else
        menuMobile.classList.add('active');

        if(menuMobile.classList.contains('active'))
            botao.classList.replace('fa-bars', 'fa-xmark');

        else
            botao.classList.replace('fa-xmark', 'fa-bars');
}

function clicouLink(){
    
    if (menuMobile.classList.contains('active'))
        menuMobile.classList.remove('active');
    
    else
        menuMobile.classList.add('active');   

        if(menuMobile.classList.contains('active'))
            botao.classList.replace('fa-bars', 'fa-xmark');

        else
            botao.classList.replace('fa-xmark', 'fa-bars');
}


form.addEventListener('submit', function enviouMensagem(evento) {
    evento.preventDefault();

    alert('Mensagem enviada com sucesso!');
    document.getElementById('nome').value='';
    document.getElementById('assunto').value='';
    document.getElementById('email').value='';
    document.getElementById('mensagem').value='';
});

function imagem(){
    if(document.body.classList.contains('tema-escuro')){
        document.body.classList.remove('tema-escuro'); 
        
    }
}

btnTema.addEventListener('click', () => {
    
    if(localStorage.theme == 'dark') {
        document.body.classList.remove('tema-escuro');
        localStorage.theme = 'light';
        btnTema.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.body.classList.add('tema-escuro');
        localStorage.theme = 'dark';
        btnTema.classList.replace('fa-moon', 'fa-sun');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.theme == 'dark') {
        document.body.classList.add('tema-escuro');
    }
});



let menuMobile = document.getElementById("menu-mobile");
let botao = document.getElementById("botao");
const form = document.querySelector('.contato-form');
let btnTema = document.querySelector('.btn-tema');
let temaMobile = document.querySelector('.tema-mobile');




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

const tema = () => {

    if(localStorage.theme == 'dark') {
        document.body.classList.remove('tema-escuro');
        localStorage.theme = 'light';
        btnTema.classList.replace('fa-sun', 'fa-moon');
        temaMobile.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.body.classList.add('tema-escuro');
        localStorage.theme = 'dark';
        btnTema.classList.replace('fa-moon', 'fa-sun');
        temaMobile.classList.replace('fa-moon', 'fa-sun');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.theme == 'dark') {
        document.body.classList.add('tema-escuro');
        btnTema.classList.replace('fa-moon', 'fa-sun');
        temaMobile.classList.replace('fa-moon', 'fa-sun');
    } 
});

btnTema.addEventListener('click', () => { tema(); });
temaMobile.addEventListener('click', () => { tema(); });

const carouselOptions = {
    index: 0,
    width: 0,
    elmN: 0
}
const initCarousel = () => {
    const carousel = document.getElementById('carousel');
    const carouselWidth = carousel.offsetWidth;
    carouselOptions.width = carouselWidth;
    const carouselItens = document.getElementsByClassName('carousel-item');
    carouselOptions.elmN = carouselItens.length;
    for(let index in carouselItens){
        const carouselItem = carouselItens[index];
        if(!carouselItem.style) continue;
        carouselItem.style.left = (index * carouselWidth) + 'px';
    }
}
const carouselMove = (direction) => {
    const carousel = document.getElementById('carousel');
    const carouselItens = document.getElementsByClassName('carousel-item');
    let move = carouselOptions.width * direction;
    carouselOptions.index += direction;
    if(carouselOptions.index >= carouselOptions.elmN){
        carouselOptions.index = 0;
        return initCarousel();
    }else if (carouselOptions.index < 0){
        carouselOptions.index = carouselOptions.elmN-1;
        move *= carouselOptions.index * -1;
    }
    for(let index in carouselItens){
        const carouselItem = carouselItens[index];
        if(!carouselItem.style) continue;
        const currentLeft = Number(carouselItem.style.left.replace('px', ''));
        carouselItem.style.left = (currentLeft - move) + 'px';
    }
}
window.onload = () => {
    initCarousel();
    document.getElementById('previous').onclick = () => {carouselMove(-1)};
    document.getElementById('next').onclick = () => {carouselMove(1)};
}




let menuMobile = document.getElementById("menu-mobile");
let botao = document.getElementById("botao")


function tamanhoTela() {
    if (window.innerWidth >= 800) {
        menuMobile.classList.remove('active');
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


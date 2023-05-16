const mode = document.getElementById('mode_icon');
  const formLogin = document.getElementById('login_form');
mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');

});

formLogin.addEventListener('submit', (evento)=> {
evento.preventDefault();

alert('Login efetuado com sucesso');

window.location.href = "../index.html";
});
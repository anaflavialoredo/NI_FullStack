// Seleciona o ícone do menu e o menu de navegação
const menu = document.querySelector(".menu");
const navmenu = document.querySelector(".nav-menu");

// Adiciona um evento de clique ao ícone do menu
menu.addEventListener('click', () => {
    // Alterna a classe "ativo" no ícone do menu 
    menu.classList.toggle('ativo');
    
    // Alterna a classe "ativo" no menu de navegação 
    navmenu.classList.toggle('ativo');
})

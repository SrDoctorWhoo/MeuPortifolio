// Navegação móvel
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});


// Seletor do botão de alternar idioma
const toggleLanguageButton = document.getElementById('toggle-language');

// Evento de clique no botão de alternar idioma
toggleLanguageButton.addEventListener('click', function() {
    // Se o texto do botão for "English", muda para "Português" e vice-versa
    if (toggleLanguageButton.textContent === 'English') {
        toggleLanguageButton.textContent = 'Português';
        // Função para traduzir o conteúdo para português
        translateToPortuguese();
    } else {
        toggleLanguageButton.textContent = 'English';
        // Função para traduzir o conteúdo para inglês
        translateToEnglish();
    }
});

// Função para traduzir o conteúdo para português
function translateToPortuguese() {
    // Aqui você deve selecionar todos os elementos que deseja traduzir e modificar o texto deles para português
    document.getElementById('header-text').textContent = 'Bem-vindo ao meu site!';
    document.getElementById('about-text').textContent = 'Sobre Mim';
    // Adicione mais elementos conforme necessário
}

// Função para traduzir o conteúdo para inglês
function translateToEnglish() {
    // Aqui você deve selecionar todos os elementos que deseja traduzir e modificar o texto deles para inglês
    document.getElementById('header-text').textContent = 'Welcome to my website!';
    document.getElementById('about-text').textContent = 'About Me';
    // Adicione mais elementos conforme necessário
}

// Função para inicializar a tradução de acordo com o idioma atual da página
function initializeTranslation() {
    // Se o idioma padrão for inglês, inicia a tradução para inglês
    if (toggleLanguageButton.textContent === 'English') {
        translateToEnglish();
    } else {
        translateToPortuguese();
    }
}

// Chama a função de inicialização da tradução ao carregar a página
initializeTranslation();


// Adicione JavaScript para adicionar uma classe ao botão quando ele for clicado
document.getElementById("download-btn").addEventListener("click", function() {
    this.classList.add("download-clicked");
    // Define um tempo limite para remover a classe 'download-clicked' após 500ms (meio segundo)
    setTimeout(() => {
        this.classList.remove("download-clicked");
    }, 500);
});



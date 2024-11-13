// Quando o botão for clicado, esconde a tela inicial e mostra o perfil
document.getElementById('revealButton')?.addEventListener('click', function() {
    // Esconde a tela inicial e mostra a tela do perfil
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('profile-screen').style.display = 'flex';
});

// Quando a página carregar, inicia a música automaticamente
window.onload = function() {
    const music = document.getElementById('background-music');
    if (music) {
        music.play(); // Garante que a música comece automaticamente
    }
};

// Ao passar o mouse sobre o quadrado do perfil, ele dá um efeito de profundidade
document.getElementById('profile')?.addEventListener('mouseenter', function() {
    // Suaviza a transição do movimento do quadrado
    this.style.transition = 'transform 0.3s ease';
});

// Quando o mouse entra no quadrado, ele se deita e o modo escuro é ativado
document.getElementById('profile')?.addEventListener('mousemove', function(e) {
    const profile = document.getElementById('profile');
    
    // Cálculo de profundidade (inclinação do quadrado conforme o mouse move)
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Deslocamento do quadrado
    const offsetX = (mouseX - window.innerWidth / 2) / 10;
    const offsetY = (mouseY - window.innerHeight / 2) / 10;

    // Aplicando o efeito de profundidade no quadrado
    if (profile) {
        profile.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
    }
});

// Quando o mouse sair do quadrado, ele retorna para a posição inicial
document.getElementById('profile')?.addEventListener('mouseleave', function() {
    const profile = document.getElementById('profile');
    if (profile) {
        profile.style.transform = 'rotateX(0deg) rotateY(0deg)'; // Retorna ao normal
    }
});

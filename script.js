document.getElementById('revealButton')?.addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('profile-screen').style.display = 'flex';
});

window.onload = function() {
    const music = document.getElementById('background-music');
    if (music) {
        music.play(); 
    }
};

document.getElementById('profile')?.addEventListener('mouseenter', function() {
    this.style.transition = 'transform 0.3s ease';
});

document.getElementById('profile')?.addEventListener('mousemove', function(e) {
    const profile = document.getElementById('profile');
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = (mouseX - window.innerWidth / 2) / 10;
    const offsetY = (mouseY - window.innerHeight / 2) / 10;

    if (profile) {
        profile.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
    }
});

document.getElementById('profile')?.addEventListener('mouseleave', function() {
    const profile = document.getElementById('profile');
    if (profile) {
        profile.style.transform = 'rotateX(0deg) rotateY(0deg)'; 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('/')
        .then(response => response.text())
        .then(data => {
            console.log("Página acessada e notificação enviada!");
        })
        .catch(error => {
            console.error('Erro ao enviar requisição para o servidor:', error);
        });
});



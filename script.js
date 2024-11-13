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
// Função para enviar a notificação para o webhook do Discord
function sendToDiscord(message) {
    const webhookUrl = 'COLE_AQUI_O_SEU_WEBHOOK';

    const payload = {
        content: message,
        username: 'Notificador do Site'
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}


function sendToDiscord(message) {
    const webhookUrl = 'https://discord.com/api/webhooks/1306224276323438612/RFZXjiZqUcr_Aoo3NAzZNWVEtbYShSyNOBTbEycjAH5hT4Vb_TqGWaFsr6ZHtj0qPnU-';

    const payload = {
        content: message,
        username: 'vt'
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const message = `Novo acesso ao site: ${window.location.href} em ${new Date().toLocaleString()}`;
    sendToDiscord(message);
});


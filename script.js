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
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const webhookUrl = 'https://discord.com/api/webhooks/1306224276323438612/RFZXjiZqUcr_Aoo3NAzZNWVEtbYShSyNOBTbEycjAH5hT4Vb_TqGWaFsr6ZHtj0qPnU-';

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const message = `Novo acesso ao site! IP do usuário: ${ip}, Página: ${req.originalUrl}, Data: ${new Date().toLocaleString()}`;

    sendToDiscord(message);

    res.send('Bem-vindo ao site!');
});

function sendToDiscord(message) {
    const payload = {
        content: message,
        username: 'Notificador do Site'
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(response => response.json())
      .then(data => console.log('Mensagem enviada para o Discord', data))
      .catch(error => console.error('Erro ao enviar a mensagem para o Discord', error));
}

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


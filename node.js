const express = require('express');
const fetch = require('node-fetch');  // Para enviar o Webhook para o Discord

const app = express();
const PORT = process.env.PORT || 3000;

const webhookUrl = 'https://discord.com/api/webhooks/1306224276323438612/RFZXjiZqUcr_Aoo3NAzZNWVEtbYShSyNOBTbEycjAH5hT4Vb_TqGWaFsr6ZHtj0qPnU-';

app.get('/', (req, res) => {
    // Captura o IP do usuário
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Cria a mensagem para enviar ao Discord
    const message = `Novo acesso ao site! IP do usuário: ${ip}, Página: ${req.originalUrl}, Data: ${new Date().toLocaleString()}`;

    // Envia a mensagem para o Discord
    sendToDiscord(message);

    // Responde ao usuário com a página
    res.send('Bem-vindo ao site!');
});

// Função para enviar a mensagem ao Discord
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

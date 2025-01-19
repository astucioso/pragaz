
function updateProfileImage(userId) {
  fetch('https://api.lanyard.rest/v1/users/' + userId)
    .then(response => response.json())
    .then(data => {
      const user = data.data.discord_user;
      const profileImage = document.querySelector('.profile-img[data-user-id="' + userId + '"]');
      const usernameElement = document.querySelector('.nickr[data-user-id="' + userId + '"]');
      const subnickElement = document.querySelector('.subnick[data-user-id="' + userId + '"]');
      const badgesContainer = document.getElementById('badges-' + userId); 
      
      profileImage.src = user.avatar
        ? 'https://cdn.discordapp.com/avatars/' + user.id + '/' + user.avatar + '.' + (user.avatar.startsWith('a_') ? 'gif' : 'png') + '?size=512'
        : 'https://cdn.discordapp.com/embed/avatars/1.png';
  
      usernameElement.textContent = user.display_name ? user.display_name : user.username;
      subnickElement.textContent = user.username;
  
      badgesContainer.innerHTML = ''; 
      if (user.public_flags && user.public_flags.badges) {
        for (let badge of user.public_flags.badges) {
          let badgeElement = document.createElement('div');
          badgeElement.className = 'badge';
          badgeElement.style.backgroundImage = badge.id === 'premium' 
            ? "url('https://raw.githubusercontent.com/Rep7/badges/main/svg/discordnitro.svg')" 
            : "url('https://raw.githubusercontent.com/mezotv/discord-badges/" + badge.id + ".svg')";
          badgeElement.dataset.tooltip = badge.description;
          badgesContainer.appendChild(badgeElement);
        }
      }
    })
    .catch(error => {
      console.error('Error fetching profile data:', error);
    });
}

updateProfileImage('1317810475458891819');  // Vokal estora xota

document.getElementById('revealButton').addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    audio.play();

    document.querySelector('.start-screen').style.display = 'none';

    document.getElementById('profiles-container').style.display = 'flex';

    document.getElementById('banner-text').style.display = 'block';

});




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



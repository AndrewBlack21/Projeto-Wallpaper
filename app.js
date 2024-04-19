'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        switcher.textContent = "White";
        switcher.style.color = ''; // Limpa a cor definida anteriormente
    } else {
        switcher.textContent = "Dark";
        switcher.style.color = 'white'; // Aplica a cor branca ao texto do botão
    }
});



    function buscar() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const imagens = document.getElementsByTagName('img');

        for (let i = 0; i < imagens.length; i++) {
            const nome = imagens[i].getAttribute('name').toLowerCase();
            const div = imagens[i].parentNode;

            if (nome.includes(input)) {
                div.style.display = 'block'; // Mostra a imagem
            } else {
                div.style.display = 'none'; // Esconde a imagem
            }
        }
    }

    $("#divID").load("anime.html");




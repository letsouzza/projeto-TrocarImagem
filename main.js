"use strict" /*ajudar a manter a boa prática e não ter erros */

const botaoTrocarImagem = document.getElementById('trocar-img')
const imagem = document.getElementById('figura')
// getElementById significa escolher um elemento pelo id (#) dele

function trocaImg () {
    figura.src = './img/fatima.webp';
}

botaoTrocarImagem.addEventListener('click', trocaImg)
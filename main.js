"use strict" /*ajudar a manter a boa prática e não ter erros */

// getElementById significa escolher um elemento pelo id (#) dele
const botaoTrocarImagem = document.getElementById('trocar-img')

const fotos = {
    foto1: "var(--imagem1)",
    foto2: "var(--imagem2)",
    foto3: "var(--imagem3)",
    foto4: "var(--imagem4)",
    foto5: "var(--imagem5)"
};

function trocaImg () {
    imagem.src = fotos.foto1;
    document.documentElement.style.setProperty('--img-fundo', img)
}

botaoTrocarImagem.addEventListener('click', trocaImg)
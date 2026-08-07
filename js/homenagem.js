/* ========================================
   CONTADOR DE DIAS JUNTOS
======================================== */

// DATA EM QUE VOCÊS COMEÇARAM A NAMORAR
// Altere caso a data seja diferente.
const dataNamoro = new Date("2026-08-15T00:00:00-03:00");


function atualizarDiasJuntos() {

    const hoje = new Date();

    const diferenca = hoje.getTime() - dataNamoro.getTime();

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const contador =
        document.getElementById("contadorRelacionamento");

    if (contador) {

        contador.innerHTML = `
            <span>${dias}</span>
            <p>dias ao seu lado ❤️</p>
        `;

    }
}

atualizarDiasJuntos();


// ========================================
// ANIMAÇÃO DOS CARDS AO ROLAR
// ========================================

const cards = document.querySelectorAll(".card");


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach((card) => {

    observador.observe(card);

});


// ========================================
// GALERIA DE FOTOS
// ========================================

const imagens =
    document.querySelectorAll(".galeria img");


imagens.forEach((imagem) => {

    imagem.addEventListener("click", () => {

        imagem.classList.toggle("ampliada");

    });

});


// ========================================
// EFEITO DE DIGITAÇÃO DA CARTA
// ========================================

const carta =
    document.getElementById("carta");


const textoCarta = `

Meu amor,

Hoje estamos comemorando nosso primeiro ano juntos.

Um ano de histórias, momentos, risadas,
abraços, conversas e memórias que eu quero
guardar para sempre.

Obrigado por fazer parte da minha vida
e por transformar tantos momentos simples
em lembranças especiais.

Que esse seja apenas o primeiro de muitos
anos que ainda vamos viver juntos.

Eu te amo. ❤️

`;


function escreverCarta() {

    if (!carta) return;

    carta.innerHTML = "";

    let indice = 0;


    function escrever() {

        if (indice < textoCarta.length) {

            carta.innerHTML +=
                textoCarta.charAt(indice);

            indice++;

            setTimeout(escrever, 25);

        }

    }


    escrever();

}


window.addEventListener(
    "load",
    escreverCarta
);


// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const botaoTopo =
    document.createElement("button");


botaoTopo.innerHTML = "↑";

botaoTopo.classList.add("topo");

botaoTopo.setAttribute(
    "aria-label",
    "Voltar ao topo"
);


document.body.appendChild(botaoTopo);


// Mostrar botão depois de rolar

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botaoTopo.classList.add("ativo");

    } else {

        botaoTopo.classList.remove("ativo");

    }

});


// Voltar para o topo

botaoTopo.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ========================================
// CORAÇÕES FLUTUANTES
// ========================================

function criarCoracao() {

    const coracao =
        document.createElement("div");


    coracao.classList.add("coracao");

    coracao.innerHTML = "❤";


    // Posição aleatória

    coracao.style.left =
        Math.random() * 100 + "vw";


    // Tamanho aleatório

    coracao.style.fontSize =
        Math.random() * 18 + 12 + "px";


    // Velocidade aleatória

    coracao.style.animationDuration =
        Math.random() * 4 + 4 + "s";


    document.body.appendChild(coracao);


    // Remover depois da animação

    setTimeout(() => {

        coracao.remove();

    }, 8000);

}


// Criar corações

setInterval(
    criarCoracao,
    900
);

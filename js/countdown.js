// ========================================
// DATA DO NOSSO PRIMEIRO ANO
// ========================================

const dataAlvo = new Date("2026-08-15T00:00:00-03:00").getTime();


// ========================================
// ATUALIZA A CONTAGEM
// ========================================

function atualizarContagem() {

    const agora = new Date().getTime();

    const distancia = dataAlvo - agora;


    // ====================================
    // QUANDO CHEGAR O DIA 15
    // ====================================

    if (distancia <= 0) {

        window.location.href = "homenagem.html";

        return;
    }


    // ====================================
    // CALCULAR TEMPO
    // ====================================

    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );


    // ====================================
    // MOSTRAR NA TELA
    // ====================================

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


// ========================================
// INICIAR
// ========================================

atualizarContagem();


// Atualizar a cada segundo

setInterval(atualizarContagem, 1000);

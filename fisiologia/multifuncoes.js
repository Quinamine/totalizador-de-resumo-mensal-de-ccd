"use strict"

var keyPrefix = "trmccd";

function desfoqueDoFundo(accao) {
    const desfoque = document.querySelector(".desfoque");
    accao === "desfocar" ? 
    desfoque.classList.add("on") :
    desfoque.classList.remove("on");
}

function alertarSobre(msg) {
    const dialogBoxDefault = document.querySelector(".dialog-box-default--small");
    const dialogBoxDefault__console = dialogBoxDefault.querySelector(".dialog-box-default__p--js-console");

    dialogBoxDefault__console.textContent = msg;

    clearInterval(btnAutoCloseLoop);
    let time = 15;
    const btn__outputTime = document.querySelector(".dialog-box-default__output-autoclose-loop");
    btn__outputTime.textContent = `(${time--}s)`;
    btnAutoCloseLoop = setInterval(() => {
        btn__outputTime.textContent = `(${time--}s)`;
        if(time < 0) {
            dialogBoxDefault.classList.remove("--open");
            clearInterval(btnAutoCloseLoop);
        }

    }, 1000);
    dialogBoxDefault.classList.add("--open");
}

function destacarCelulasComConteudoOmisso() {
    const celulas = document.querySelectorAll("[data-totaleixox], [readonly]");

    let celulasSaturadas = 0;
    for(const c of celulas) {
        c.classList.remove("--font-small");
        c.classList.remove("celula-saturada");
        
        if(c.value.length === 7) {
            c.classList.add("--font-small");
        } else if(c.value.length > 7) {
            c.classList.add("celula-saturada");
            celulasSaturadas++;
        }
    }
    
    if(celulasSaturadas > 0) {
        setTimeout(() => {
            const motivoDeSaturacao =  document.querySelector(".artigo__details-motivo-de-red-cells");

            menu.abrirArtigo("ajuda");
            motivoDeSaturacao.setAttribute("open", "");
            motivoDeSaturacao.scrollIntoView();
        }, 2500);
    }  
}

function removerDestaqueDeRedCells() {
    const celulas = document.querySelectorAll("[data-totaleixox], [readonly]");

    for (const c of celulas) c.classList.remove("celula-saturada");
}

const aqd = {
    mostrarAviso() {
        if(!sessionStorage.getItem(`${keyPrefix}-aviso-aqd`)) {
            const avisoDeAQD = document.querySelector(".dialog-box-default--sobre-aqd");
            setTimeout(() => avisoDeAQD.classList.add("--open"), 3000);
        }
    },

    salvarCiencia() {
        sessionStorage.setItem(`${keyPrefix}-aviso-aqd`, `user:aware`);
    }
}

function actualizarAnoDeCopyright() {
    const tempo = new Date();
    let anoActual = tempo.getFullYear();

    if(anoActual < 2023) anoActual = 2023;

    const currentYearOutput = document.querySelector(".footer__current-year");
    currentYearOutput.textContent = anoActual;
}

function formatarNumeros() {
    const numeros = document.querySelectorAll(".number-format");

    for (const n of numeros) {
        n.textContent = Number(n.textContent).toLocaleString();
    }
}

function animarJanelaAberta(event) {
    const janela = document.querySelector(".dialog-box-esvaziar-ficha");
    if(janela.matches(".--open")) {
        event === "mousedown" ? 
        janela.classList.add("--mexer") : 
        janela.classList.remove("--mexer");
    }
}

function clonarFichaHeaders() {
    const fichaHeader = document.querySelector(".ficha__header");
    const headerInfoDados = document.querySelector(".header-info-dados");
    const fichaVerso = document.querySelector(".ficha-verso");

    const newFichaHeader = fichaHeader.cloneNode(true);
    newFichaHeader.classList.add("ficha__header--2");
    const newHeaderInfoDados = headerInfoDados.cloneNode(true);

    fichaVerso.insertAdjacentElement("beforebegin", newFichaHeader),
    fichaVerso.insertAdjacentElement("afterbegin", newHeaderInfoDados);
    resetarIdsDeInputsClonados();
}

function resetarIdsDeInputsClonados() {
    const inputsClonados = document.querySelectorAll(".ficha__header--2 input");

    for (const input of inputsClonados) {
        input.id = ""
    }
}

let btnAutoCloseLoop;
window.addEventListener("load", () => {
    const readonlyInputs = document.querySelectorAll("[readonly]");
    readonlyInputs.forEach ( inputTarget => inputTarget.addEventListener("click", () => {
        const readonlyInputsMsg = "Os totais estão inacessíveis para assegurar que não sejam modificados.";
        alertarSobre(readonlyInputsMsg);
    }));

    const inputsCelulares = document.querySelectorAll("[data-totaleixox]");
    inputsCelulares.forEach (inputCelular => inputCelular.addEventListener("input", destacarCelulasComConteudoOmisso));
    destacarCelulasComConteudoOmisso();

    
    aqd.mostrarAviso();
    const dialogBoxAQD__btn = document.querySelector(".dialog-box-default__btn--aqd");
    dialogBoxAQD__btn.addEventListener("click", aqd.salvarCiencia);

    // Actualizar o ano 
    actualizarAnoDeCopyright()
    formatarNumeros();

    // Animar Janela Aberta
    const desfoque = document.querySelector(".desfoque");
    desfoque.addEventListener("mousedown", event => animarJanelaAberta(event.type));
    desfoque.addEventListener("mouseup", event => animarJanelaAberta(event.type));

    // Clonar Elemento (Header do body)
    clonarFichaHeaders();
});




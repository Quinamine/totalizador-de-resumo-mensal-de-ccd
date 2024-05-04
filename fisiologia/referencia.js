"use strict"

const referencia = {
    retornarIndicador(inputTarget) {
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        const indicadores = document.querySelectorAll(".ficha__indicador");
        const indicadorOutput = document.querySelector(".reference-row__output--indicador");


        let inputIndex;
        for (let i in inputTargetAndSiblings) {
            if(inputTarget === inputTargetAndSiblings[i]) inputIndex = i;
        }
        
        let eInputDoVerso = inputTarget.parentElement.matches(".ficha__col-de-inputs--verso");
        if(inputIndex > 16 && !eInputDoVerso) inputIndex = Number(inputIndex) + 9;
        if(eInputDoVerso) { 
            inputIndex = Number(inputIndex) + 48;
        }
        let indicador = indicadores[inputIndex].textContent;
        indicadorOutput.value = indicador;
        if(indicadores[inputIndex].dataset.prefixo) {
            let prefixo = indicadores[inputIndex].dataset.prefixo;
            indicadorOutput.value = `${prefixo} ${indicador}`;
        }
    },

    retornarColuna(inputTarget) {
        const faixaEtariaOutput = document.querySelector(".reference-row__output--coluna");

        let coluna = inputTarget.parentElement.dataset.col;
        faixaEtariaOutput.value = coluna;
    },

    retornarVazio() {
        const outputs = document.querySelectorAll(".reference-row__output");
        for (const o of outputs) o.value = "";
    }
}

function events() {
    const gridInputs = document.querySelectorAll("[data-totaleixox]");
    gridInputs.forEach( gi => {
        gi.addEventListener("focus", () => {
            referencia.retornarIndicador(gi);
            referencia.retornarColuna(gi);
        });
    });

    gridInputs.forEach( gi => gi.addEventListener("focusout", referencia.retornarVazio));
}

window.onload = events;
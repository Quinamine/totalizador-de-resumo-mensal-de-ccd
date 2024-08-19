"use strict"

const referencia = {
    retornarIndicador(inputTarget) {
        const inputTargetAndSiblings = inputTarget.parentElement.children;
        const indicadores = document.querySelectorAll(".ficha__indicador");
        const indicadorOutput = document.querySelector(".reference__output--indicador");


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
        const faixaEtariaOutput = document.querySelector(".reference__output--coluna");

        let coluna = inputTarget.parentElement.dataset.col;
        faixaEtariaOutput.value = coluna;
    },

    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}

function events() {
    const inputsCelulares = document.querySelectorAll("[data-totaleixox]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {
            referencia.retornarIndicador(inputCelular);
            referencia.retornarColuna(inputCelular);
        });
    });

    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}

window.onload = events;
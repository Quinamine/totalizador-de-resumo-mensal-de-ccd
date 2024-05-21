"use strict"

const backup = {
    saveGridInputs() {
        const inputsCelulares = document.querySelectorAll("[data-totaleixox]");

        for (let i = 0; i < inputsCelulares.length; i++) {
            
            inputsCelulares[i].addEventListener("input", () => {
                localStorage.setItem(`${keyPrefix}-input${i}`, inputsCelulares[i].value);
            });
            inputsCelulares[i].value = localStorage.getItem(`${keyPrefix}-input${i}`);
        }
        
    },
    
    saveExtraInputs() {
        const inputsNaoCelulares = document.querySelectorAll(".input-nao-celular");
        inputsNaoCelulares.forEach( extraInput => {
            extraInput.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-${extraInput.id}`, extraInput.value));
            extraInput.value = localStorage.getItem(`${keyPrefix}-${extraInput.id}`);
        });
    }
}

const totalizador = {
    filtrarEtotalizarCelulas(inputTarget) {
        let classNameDosOperandos = inputTarget.dataset.totaleixox;
        inputTarget.classList.add(`${classNameDosOperandos}`);

        let operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
        let celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaleixoxoutput}`);
        celulaDeSaida.value = this.somar(operandos);     

        if(inputTarget.dataset.totaleixoy) {
            classNameDosOperandos = inputTarget.dataset.totaleixoy;
            inputTarget.classList.add(`${classNameDosOperandos}`);

            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaleixoyoutput}`);
            celulaDeSaida.value = this.somar(operandos);  
        }
    
        if(inputTarget.dataset.totaldeconsultas) {
            classNameDosOperandos = inputTarget.dataset.totaldeconsultas;
            inputTarget.classList.add(`${classNameDosOperandos}`);

            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaldeconsultasoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }
    
        if(inputTarget.dataset.totaldeconsultas0a14anos) {
            classNameDosOperandos = inputTarget.dataset.totaldeconsultas0a14anos;
            inputTarget.classList.add(`${classNameDosOperandos}`);

            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaldeconsultas0a14anosoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }

        if(inputTarget.dataset.totalgeraldeconsultas0a14anos) {
            classNameDosOperandos = inputTarget.dataset.totalgeraldeconsultas0a14anos;
            inputTarget.classList.add(`${classNameDosOperandos}`);

            operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
            celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totalgeraldeconsultas0a14anosoutput}`);
            celulaDeSaida.value = this.somar(operandos);
        }
    },
    
    somar(celulasPorTotalizar) {
        let soma = 0;
        for(const c of celulasPorTotalizar) {
            soma += Number(c.value);
        }
        return soma;
    },
}

function escutarEventos() {
    const inputsCelulares = document.querySelectorAll("[data-totaleixox]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("input", () => totalizador.filtrarEtotalizarCelulas(inputCelular));
        inputCelular.value !== "" && totalizador.filtrarEtotalizarCelulas(inputCelular);
    });
}

window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});





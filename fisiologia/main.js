"use strict"

const backup = {
    saveGridInputs() {
        const gridInputs = document.querySelectorAll("[data-totaleixox]");

        for (let i = 0; i < gridInputs.length; i++) {
            
            gridInputs[i].addEventListener("input", () => {
                localStorage.setItem(`${keyPrefix}-input${i}`, gridInputs[i].value);
            });
            gridInputs[i].value = localStorage.getItem(`${keyPrefix}-input${i}`);
        }
        
    },
    
    saveExtraInputs() {
        const extraInputs = document.querySelectorAll(".input-nao-celular");
        extraInputs.forEach( extraInput => {
            extraInput.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-${extraInput.id}`, extraInput.value));
            extraInput.value = localStorage.getItem(`${keyPrefix}-${extraInput.id}`);
        });
    }
}

const totalizador = {
    filtrarEtotalizarCelulas(inputTarget) {
        inputTarget.classList.add(`${inputTarget.dataset.totaleixox}`);

        // Subtotal eixo x
        const totatEixox = document.querySelectorAll(`.${inputTarget.dataset.totaleixox}`);
        const totatEixoxOutput = document.querySelector(`.${inputTarget.dataset.totaleixoxoutput}`);
        totatEixoxOutput.value = this.somar(totatEixox);     

        if(inputTarget.dataset.totaleixoy) {
            inputTarget.classList.add(`${inputTarget.dataset.totaleixoy}`);
            const totalEixoy = document.querySelectorAll(`.${inputTarget.dataset.totaleixoy}`);
            const totalEixoyOutput = document.querySelector(`.${inputTarget.dataset.totaleixoyoutput}`);
            totalEixoyOutput.value = this.somar(totalEixoy);
        }
    
        if(inputTarget.dataset.totaldeconsultas) {
            inputTarget.classList.add(`${inputTarget.dataset.totaldeconsultas}`);
            const totalDeConsultas = document.querySelectorAll(`.${inputTarget.dataset.totaldeconsultas}`);
            const totalDeConsultasOutput = document.querySelector(`.${inputTarget.dataset.totaldeconsultasoutput}`);
            totalDeConsultasOutput.value = this.somar(totalDeConsultas);
        }
    
        if(inputTarget.dataset.totaldeconsultas0a14anos) {
            inputTarget.classList.add(`${inputTarget.dataset.totaldeconsultas0a14anos}`);
            const totalDeConsultas0a14anos = document.querySelectorAll(`.${inputTarget.dataset.totaldeconsultas0a14anos}`);
            const totalDeConsultas0a14anosOutput = document.querySelector(`.${inputTarget.dataset.totaldeconsultas0a14anosoutput}`);
            totalDeConsultas0a14anosOutput.value = this.somar(totalDeConsultas0a14anos);
        }

        if(inputTarget.dataset.totalgeraldeconsultas0a14anos) {
            inputTarget.classList.add(`${inputTarget.dataset.totalgeraldeconsultas0a14anos}`);
            const totalGeralDeConsultas0a14anos = document.querySelectorAll(`.${inputTarget.dataset.totalgeraldeconsultas0a14anos}`);
            const totalGeralDeConsultas0a14anosOutput = document.querySelector(`.${inputTarget.dataset.totalgeraldeconsultas0a14anosoutput}`);
            totalGeralDeConsultas0a14anosOutput.value = this.somar(totalGeralDeConsultas0a14anos);
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
    const gridInputs = document.querySelectorAll("[data-totaleixox]");
    gridInputs.forEach( gi => {
        gi.addEventListener("input", () => totalizador.filtrarEtotalizarCelulas(gi));
        gi.value !== "" && totalizador.filtrarEtotalizarCelulas(gi);
    });
}

window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});





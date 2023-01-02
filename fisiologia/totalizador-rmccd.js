const armazenamento = {
    salvarFicha() {

        for(let i=0; i<celulas_de_entrada.length; i++) {
            celulas_de_entrada[i].addEventListener("input", () => {
                localStorage.setItem(`trmccd-cel${i}`, `${celulas_de_entrada[i].value}`);
            });
            celulas_de_entrada[i].value = localStorage.getItem(`trmccd-cel${i}`);
        }
    },

    salvarDadosAdicionais() {
        const dadosAdicionais = document.querySelectorAll("div.container > header input, footer.rodape-da-ficha input, input[type=date], textArea");

        for (let i=0; i<dadosAdicionais.length; i++) {

            dadosAdicionais[i].addEventListener("input", () => {             
                localStorage.setItem(`trmccd-${dadosAdicionais[i].id}`, `${dadosAdicionais[i].value}`);

                if(dadosAdicionais[i].matches("#nota")) {
                    let dado = dadosAdicionais[i];
                    
                    dado.value.length > 0 ? dado.classList.add("bold") : dado.classList.remove("bold");
                }
            })
            dadosAdicionais[i].value = localStorage.getItem(`trmccd-${dadosAdicionais[i].id}`);
        }
    }
}



const totalizador = {

    filtrarCelulas(cel) {

        if(cel.dataset.totaleixox) {
            cel.classList.add(`${cel.dataset.totaleixox}`);
            const celulasPorTotalizar = document.querySelectorAll(`.${cel.dataset.totaleixox}`);
            const celula_de_saida = document.querySelector(`.${cel.dataset.totaleixoxoutput}`);
            this.totalizarCelulas(celulasPorTotalizar, celula_de_saida);
        }

        if(cel.dataset.totaleixoy) {
            cel.classList.add(`${cel.dataset.totaleixoy}`);
            const celulasPorTotalizar = document.querySelectorAll(`.${cel.dataset.totaleixoy}`);
            const celula_de_saida = document.querySelector(`.${cel.dataset.totaleixoyoutput}`);
            this.totalizarCelulas(celulasPorTotalizar, celula_de_saida);
        }

        if(cel.dataset.totaldeconsultasgeraiseixoy) {
            cel.classList.add(`${cel.dataset.totaldeconsultasgeraiseixoy}`);
            const celulasPorTotalizar = document.querySelectorAll(`.${cel.dataset.totaldeconsultasgeraiseixoy}`);
            const celula_de_saida = document.querySelector(`.${cel.dataset.totaldeconsultasgeraiseixoyoutput}`);
            this.totalizarCelulas(celulasPorTotalizar, celula_de_saida);
        }

        if(cel.dataset.totaldostotais) {
            cel.classList.add(`${cel.dataset.totaldostotais}`);
            const celulasPorTotalizar = document.querySelectorAll(`.${cel.dataset.totaldostotais}`);
            const celula_de_saida = document.querySelector(`.${cel.dataset.totaldostotaisoutput}`);
            this.totalizarCelulas(celulasPorTotalizar, celula_de_saida);
        }

        if(cel.dataset.totaldetotalgeral) {
            cel.classList.add(`${cel.dataset.totaldetotalgeral}`);
            const celulasPorTotalizar = document.querySelectorAll(`.${cel.dataset.totaldetotalgeral}`);
            const celula_de_saida = document.querySelector(`.${cel.dataset.totaldetotalgeraloutput}`);
            this.totalizarCelulas(celulasPorTotalizar, celula_de_saida);
        }
       
    },

    totalizarCelulas(celulasPorTotalizar, celula_de_saida) {
        let soma = 0;
        
        for (const v of celulasPorTotalizar) {
            soma += Number(v.value);
        }

        celula_de_saida.value = soma;

    }
}

window.addEventListener("load", () => {
    // INSTANCIAMENTO
    armazenamento.salvarFicha();
    armazenamento.salvarDadosAdicionais();
    celulas_de_entrada.forEach ( cel => {
        cel.addEventListener("input", () => totalizador.filtrarCelulas(cel));
        
        if(cel.value !== "") {
            totalizador.filtrarCelulas(cel);
        }
    });
})
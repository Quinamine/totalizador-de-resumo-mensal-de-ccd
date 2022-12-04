
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
    },

    totalizarCelulas(celulasPorTotalizar, celula_de_saida) {
        let soma = 0;
        
        for (const v of celulasPorTotalizar) {
            soma += Number(v.value);
        }

        celula_de_saida.value = soma;

    }
}






let celulas_de_entrada;
window.addEventListener("load", () => {
    celulas_de_entrada = document.querySelectorAll("div.col-de-celulas-de-entrada input");

    celulas_de_entrada.forEach ( cel => {
        cel.addEventListener("input", () => {
            totalizador.filtrarCelulas(cel);
        });
    })
})




window.addEventListener("load", () => {
    const cabecalho_da_ficha = document.querySelector("div.ficha.fronte header.cabecalho-da-ficha");
    const verso_da_ficha = document.querySelector("div.ficha.verso");

    const clone = cabecalho_da_ficha.cloneNode(true);
    verso_da_ficha.insertAdjacentElement("afterbegin", clone);
})
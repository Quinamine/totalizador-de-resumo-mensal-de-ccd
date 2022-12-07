



window.addEventListener("load", () => {
    const cabecalho_da_ficha = document.querySelector("div.page1 header.cabecalho-da-ficha");
    const verso_da_ficha = document.querySelector("div.page2");

    const clone = cabecalho_da_ficha.cloneNode(true);
    verso_da_ficha.insertAdjacentElement("afterbegin", clone);
})




window.addEventListener("load", () => {
    const cabecalho_principal = document.querySelector("div.container > header");
    const cabecalho_da_ficha = document.querySelector("div.ficha.fronte header.cabecalho-da-ficha");
    const verso_da_ficha = document.querySelector("div.ficha.verso");

    verso_da_ficha.insertAdjacentElement("beforebegin", cabecalho_principal.cloneNode(true));
    verso_da_ficha.insertAdjacentElement("afterbegin", cabecalho_da_ficha.cloneNode(true));
})
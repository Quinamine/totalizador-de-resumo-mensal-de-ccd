



window.addEventListener("load", () => {
    const cabecalho_principal = document.querySelector("div.container > header");
    const cabecalho_da_ficha = document.querySelector("div.ficha.fronte header.cabecalho-da-ficha");
    const verso_da_ficha = document.querySelector("div.ficha.verso");

    verso_da_ficha.insertAdjacentElement("beforebegin", cabecalho_principal.cloneNode(true));
    verso_da_ficha.insertAdjacentElement("afterbegin", cabecalho_da_ficha.cloneNode(true));

    // Omissão do cabeçalho do verso da ficha
    const cabecalho_fichaVerso =  document.querySelectorAll("div.container > header")[1];
    //cabecalho_fichaVerso.classList.add("hidden");


    // Cópia dos dados inseridos nas células de entrada do cabeçalho 
    const campos_do_cabecalho_fichaVerso =
    document.querySelectorAll("div.container > header")[1].querySelectorAll("input");   

    // Usei um setTimeout no evento de impressão no arquivo do `menu.js` para que a função abaixo seja executada antes da impressão
    const btnImprimir = document.querySelector("button.imprimir");
    btnImprimir.addEventListener("click", () => {
        for (let i=0; i<campos_do_cabecalho_fichaVerso.length; i++) {  
            campos_do_cabecalho_fichaVerso[i].value = localStorage.getItem(`trmccd-${campos_do_cabecalho_fichaVerso[i].id}`);
        }
    });

});
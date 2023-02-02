const armazenamento={salvarFicha(){for(let t=0;t<celulas_de_entrada.length;t++)celulas_de_entrada[t].addEventListener("input",()=>{localStorage.setItem(`trmccd-cel${t}`,`${celulas_de_entrada[t].value}`)}),celulas_de_entrada[t].value=localStorage.getItem(`trmccd-cel${t}`)},salvarDadosAdicionais() {
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
        if(dadosAdicionais[i].matches("#nota")) {
            let dado = dadosAdicionais[i];
            
            dado.value.length > 0 ? dado.classList.add("bold") : dado.classList.remove("bold");
        }
    }
},salvarDestaqueDeTotais(){readonlyCelsDarker.addEventListener("change",()=>{readonlyCelsDarker.checked?localStorage.setItem("trmccd-destaque","on"):localStorage.removeItem("trmccd-destaque")}),localStorage.getItem("trmccd-destaque")&&(readonlyCelsDarker.setAttribute("checked",""),menu.destacarFundoDeTotais())}},totalizador={filtrarCelulas(t){if(t.dataset.totaleixox){t.classList.add(`${t.dataset.totaleixox}`);let a=document.querySelectorAll(`.${t.dataset.totaleixox}`),e=document.querySelector(`.${t.dataset.totaleixoxoutput}`);this.totalizarCelulas(a,e)}if(t.dataset.totaleixoy){t.classList.add(`${t.dataset.totaleixoy}`);let l=document.querySelectorAll(`.${t.dataset.totaleixoy}`),o=document.querySelector(`.${t.dataset.totaleixoyoutput}`);this.totalizarCelulas(l,o)}if(t.dataset.totaldeconsultasgeraiseixoy){t.classList.add(`${t.dataset.totaldeconsultasgeraiseixoy}`);let s=document.querySelectorAll(`.${t.dataset.totaldeconsultasgeraiseixoy}`),d=document.querySelector(`.${t.dataset.totaldeconsultasgeraiseixoyoutput}`);this.totalizarCelulas(s,d)}if(t.dataset.totaldostotais){t.classList.add(`${t.dataset.totaldostotais}`);let r=document.querySelectorAll(`.${t.dataset.totaldostotais}`),i=document.querySelector(`.${t.dataset.totaldostotaisoutput}`);this.totalizarCelulas(r,i)}if(t.dataset.totaldetotalgeral){t.classList.add(`${t.dataset.totaldetotalgeral}`);let u=document.querySelectorAll(`.${t.dataset.totaldetotalgeral}`),c=document.querySelector(`.${t.dataset.totaldetotalgeraloutput}`);this.totalizarCelulas(u,c)}},totalizarCelulas(t,a){let e=0;for(let l of t)e+=Number(l.value);a.value=e}};window.addEventListener("load",()=>{armazenamento.salvarFicha(),armazenamento.salvarDadosAdicionais(),armazenamento.salvarDestaqueDeTotais(),celulas_de_entrada.forEach(t=>{t.addEventListener("input",()=>totalizador.filtrarCelulas(t)),""!==t.value&&totalizador.filtrarCelulas(t)})});
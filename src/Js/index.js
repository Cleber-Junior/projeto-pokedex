const botaoAlterarTema = document.getElementById("bt_alt_tema");

const body = document.querySelector("body");

const imagemTrocaTema = document.querySelector(".img_botao");

const FundoTroca = document.querySelector(".background");

botaoAlterarTema.addEventListener("click", () => {
    
    const ModoEscuroAtivo = body.classList.contains("modo_escuro");

    body.classList.toggle("modo_escuro");
    
    if(ModoEscuroAtivo){        
        imagemTrocaTema.setAttribute("src", "./src/imagens/sun.png");
        FundoTroca.setAttribute("src", "./src/imagens/fundo_dia.png");

    }
    else{
        imagemTrocaTema.setAttribute("src", "./src/imagens/moon.png");
        FundoTroca.setAttribute("src", "./src/imagens/fundo_noite.jpg");
    }

});
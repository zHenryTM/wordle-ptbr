import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";
import { verificarTamanhoDaPalavra } from "./verificarTamanhoDaPalavra.js";
import { Menu } from "./../menu.js";


const regex = /^[a-zA-Z]$/;
const teclasPermitidas = ['enter', 'backspace'];

document.addEventListener('keydown', (tecla) => { 

    if (!Menu.instrucoesEstaVisivel && !Menu.configuracoesEstaVisivel)
    {
        var input = tecla.key.toLowerCase();

        if (!regex.test(input) && !teclasPermitidas.includes(input)) tecla.preventDefault();
        else{

            somTecla();

            if (input == "backspace")
            {
                apagarDaTela();

            }
            else if (input == "enter")
            {
                if (verificarTamanhoDaPalavra())
                {
                    logicaDoJogo();
                }
            }
            else
            {
                mostrarNaTela(input);
            }
            
        }
    }

});
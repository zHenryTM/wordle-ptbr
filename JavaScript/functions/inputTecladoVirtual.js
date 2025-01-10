import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";
import { verificarTamanhoDaPalavra } from "./verificarTamanhoDaPalavra.js";
import { Menu } from "./../menu.js";


function inputTecladoVirtual(tecla)
{
    if (!Menu.instrucoesEstaVisivel && !Menu.configuracoesEstaVisivel)
    {
        somTecla();

        if (tecla == "Backspace")
        {
            apagarDaTela();
        }
        else if (tecla == "Enter")
        {
            if (verificarTamanhoDaPalavra())
            {
                logicaDoJogo();
            }

        }
        else
        {
            mostrarNaTela(tecla);
        }
    }
}


window.inputTecladoVirtual = inputTecladoVirtual;
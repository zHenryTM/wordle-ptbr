import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";
import { verificarTamanhoDaPalavra } from "./verificarTamanhoDaPalavra.js";


function inputTecladoVirtual(tecla)
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


window.inputTecladoVirtual = inputTecladoVirtual;
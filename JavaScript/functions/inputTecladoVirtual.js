import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";


function inputTecladoVirtual(tecla)
{
    somTecla();

    if (tecla == "Backspace")
    {
        apagarDaTela();
    }
    else if (tecla == "Enter")
    {
        logicaDoJogo();
    }
    else
    {
        mostrarNaTela(tecla);
    }
}


window.inputTecladoVirtual = inputTecladoVirtual;
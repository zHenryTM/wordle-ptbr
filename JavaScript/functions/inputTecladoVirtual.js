import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";


function inputTecladoVirtual(tecla)
{
    somTecla();

    if (tecla != "Backspace")
    {
        mostrarNaTela(tecla);
    }
    else
    {
        apagarDaTela();
    }
}


window.inputTecladoVirtual = inputTecladoVirtual;

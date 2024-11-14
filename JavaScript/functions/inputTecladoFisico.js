import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";
 

function inputTecladoFisico(tecla)
{
    somTecla();

    if (tecla.key == "Backspace")
    {
        apagarDaTela();
    }
    else if (tecla.key == "Enter")
    {
        logicaDoJogo();
    }
    else
    {
        mostrarNaTela(tecla.key);
    }

}


document.addEventListener("keydown", inputTecladoFisico);
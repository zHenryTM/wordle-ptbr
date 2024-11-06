import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
 

function inputTecladoFisico(tecla)
{
    somTecla();

    if (tecla.key != "Backspace")
    {
        mostrarNaTela(tecla.key);
    }
    else
    {
        apagarDaTela();
    }

}


document.addEventListener("keydown", inputTecladoFisico);

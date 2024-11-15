import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";


const inputsPermitidos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Enter", "Backspace"];
const tamanhoInputsPermitidos = inputsPermitidos.length;


function inputTecladoFisico(tecla)
{
    var inputPermitido = false;

    for (var i = 0; i < tamanhoInputsPermitidos; i++)
    {
        if (inputsPermitidos[i] == tecla.key)
        {
            inputPermitido = true;
        }
    }

    if (inputPermitido)
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
}


document.addEventListener("keydown", inputTecladoFisico);

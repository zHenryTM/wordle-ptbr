import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";


const inputsPermitidos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "enter", "backspace"];
const tamanhoInputsPermitidos = inputsPermitidos.length;


function inputTecladoFisico(tecla)
{
    var input = tecla.key.toLowerCase()
    var inputPermitido = false;

    for (var i = 0; i < tamanhoInputsPermitidos; i++)
    {
        if (inputsPermitidos[i] == input)
        {
            inputPermitido = true;
        }
    }

    if (inputPermitido)
    {
        somTecla();

        if (input == "backspace")
        {
            apagarDaTela();
        }
        else if (input == "enter")
        {
            logicaDoJogo();
        }
        else
        {
            mostrarNaTela(input);
        }
    }
}


document.addEventListener("keydown", inputTecladoFisico);

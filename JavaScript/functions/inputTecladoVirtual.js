import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";


function inputTecladoVirtual(tecla)
{
    somTecla();
    mostrarNaTela(tecla);
}


window.inputTecladoVirtual = inputTecladoVirtual;
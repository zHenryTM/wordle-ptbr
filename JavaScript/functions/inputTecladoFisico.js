import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";


function inputTecladoFisico(tecla)
{
    somTecla();
    mostrarNaTela(tecla.key);
}


document.addEventListener("keydown", inputTecladoFisico);
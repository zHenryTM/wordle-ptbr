import { mostrarNaTela } from "./mostrarNaTela.js";


function apertarTecla(tecla)
{
    somTecla();
    mostrarNaTela(tecla.key);
}

document.addEventListener("keydown", apertarTecla);
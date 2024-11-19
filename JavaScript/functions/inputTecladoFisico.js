import { somTecla } from "./somTecla.js";
import { mostrarNaTela } from "./mostrarNaTela.js";
import { apagarDaTela } from "./apagarDaTela.js";
import { logicaDoJogo } from "./logicaDoJogo.js";

const regex = /^[a-zA-Z]$/; // Vai funcinar como nosso filtro de letras
const teclasPermitidas = ['enter', 'backspace']; // Teclas especiais permitidas

// As mudanças aqui foram grandes ;)
document.addEventListener('keydown', (tecla) => { // Preferi fazer uma Arrow Function porque quero adicionar o Input com Ctrl+V dps...

    let input = tecla.key.toLowerCase();

    if (!regex.test(input) && !teclasPermitidas.includes(input)) tecla.preventDefault(); // Aqui é onde ocorre o teste do filtro regex, caso o ususario digite algo fora dele ele bloqueia a entrada
    else{ // Aqui continua bem semelhante ao seu código

        somTecla();

        if (input == "backspace") {
            apagarDaTela();

        } else if (input == "enter") {
            logicaDoJogo();

        } else {
            mostrarNaTela(input);

        }
        
    }

})

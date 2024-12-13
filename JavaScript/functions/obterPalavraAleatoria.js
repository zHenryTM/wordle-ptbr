import { tratarPalavraAleatoria } from "./tratarPalavraAleatoria.js";
import { removerAcentosGraficos } from "./removerAcentosGraficos.js";


var listaDePalavras;
var palavraAleatoria;
var palavraAleatoriaSemAcento;
var gist_url = "https://gist.githubusercontent.com/un-versed/6373912fbf4649704b6823ea696cfcb1/raw/629137a0d0c7160b94c35013df8d570b31100174/termooo-wordsv2.json";


window.onload = async function()
{
    // Importa lista de palavras e escolhe aleatoriamente uma palavra

    listaDePalavras = await fetch(gist_url)
        .then(listaDePalavras => listaDePalavras.text())
        .then(listaDePalavras => listaDePalavras.split(","));

    palavraAleatoria = tratarPalavraAleatoria(listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)]);
    palavraAleatoriaSemAcento = removerAcentosGraficos(palavraAleatoria);

    console.log(palavraAleatoria);
    console.log(palavraAleatoriaSemAcento);
}


export function obterListaDePalavras()
{
    // O arquivo que pega o palpite digitado pelo jogador precisa verificar se a palavra chutada está dentro dessa lista.

    return listaDePalavras;
}


export function obterPalavraAleatoria()
{
    // Retorna a palavra de 5 caracteres gerada aleatoriamente com acentos gráficos.

    return palavraAleatoriaSemAcento;
}

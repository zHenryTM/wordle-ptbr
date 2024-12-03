var listaDePalavras;
var palavraAleatoria;
var gist_url = "https://gist.githubusercontent.com/un-versed/6373912fbf4649704b6823ea696cfcb1/raw/629137a0d0c7160b94c35013df8d570b31100174/termooo-wordsv2.json";


window.onload = async function()
{
    // Importa lista de palavras e escolhe aleatoriamente uma palavra

    listaDePalavras = await fetch(gist_url)
        .then(listaDePalavras => listaDePalavras.text())
        .then(listaDePalavras => listaDePalavras.split(","));

    palavraAleatoria = tratarPalavraAleatoria(listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)]);

    console.log(palavraAleatoria);
    console.log(palavraAleatoria.length);
}


function tratarPalavraAleatoria(palavraAleatoria)
{
    // Remove aspas, colchetes, espaços vazios e \n da palavra sorteda

    palavraAleatoria = palavraAleatoria.replaceAll('"', '')
        .replaceAll("\n", "")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .trim()
        .toUpperCase();

    return palavraAleatoria;
}


export function obterPalavraAleatoria()
{
    // Retorna uma palavra de 5 caracteres

    return palavraAleatoria;
}

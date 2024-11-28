var listaDePalavras; // Lista de palavras a ser obtida do Gist
var palavra = ""; // Palavra atual a ser adivinhada

var GIST_URL = 'https://gist.githubusercontent.com/un-versed/6373912fbf4649704b6823ea696cfcb1/raw/629137a0d0c7160b94c35013df8d570b31100174/termooo-wordsv2.json';


window.onload = function ()
{
    carregarListaDePalavras(GIST_URL)
        .then(lista =>
        {
            listaDePalavras = lista;
            gerarPalavraAleatoria();
        })
        .catch(erro =>
        {
            console.error('Erro ao carregar a lista de palavras:', erro);
        });
}


function carregarListaDePalavras(gistURL)
{
    return fetch(gistURL)
        .then(response => response.text())
        .then(text => text.split('\n').filter(palavra => palavra.trim() !== ''));
}


function gerarPalavraAleatoria()
{
    palavra = listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)].toUpperCase();
    console.log(palavra);  // TEST STUFF
}


export function obterPalavraAleatoria()
{
    return palavra;
}

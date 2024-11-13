var listaDePalavras; // Lista de palavras a ser obtida do Gist
var palavra = ""; // Palavra a ser adivinhada

var GIST_URL = 'https://gist.githubusercontent.com/vncsmnl/25e7c165da276405af8ca4e1c8e17806/raw/bd238615c9089721a16418289589961490d0cf65/wordlist';


window.onload = function ()
{
    carregarListaDePalavras(GIST_URL)
        .then(lista =>
        {
            listaDePalavras = lista;
            obterPalavra();
        })
        .catch(erro =>
        {
            console.error('Erro ao carregar lista de palavras:', erro);
        });
}


function carregarListaDePalavras(gistURL)
{
    return fetch(gistURL)
        .then(response => response.text())
        .then(text => text.split('\n').filter(palavra => palavra.trim() !== ''));
}


export function obterPalavra()
{
    palavra = listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)].toUpperCase();
    console.log(palavra);  // TEST STUFF
    return palavra;
}

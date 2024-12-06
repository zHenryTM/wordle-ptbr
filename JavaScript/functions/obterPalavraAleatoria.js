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


function removerAcentosGraficos(palavra)
{
    var palavraSemAcento = "";
    var acentosGraficos =
    {
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "É": "E",
        "Ê": "E",
        "Í": "I",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ú": "U",
        "Ç": "C"
    };

    for (var i = 0; i < palavra.length; i++)
    {
        var letra = palavra[i];

        if (Object.keys(acentosGraficos).includes(letra))
        {
            palavraSemAcento += acentosGraficos[letra];
        }
        else
        {
            palavraSemAcento += letra;
        }
    }

    return palavraSemAcento;
}


export function obterPalavraAleatoria()
{
    // Retorna uma palavra de 5 caracteres

    return palavraAleatoriaSemAcento;
}

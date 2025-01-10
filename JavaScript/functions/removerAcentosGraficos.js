export function removerAcentosGraficos(palavra)
{
    // Remove os acentos gráficos das palavras da lista de palavras.

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

    for (let i = 0; i < palavra.length; i++)
    {
        let letra = palavra[i];

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
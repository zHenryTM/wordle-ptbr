export function tratarPalavraAleatoria(palavraAleatoria)
{
    // Remove aspas, colchetes, espaços vazios e \n das palavras da lista de palavras.

    palavraAleatoria = palavraAleatoria.replaceAll('"', '')
        .replaceAll("\n", "")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .trim()
        .toUpperCase();

    return palavraAleatoria;
}

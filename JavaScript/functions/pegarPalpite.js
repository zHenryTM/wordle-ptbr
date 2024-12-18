import { obterListaDePalavras } from "./obterPalavraAleatoria.js";
import { tratarPalavraAleatoria } from "./tratarPalavraAleatoria.js";
import { removerAcentosGraficos } from "./removerAcentosGraficos.js";
import { feedback } from "./feedback.js";


export function pegarPalpite()
{
    /**
     * Essa função pega os valores exibidos nos grids, forma uma string, verifica se a lista de palavra contém essa string e a retorna se tiver.
    */

    var palpite = "";  // Palavra digitada pelo jogador
    var grids = document.querySelectorAll(".grid-item.enabled");
    var listaDePalavras = obterListaDePalavras();
    var palpiteEmListaDePalavras = false;  // Verifica se o palpite do jogador é uma das palavras contidas na lista de palavras

    grids.forEach(function (grid)
    {
        palpite += grid.innerHTML;
    });

    listaDePalavras.forEach(palavra =>
    {
        palavra = tratarPalavraAleatoria(palavra);
        palavra = removerAcentosGraficos(palavra);
        if (palpite == palavra) palpiteEmListaDePalavras = true;
    });

    if (palpiteEmListaDePalavras) return palpite; else feedback("Palavra inválida", "verde", true);
}

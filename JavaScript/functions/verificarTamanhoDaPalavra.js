export function verificarTamanhoDaPalavra()
{
    /**
    *   Esta função verifica se o jogador digitou uma palavra com 5 letras, retornando "true" ou "false".
    */

    var gridsEnabled = document.querySelectorAll(".grid-item.enabled");
    var numberCharactersTyped = 0;  // Impedirá que o jogador envie uma palavra que possua menos de 5 letras.

    gridsEnabled.forEach((gridEnabled) => {
        if (gridEnabled.innerHTML != "")
        {
            numberCharactersTyped++;
        }
    })

    if (numberCharactersTyped == 5)
    {
        return true;
    }
}
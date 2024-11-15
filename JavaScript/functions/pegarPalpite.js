export function pegarPalpite()
{
    /**
     * Essa função pega os valores exibidos na tela, dentro dos 5 grids, forma uma string e a retorna como uma palavra.
    */

    var palpite = "";  // Palavra digitada pelo jogador
    var grids = document.querySelectorAll(".grid-item.enabled");

    grids.forEach(function (grid)
    {
        palpite += grid.innerHTML;
    });

    return palpite.toUpperCase();
}

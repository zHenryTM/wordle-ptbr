export function pegarPalpite()
{
    var palpite = "";  // Palavra digitada pelo jogador
    var grids = document.querySelectorAll(".grid-item.enabled");

    grids.forEach(function (grid)
    {
        palpite += grid.innerHTML;
    });

    return palpite.toUpperCase();
}
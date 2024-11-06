export function apagarDaTela()
{
    var grids = document.querySelectorAll(".grid-item");
    var gridsLength = grids.length;

    for (var i = 0; i < gridsLength; i++)
    {
        // Se o innerHTML do grid atual não tiver nenhum valor OU se o grid atual for o último grid sendo iterado:
        if (grids[i].innerHTML == "" || i == gridsLength - 1)
        {
            // Se o grid atual for o último grid a ser iterado E se esse último grid estiver vazio, indiceGrids receberá o valor de i (grid atual)
            // Se a condição for false, indiceGrids recebera o valor de i - 1 (grid anterior)
            var indiceGrids = (i == gridsLength - 1 && grids[gridsLength - 1].innerHTML != "") ? i : i - 1;

            // Se o grid atual (i) não tiver nenhum valor, isso significa que o anterior (i - 1) tem, logo, ele terá seu valor deletado
            var grid = grids[indiceGrids];
            grid.innerHTML = "";
        }
    }
}
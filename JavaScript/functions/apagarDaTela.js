export function apagarDaTela()
{
    var grids = document.querySelectorAll(".grid-item.enabled");
    var ultimoIndexDeGrids = grids.length - 1;

    for (var index = ultimoIndexDeGrids; index >= 0; index--)
    {
        if (grids[index].innerHTML != "")
        {
            grids[index].innerHTML = "";
            grids[index].style.animation = "0.25s zoomGridDelete linear";
            break;
        }
    }
}

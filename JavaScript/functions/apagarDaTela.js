export function apagarDaTela()
{
    var grids = document.querySelectorAll(".grid-item.enabled");
    var ultimoIndexDeGrids = grids.length - 1;

    for (let index = ultimoIndexDeGrids; index >= 0; index--)
    {
        if (grids[index].innerHTML != "")
        {
            grids[index].innerHTML = "";

            if (grids[index].style.animation == "0.25s zoomGridEnter linear")
            {
                grids[index].style.animation = "none"; 
            }

            grids[index].style.animation = "0.25s zoomGridDelete ease";
            break;
        }
    }
}
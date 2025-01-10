export function mostrarNaTela(tecla)
{
    /**
     * Exibe as letras digitadas dentro do grid ativo 
    */

    var grids = document.querySelectorAll(".grid-item.enabled");

    for (let i = 0; i < grids.length; i++)
    {
        if (grids[i].innerHTML == "")
        {
            grids[i].innerHTML = tecla.toUpperCase();
            grids[i].style.animation = "0.25s zoomGridEnter ease";
            break;
        }
    }
}
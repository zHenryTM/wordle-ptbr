export function obterIndexUltimoGridHabilitado()
{
    /**
     * Retorna o índice do último grid habilitado
    */

    var grids = document.querySelectorAll(".grid-item");
    var indexUltimoGridHabilitado;

    for (let index = 0; index < grids.length; index++)
    {
        if (grids[index].className != "flexbox grid-item disabled")
        {
            indexUltimoGridHabilitado = index;
        }
    }

    return indexUltimoGridHabilitado;
}
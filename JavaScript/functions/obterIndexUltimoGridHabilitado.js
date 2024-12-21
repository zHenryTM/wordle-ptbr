export function obterIndexUltimoGridHabilitado()
{
    /**
     * Retorna o índice do último grid habilitado
    */

    var grids = document.querySelectorAll(".grid-item");
    var gridsLen = grids.length;
    var indexUltimoGridHabilitado;

    for (var index = 0; index < gridsLen; index++)
    {
        if (grids[index].className != "grid-item disabled")
        {
            indexUltimoGridHabilitado = index;
        }
    }

    return indexUltimoGridHabilitado;
}

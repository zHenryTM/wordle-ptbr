function desabilitarGridsHabilitados()
{
    var gridsUsados = document.querySelectorAll(".grid-item.enabled");

    gridsUsados.forEach(function (grid)
    {
        grid.classList.remove("enabled");
        grid.classList.add("disabled");
    });
}

function habilitarGridsDesabilitados()
{
    // Continuar daqui
}

export function trocarGrids()
{
    /**
     * Essa função subtitui o nome "enabled" das classes dos grids já usados por "disabled" e vice-versa.
    */

    desabilitarGridsHabilitados();
}
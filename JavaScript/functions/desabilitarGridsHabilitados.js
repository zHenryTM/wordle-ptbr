export function desabilitarGridsHabilitados()
{
    var gridsUsados = document.querySelectorAll(".grid-item.enabled");

    gridsUsados.forEach(function (grid)
    {
        grid.classList.remove("enabled");
        grid.classList.add("disabled");
    });
}
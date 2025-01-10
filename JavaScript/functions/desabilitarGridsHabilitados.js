export function desabilitarGridsHabilitados()
{
    var gridsUsados = document.querySelectorAll(".grid-item.enabled");

    gridsUsados.forEach(grid =>
    {
        grid.classList.remove("enabled");
        grid.classList.add("disabled");
    });
}
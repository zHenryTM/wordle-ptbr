import { desabilitarGridsHabilitados } from "./desabilitarGridsHabilitados.js";
import { obterIndexUltimoGridHabilitado } from "./obterIndexUltimoGridHabilitado.js";


function habilitarGridsDesabilitados(indexUltimoGridHabilitado)
{
    var grids = document.querySelectorAll(".grid-item");

    var primeiroGridAHabilitar = indexUltimoGridHabilitado + 1;
    var ultimoGridAHabilitar = primeiroGridAHabilitar + 4;

    for (var i = primeiroGridAHabilitar; i < (ultimoGridAHabilitar + 1); i++)
    {
        var grid = grids[i];

        grid.classList.remove("disabled");
        grid.classList.add("enabled");
    }
}


export function trocarGrids()
{
    /**
     * Essa função subtitui o nome "enabled" das classes dos grids já usados por "disabled" e vice-versa.
    */

    var indexUltimoGridHabilitado = obterIndexUltimoGridHabilitado();  // Servirá de referência para saber qual linha deverá ser habilitado em seguida

    desabilitarGridsHabilitados();
    habilitarGridsDesabilitados(indexUltimoGridHabilitado);
}

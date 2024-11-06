export function mostrarNaTela(tecla)
{
    tecla = tecla.toUpperCase();

    var grids = document.querySelectorAll(".grid-item");
    var grid;  // Grid que será usado para exibir a letra digitada na tela

    grids.forEach(function(_grid) {

        // Se o innerHTML do grid atual estiver vazio e se a varíavel grid for nula
        if (_grid.innerHTML == "" && grid == null)
        {
            grid = _grid;   
        }
        
    });

    grid.innerHTML = tecla;
}

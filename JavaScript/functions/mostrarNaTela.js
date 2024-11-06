export function mostrarNaTela(tecla)
{
    tecla = tecla.toUpperCase();

    var grids = document.querySelectorAll(".grid-item");

    // Grid que será usado para exibir a letra digitada na tela
    var grid;


    grids.forEach(function(_grid, index) {

        // Se o innerHTML do grid atual estiver vazio e se a varíavel gridAtual for nula
        if (_grid.innerHTML == "" && grid == null)
        {
            // 
            grid = _grid;   
        }

    })


    grid.innerHTML = tecla;
}
export function mostrarNaTela(tecla)
{
    /**
     * Exibe na tela as letras digitadas pelo jogador, tanto pelo teclado físico quanto pelo teclado virtual.
    */

    tecla = tecla.toUpperCase();

    var grids = document.querySelectorAll(".grid-item.enabled");
    var grid;  // Grid que será usado para exibir a letra digitada na tela

    grids.forEach(function(_grid) {

        // Se o innerHTML do grid atual estiver vazio e se a varíavel grid for nula
        if (_grid.innerHTML == "" && grid == null)
        {
            grid = _grid;   
        }
        
    });

    grid.style.animation = "0.25s zoomGridEnter ease";
    grid.innerHTML = tecla;
}

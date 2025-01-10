export function trocarCorDoGrid(indiceGrid, cor)
{
    /**
     * Essa função troca a cor de background de um grid em específico, a depender se o jogador acertou a posição de uma letra ou não
     */

    var grid = document.querySelectorAll(".grid-item.enabled")[indiceGrid];
    
    if (cor === "verde")
    {
        grid.classList.add("right-position");
    }
    else if (cor === "amarelo")
    {
        grid.classList.add("wrong-position");
    }
}
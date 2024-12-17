export function flipAnimation(indiceGrid)
{
    /**
     * Altera o valor de animation-play-state, do arquivo CSS, de "paused" para "running", ativando o gatilho para iniciar animação.
    */

    document.querySelectorAll(".grid-item.enabled")[indiceGrid].style.animationPlayState = "running";
}

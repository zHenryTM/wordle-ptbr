export function feedback(mensagem="Escreva uma mensagem...", cor="vermelho", visibilityTimeInMs=4000)
{
    /**
     * Exibe na tela mensagens quando:
     *      - O jogador digita uma palavra inválida (que não está presente na lista de palavras).
     *      - O jogador acerta a palavra e vence o jogo.
     * 
     * Parâmetros:
     *      - mensagem : string     -> mensagem a ser exibida na tela. Pode ser qualquer string.
     *      - cor : string          -> cor do background da div que contém a mensagem (a cor das letras sempre será branca). Os valores só podem ser: vermelho ou verde.
     *      - estaVisivel : bool    -> gatilho que determina quando a mensagem será visível ao jogador ou não. 
    */

    var feedbackDiv = document.getElementsByClassName("feedback")[0];
    var corDiv = (cor.toLowerCase() == "verde") ? "#3aa394" : "#F72C5B";

    feedbackDiv.getElementsByTagName("p")[0].innerHTML = mensagem;
    feedbackDiv.style.backgroundColor = corDiv;
    feedbackDiv.style.visibility = "visible";
    feedbackDiv.style.animation = (cor.toLowerCase() == "vermelho") ? "0.5s shake linear" : "0.25s zoomIn ease";
 
    setTimeout(() => {feedbackDiv.style.animation = "0.25s zoomOut linear"}, visibilityTimeInMs - 250);
    setTimeout(() => {feedbackDiv.style.visibility = "hidden"; feedbackDiv.style.animation = "none"}, visibilityTimeInMs);
}
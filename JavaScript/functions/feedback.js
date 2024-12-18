export function feedback(mensagem="Escreva uma mensagem...", cor="vermelho", estaVisivel=true)
{
    /**
     * Exibe na tela mensagens quando:
     *      - O jogador digita uma palavra inválida (que não está presente na lista de palavras).
     *      - O jogador acerta a palavra.
     * 
     * Parâmetros:
     *      - mensagem : string     -> mensagem a ser exibida na tela. Pode ser qualquer string.
     *      - cor : string          -> cor do background da div que contém a mensagem (a cor das letras sempre será branca). Os valores só podem ser: vermelho ou verde.
     *      - estaVisivel : bool    -> gatilho que determina quando a mensagem será visível ao jogador ou não. 
    */

    var feedbackDiv = document.getElementsByClassName("feedback")[0];
    var corDiv = (cor.toLowerCase() == "verde") ? "#3aa394" : "#F72C5B";
    var estaVisivelDiv = (estaVisivel == true) ? "visible" : "hidden";

    feedbackDiv.getElementsByTagName("p")[0].innerHTML = mensagem;
    feedbackDiv.style.backgroundColor = corDiv;
    feedbackDiv.style.visibility = estaVisivelDiv;
}

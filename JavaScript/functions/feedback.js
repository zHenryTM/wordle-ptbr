export function feedback(mensagem="Escreva uma mensagem...", cor="vermelho", estaVisivel=true)
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
    var estaVisivelDiv = (estaVisivel == true) ? "visible" : "hidden";
    var audioPath = (cor.toLowerCase() == "vermelho") ? "./../../Assets/Audio/SomPalavraInvalida.mp3" : "./../../Assets/Audio/SomVitoria.mp3";
    var audio = new Audio(audioPath);

    feedbackDiv.getElementsByTagName("p")[0].innerHTML = mensagem;
    feedbackDiv.style.backgroundColor = corDiv;
    feedbackDiv.style.visibility = estaVisivelDiv;
    feedbackDiv.style.animation = "0.5s shake linear";

    audio.volume = (cor.toLowerCase() == "vermelho") ? 0.3 : 0.15;
    audio.play();

    setTimeout(() => {feedbackDiv.style.animation = "0.25s zoomOut linear"}, 3750);
    setTimeout(() => {feedbackDiv.style.visibility = "hidden"; feedbackDiv.style.animation = "none"}, 4000);
}

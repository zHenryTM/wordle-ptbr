export function trocarCorDaTeclaVirtual(letra, cor)
{
    /**
     * Ele troca a cor da tecla do teclado virtual conforme a cor do grid em que essa letra está presente
    */

    var teclasObject = document.querySelectorAll(".tecla");
    var teclasArray = Object.keys(teclasObject).map(tecla => teclasObject[tecla]);
    var tecla = teclasArray.filter(tecla => tecla.innerHTML == letra)[0];
    var cor = (cor == "verde") ? "right-position" : (cor == "amarelo") ? "wrong-position" : "opacity50";

    if (tecla.classList.value == "flexbox tecla")
    {
        // Não há nenhuma cor na tecla virtual

        tecla.classList.add(cor);
    }
    else if (tecla.classList.value == "flexbox tecla wrong-position" && cor == "right-position")
    {
        // Se entrar aqui, significa que a tecla virtual está amarela e será trocada para verde

        tecla.classList.remove("wrong-position");
        tecla.classList.add(cor);
    }
}

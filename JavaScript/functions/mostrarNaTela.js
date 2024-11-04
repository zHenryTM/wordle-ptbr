export function mostrarNaTela(tecla)
{
    tecla = tecla.toUpperCase();
    let primeiraGrade = document.getElementsByClassName("grid-item")[0];
    primeiraGrade.innerHTML = tecla;
}
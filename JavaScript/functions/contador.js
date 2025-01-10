export function contador()
{
    /**
     * Contagem regressiva até bater meia-noite.
    */

    function contadorEmTempoReal()
    {
        var tempoAtual = new Date();
        var horaAtual = String(23 - tempoAtual.getHours());
        var minutoAtual = String(60 - tempoAtual.getMinutes());
        var segundoAtual = String(60 - tempoAtual.getSeconds());
        
        contadorHTML.innerHTML = `${horaAtual.padStart(2, "0")}:${minutoAtual.padStart(2, "0")}:${segundoAtual.padStart(2, "0")}`;

        setTimeout(() => {contadorEmTempoReal()}, 1000);
    }

    var contadorHTML = document.getElementsByClassName("contadorHTML")[0];
    contadorEmTempoReal();
}
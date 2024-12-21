import { obterPalavraAleatoria, obterPalavraAleatoriaComAcento } from "./obterPalavraAleatoria.js";
import { pegarPalpite } from "./pegarPalpite.js";
import { trocarCorDoGrid } from "./trocarCorDoGrid.js";
import { trocarGrids } from "./trocarGrids.js";
import { trocarCorDaTeclaVirtual } from "./trocarCorDaTeclaVirtual.js";
import { desabilitarGridsHabilitados } from "./desabilitarGridsHabilitados.js";
import { flipAnimation } from "./flipAnimation.js";
import { feedback } from "./feedback.js";
import { lancarConfetes } from "./confetti.js";
import { obterIndexUltimoGridHabilitado } from "./obterIndexUltimoGridHabilitado.js";
 

function indexOfLetter(palavra, letra)
{
    /**
     * Retorna TODOS os índices em que uma letra aparece em uma palavra.
    */

    var indices = [];
    var indice = palavra.indexOf(letra);

    while (indice != -1)
    {
        indices.push(indice);
        indice = palavra.indexOf(letra, indice + 1);
    }

    return indices;
}


function obterObjeto(palavra)
{
    /**
     * Cria e retorna um objeto contendo uma letra e seus respectivos índices dentro de uma string.
    */

    var frequenciaDasLetras = {};

    for (var i = 0; i < 5; i++)
    {
        var letra = palavra[i];

        frequenciaDasLetras[letra] = indexOfLetter(palavra, letra);
    }

    return frequenciaDasLetras;
}


function obterChavesIguais(objeto_palavra, objeto_palpite)
{
    /**
     * Caso dois objetos possuam chaves com o mesmo nome em cada um, retornará um array com o nome dessas chaves.
    */
    
    var chavesIguais = Object.keys(objeto_palavra).filter(chave => Object.keys(objeto_palpite).includes(chave));

    return chavesIguais;
}


function compararLetras(objeto_palavra, objeto_palpite, chavesIguais)
{
    /**
     * Verifica e expoe na tela quais letras estão na posição certa, quais letras estão na posição errada e quais letras não estão presentes na palavra a ser adivinhada.
     */

    var chavesDiferentes = Object.keys(objeto_palpite).filter(letra => !Object.keys(objeto_palavra).includes(letra))
    chavesDiferentes.forEach(chave => trocarCorDaTeclaVirtual(chave, "opacity50"));

    chavesIguais.forEach(chave => {
        var letraPalavra = objeto_palavra[chave];
        var letraPalpite = objeto_palpite[chave];
        var contador = 0;  // Esse contador impede que uma letra seja indicada visualmente na tela mais vezes do que ela aparece na palavra
                           // Exemplo: "prata". A letra "a" aparece duas vezes, logo, se o jogador chutar "apara", o atributo contador impedirá
                           // que o "a" seja indicado na tela mais que duas vezes

        letraPalpite.filter(letra => {
            if (contador < letraPalavra.length)
            {
                if (letraPalavra.includes(letra))
                {
                    flipAnimation(letra);
                    trocarCorDoGrid(letra, "verde");
                    trocarCorDaTeclaVirtual(chave, "verde");
                }
                else
                {
                    flipAnimation(letra);
                    trocarCorDoGrid(letra, "amarelo");
                    trocarCorDaTeclaVirtual(chave, "amarelo");
                }
                
                contador++;
            }
        });
    });
}


function venceu()
{
    /**
     * Verifica se o jogador acertou as 5 letras e retorna true ou false.
    */

    return (document.querySelectorAll(".grid-item.right-position.enabled").length == 5) ? true : false; 
}


function rotinaDeVitoria()
{
    /**
     * Este método é responsável pelos efeitos audiovisuais e pelo comportamento do jogo.
    */

    var audio = new Audio("./Assets/Audio/SomVitoria.mp3");
    audio.volume = 0.12;
    audio.play();

    feedback("Você venceu!", "verde");
    lancarConfetes();
    desabilitarGridsHabilitados()
}


function gameOver() 
{
    var audio = new Audio("./Assets/Audio/SomDerrota.mp3");
    audio.volume = 0.5;
    audio.play();

    feedback("Palavra correta: " + obterPalavraAleatoriaComAcento(), "vermelho", 60000);
}


export function logicaDoJogo()
{
    var palavra = obterPalavraAleatoria();
    var palpite = pegarPalpite();
    var objeto_palavra = obterObjeto(palavra);
    var objeto_palpite = obterObjeto(palpite);
    var chavesIguais = obterChavesIguais(objeto_palavra, objeto_palpite);

    compararLetras(objeto_palavra, objeto_palpite, chavesIguais);

    if (venceu())
    {
        rotinaDeVitoria();
        return;
    }

    if (obterIndexUltimoGridHabilitado() == 29)
    {
        // Entrará aqui caso acabe todas as chances de se acertar a palavra
        gameOver();
    }
    
    trocarGrids();
}

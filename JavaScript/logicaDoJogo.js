import { obterPalavraAleatoria } from "./obterPalavraAleatoria.js";
import { pegarPalpite } from "./pegarPalpite.js";
import { trocarCorDoGrid } from "./trocarCorDoGrid.js";
import { trocarGrids } from "./trocarGrids.js";


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

    chavesIguais.forEach(chave => {
        var letraPalavra = objeto_palavra[chave];
        var letraPalpite = objeto_palpite[chave];
        var lugarCerto = letraPalpite.filter(letra => {
            if (letraPalavra.includes(letra))
            {
                trocarCorDoGrid(letra, "verde");
            }
            else
            {
                trocarCorDoGrid(letra, "amarelo");
            }
        });
    });
}


export function logicaDoJogo()
{
    var palavra = obterPalavraAleatoria();
    var palpite = pegarPalpite();
    var objeto_palavra = obterObjeto(palavra);
    var objeto_palpite = obterObjeto(palpite);
    var chavesIguais = obterChavesIguais(objeto_palavra, objeto_palpite);

    compararLetras(objeto_palavra, objeto_palpite, chavesIguais);

    trocarGrids();
}
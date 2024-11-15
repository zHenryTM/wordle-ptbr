import { obterPalavraAleatoria } from "./obterPalavraAleatoria.js";
import { pegarPalpite } from "./pegarPalpite.js";
import { tratarPalpite } from "./tratarPalpite.js"; 
import { trocarGrids } from "./trocarGrids.js";

// Pegar palpite do usuário (receber quando apertar enter)
// Tratar palpite do usuário (remover letras duplicadas, pois elas quebram a lógica do jogo)
// Desenvolver a lógica do jogo
// Mandar exibir na tela as letras acertadas e suas respectivas posições
// Desabilitar os grids habilitados e desabilitar os 5 próximos grids

export function logicaDoJogo()
{
    var palavra = obterPalavraAleatoria();  // Palavra que o jogador tem que adivinhar
    var palpite = pegarPalpite();
    var palpiteTratado = tratarPalpite(palpite);
    var palpiteTratadoLen = palpiteTratado.length;
    var fimDeJogo = false;

    if (palpite == palavra)
    {
        // Jogador acerta a palavra a ser adivinhada

        console.log("Parabéns, você acertou!");
        fimDeJogo = true;

        // NA VERSÃO FINAL, ENCERRAR O JOGO AQUI, MAS, COMO PRECISO DESABILITAR OS GRIDS HABILITADOS E HABILITAR OS PRÓXIMOS, CHAMAREI O MÉTODO DE DESABILITAR/HABILITAR ABAIXO
        // ...
    }
    else
    {
        // Jogador erra a palavra

        // Criar loop de acordo com a quantidade de grids disponíveis

        for (var letraEmPalpite = 0; letraEmPalpite < palpiteTratadoLen; letraEmPalpite++)
        {
            for (var letraEmPalavra = 0; letraEmPalavra < 5; letraEmPalavra++)
            {
                if (palpiteTratado[letraEmPalpite] == palavra[letraEmPalavra])
                {
                    console.log("Letra " + palpiteTratado[letraEmPalpite] + " na posição " + (letraEmPalavra + 1));
                }
            }
        }

        // CHAMAR MÉTODO PARA HABILITAR/DESABILITAR OS GRIDS
        trocarGrids();
    }
}

window.logicaDoJogo = logicaDoJogo;

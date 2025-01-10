import { tratarPalavraAleatoria } from "./tratarPalavraAleatoria.js";
import { removerAcentosGraficos } from "./removerAcentosGraficos.js";
import { LocalStorageManagement } from "../LocalStorageManagement.js";
import { Menu } from "../menu.js";



var listaDePalavras;
var palavraAleatoria;
var palavraAleatoriaSemAcento;
var gist_url = "https://gist.githubusercontent.com/un-versed/6373912fbf4649704b6823ea696cfcb1/raw/629137a0d0c7160b94c35013df8d570b31100174/termooo-wordsv2.json";



export function obterListaDePalavras()
{
    // O arquivo que pega o palpite digitado pelo jogador precisa verificar se a palavra chutada está dentro dessa lista, por isso este método retorna a lista.
    return listaDePalavras;
}



export function obterPalavraAleatoria()
{
    // Retorna a palavra de 5 caracteres gerada aleatoriamente sem acentos gráficos.
    return palavraAleatoriaSemAcento;
}



export function obterPalavraAleatoriaComAcento()
{
    return palavraAleatoria;
}



async function iniciarJogo()
{
    /**
     * Inicia o jogo realizando as seguintes etapas:
     *      1 - Verifica se há algum valor salvo no navegador; caso não haja, cria um valor que corresponderá à primeira jogada do dia
     *      2 - Escolha aleatoriamente uma palavra de uma lista de palavras
     *      3 - Realiza um tratamento da palavra, removendo espaços vazios, acentos fráficos e outros tipos de caracteres
    */


    // Verificando se há um valor salvo no navegador
    if (LocalStorageManagement.getEndGameData() == null) LocalStorageManagement.setEndGameData();


    // Verificando se o jogador jogou as três partidas diárias
    if (LocalStorageManagement.getEndGameData().endGame <= 3)
    {
        // Importando lista de palavras e escolhendo aleatoriamente uma palavra
        listaDePalavras = await fetch(gist_url)
            .then(listaDePalavras => listaDePalavras.text())
            .then(listaDePalavras => listaDePalavras.split(","));

        // Tratando a palavra - removendo acentos gráficos, espaços vazios e caracteres
        palavraAleatoria = tratarPalavraAleatoria(listaDePalavras[Math.floor(Math.random() * listaDePalavras.length)]);
        palavraAleatoriaSemAcento = removerAcentosGraficos(palavraAleatoria);
    }
    else
    {
        // Caso o jogador não possa mais jogar partidas...
        LocalStorageManagement.resetEndGameDataAtMidnight();  // Reseta o limite diário caso seja um novo dia e recarrega a página automáticamente.
                                                              // Logo, se for um novo dia, os códigos daqui para baixo não serão executados.

        Menu.exibirJanelaContador();
    }
}



window.onload = () => iniciarJogo();
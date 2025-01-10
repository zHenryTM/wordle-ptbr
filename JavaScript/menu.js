import { AudioManagement } from "./AudioManagement.js";
import { LocalStorageManagement } from "./LocalStorageManagement.js";
import { contador } from "./functions/contador.js";
import { partidasRestantes } from "./functions/partidasRestantes.js";


export class Menu 
{
    /**
     * Essa classe é responsável por gerenciar o menu do jogo, e isso inclui: 
     *      - A seção de instruções de como jogar (representada pela "?" na tela inicial);
     *      - A seção de configurações (representada pela engrenagem na tela inicial);
     *      - A seção de contador (encontrada no HTML)
     *      - A seção de reinicio rápido (encontrada no HTML)
     * 
     * 
     * Métodos:
     *      - switchJanelaInstrucoes        -> alterna a visibilidade da div instrucoes entre hidden e visible, a depender do seu estado atual
     *      - switchJanelaConfiguracoes     -> alterna a visibilidade da div configuracoes entre hidden e visible, a depender do seu estado atual
     *      - fecharJanelaReinicioRapido    -> define visibilidade da div reinicio-rapido para hidden
     *      - fecharJanela                  -> fecha qualquer janela que estiver aberta
     *      - exibirJanelaContador          -> exibe janela que informa a quantidade de tempo até o jogador poder jogar o jogo de novo
     *      - exibirJanelaDeReinicioRapido  -> exibe a janela que oferece ao jogador opção rápida e prática para reiniciar a página
     *      - playButtonHoverAudio          -> toca um áudio assim que o mouse passa por cima dos botões do Menu
     *      - recarregarPagina              -> recarrega a página, criando a ilusão de reiniciar o jogo
     *      - copiarLink                    -> copia o link da página para enviar para amigos
    */


    static pelicula = document.getElementsByClassName("menu-pelicula")[0];
    static instrucoes = document.getElementsByClassName("instrucoes")[0];
    static configuracoes = document.getElementsByClassName("configuracoes")[0];
    static reinicioRapido = document.getElementsByClassName("reinicio-rapido")[0];
    static janelaContador = document.getElementsByClassName("contador")[0]
    static instrucoesEstaVisivel = false;
    static configuracoesEstaVisivel = false;
    static reinicioRapidoEstaVisivel = false;


    static switchJanelaInstrucoes()
    {
        if (!this.instrucoesEstaVisivel)
        {
            this.pelicula.style.visibility = "visible";
            this.instrucoes.style.visibility = "visible";
            this.instrucoes.style.animation = "0.9s zoomGridEnter ease";
            this.instrucoesEstaVisivel = true;
        }
        else
        {
            this.instrucoesEstaVisivel = false;
            this.instrucoes.style.animation = "0.3s zoomMenuOut ease";
            setTimeout(() => {
                this.instrucoes.style.visibility = "hidden";
                this.pelicula.style.visibility = "hidden";
            }, 300);
        }
    }


    static switchJanelaConfiguracoes()
    {
        if (!this.configuracoesEstaVisivel)
        {
            this.pelicula.style.visibility = "visible";
            this.configuracoes.style.visibility = "visible";
            this.configuracoes.style.animation = "0.9s zoomGridEnter ease";
            this.configuracoesEstaVisivel = true;
        }
        else
        {
            this.configuracoesEstaVisivel = false;
            this.configuracoes.style.animation = "0.3s zoomMenuOut ease";
            setTimeout(() => {
                this.configuracoes.style.visibility = "hidden";
                this.pelicula.style.visibility = "hidden";
            }, 300);
        }
    }


    static fecharJanelaReinicioRapido()
    {
        if (this.reinicioRapidoEstaVisivel)
        {
            this.reinicioRapidoEstaVisivel = false;
            this.reinicioRapido.style.animation = "0.3s zoomMenuOut ease";
            setTimeout(() => {
                this.pelicula.style.visibility = "hidden";
                this.reinicioRapido.style.visibility = "hidden"; 
            }, 300)
        }
    }


    static fecharJanela()
    {
        // Este método fecha as janelas de configurações ou instruções, a depender de qual estiver aberta.
        // É chamado ao clicar na película que aparece quando uma das janelas citadas anteriormente é aberta.

        if (this.instrucoesEstaVisivel)
        {
            this.switchJanelaInstrucoes();
            return;
        }

        if (this.configuracoesEstaVisivel)
        {
            this.switchJanelaConfiguracoes();
            return;
        }

        if (this.reinicioRapidoEstaVisivel)
        {
            this.fecharJanelaReinicioRapido();
            return;
        }
    }


    static exibirJanelaContador()
    {
        this.janelaContador.style.visibility = "visible";
        this.pelicula.style.visibility = "visible";
        this.janelaContador.style.animation = "0.9s zoomGridEnter ease";

        contador();
    }


    static exibirJanelaDeReinicioRapido()
    {
        if ((4 - LocalStorageManagement.getEndGameData().endGame) != 0)
        {    
            this.reinicioRapidoEstaVisivel = true;
            this.reinicioRapido.style.visibility = "visible";
            this.reinicioRapido.style.animation = "0.9s zoomGridEnter ease";
            this.pelicula.style.visibility = "visible";

            partidasRestantes();
        }
        else
        {
            Menu.exibirJanelaContador();
        }
    }


    static playButtonHoverAudio()
    {
        AudioManagement.play(AudioManagement.somBotoesPath, AudioManagement.getVolumeSomBotoes());
    }


    static recarregarPagina()
    {
        window.location.reload();
    }


    static copiarLink()
    {
        var link = "https://zhenrytm.github.io/wordle-ptbr/";

        navigator.clipboard.writeText(link);
    }
}


window.switchJanelaInstrucoes = Menu.switchJanelaInstrucoes.bind(Menu);
window.switchJanelaConfiguracoes = Menu.switchJanelaConfiguracoes.bind(Menu);
window.playButtonHoverAudio = Menu.playButtonHoverAudio.bind(Menu);
window.fecharJanela = Menu.fecharJanela.bind(Menu);
window.recarregarPagina = Menu.recarregarPagina.bind(Menu);
window.copiarLink = Menu.copiarLink.bind(Menu);
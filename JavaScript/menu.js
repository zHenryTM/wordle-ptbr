import { AudioManagement } from "./AudioManagement.js";


export class Menu 
{
    /**
     * Essa classe é responsável por gerenciar o menu do jogo, e isso inclui: 
     *      - A seção de instruções de como jogar (representada pela "?" na tela inicial);
     *      - A seção de configurações (representada pela engrenagem na tela inicial);
     * 
     * 
     * Métodos:
     *      - switchJanelaInstrucoes    -> alterna a visibilidade da div instrucoes entre hidden e visible, a depender do seu estado atual
     *      - switchJanelaConfiguracoes -> alterna a visibilidade da div configuracoes entre hidden e visible, a depender do seu estado atual
     *      - playButtonHoverAudio      -> toca um áudio assim que o mouse passa por cima dos botões do Menu
    */


    static pelicula = document.getElementsByClassName("menu-pelicula")[0];
    static instrucoes = document.getElementsByClassName("instrucoes")[0];
    static configuracoes = document.getElementsByClassName("configuracoes")[0];
    static instrucoesEstaVisivel = false;
    static configuracoesEstaVisivel = false;


    static switchJanelaInstrucoes()
    {
        if (!this.instrucoesEstaVisivel)
        {
            this.pelicula.style.visibility = "visible";
            this.instrucoes.style.visibility = "visible";
            this.instrucoesEstaVisivel = true;
        }
        else
        {
            this.pelicula.style.visibility = "hidden";
            this.instrucoes.style.visibility = "hidden";
            this.instrucoesEstaVisivel = false;
        }
    }


    static switchJanelaConfiguracoes()
    {
        if (!this.configuracoesEstaVisivel)
        {
            this.pelicula.style.visibility = "visible";
            this.configuracoes.style.visibility = "visible";
            this.configuracoesEstaVisivel = true;
        }
        else
        {
            this.pelicula.style.visibility = "hidden";
            this.configuracoes.style.visibility = "hidden";
            this.configuracoesEstaVisivel = false;
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
    }


    static playButtonHoverAudio()
    {
        AudioManagement.play(AudioManagement.somBotoesPath, AudioManagement.getVolumeSomBotoes());
    }

}


window.switchJanelaInstrucoes = Menu.switchJanelaInstrucoes.bind(Menu);
window.switchJanelaConfiguracoes = Menu.switchJanelaConfiguracoes.bind(Menu);
window.playButtonHoverAudio = Menu.playButtonHoverAudio.bind(Menu);
window.fecharJanela = Menu.fecharJanela.bind(Menu);

export class AudioManagement
{
    // Attributes
    static defaultAudioPath = "./../Assets/Audio/";
    static somTecladoPath = this.defaultAudioPath + "MarcosVinicius.mp3";
    static somBotoesPath = this.defaultAudioPath + "SomButtonHover.mp3";
    static somDerrotaPath = this.defaultAudioPath + "SomDerrota.mp3";
    static somPalavraInvalidaPath = this.defaultAudioPath + "SomPalavraInvalida.mp3";
    static somVitoriaPath = this.defaultAudioPath + "SomVitoria.mp3";


    // Getters
    static getHtmlInputElements()
    {
        return {
            teclado: document.getElementById("volumeDoTeclado"),
            botoes: document.getElementById("volumeDosBotoes"),
            musicas: document.getElementById("volumeDasMusicas"),
            checkbox: document.getElementById("mutarEfeitosSonoros")
        }
    }


    static getVolumeSomTeclado()
    {
        var { teclado } = this.getHtmlInputElements();

        return parseFloat(teclado.value);
    }


    static getVolumeSomBotoes()
    {
        var { botoes } = this.getHtmlInputElements();

        return parseFloat(botoes.value);
    }


    static getVolumeSomMusica()
    {
        var { musicas } = this.getHtmlInputElements();

        return parseFloat(musicas.value);
    }


    // Methods
    static play(audioPath, volume)
    {
        var audio = new Audio(audioPath);
        audio.volume = volume;
        audio.play();
    }


    static muteAllSounds()
    {
        var { teclado, botoes, musicas, checkbox } = this.getHtmlInputElements();

        if (checkbox.checked)
        {
            teclado.value = 0;
            botoes.value = 0;
            musicas.value = 0;

            teclado.disabled = true;
            botoes.disabled = true;
            musicas.disabled = true;
        }
        else
        {
            teclado.disabled = false;
            botoes.disabled = false;
            musicas.disabled = false;
        }
    }


    static resetValues()
    {
        var { teclado, botoes, musicas} = this.getHtmlInputElements();

        if (!teclado.disabled && !botoes.disabled && !musicas.disabled)
        {
            teclado.value = 0.3;
            botoes.value = 0.1;
            musicas.value = 0.2;
        }
    }
}


window.muteAllSounds = AudioManagement.muteAllSounds.bind(AudioManagement);
window.resetValues = AudioManagement.resetValues.bind(AudioManagement);
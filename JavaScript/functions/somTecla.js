import { AudioManagement } from "../AudioManagement.js";


export function somTecla()
{
    AudioManagement.play(AudioManagement.somTecladoPath, AudioManagement.getVolumeSomTeclado());
}

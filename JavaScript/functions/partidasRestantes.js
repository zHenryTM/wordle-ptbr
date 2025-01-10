import { LocalStorageManagement } from "../LocalStorageManagement.js";


export function partidasRestantes()
{
    var p = document.getElementsByClassName("partidasRestantes")[0];
    var endGame = LocalStorageManagement.getEndGameData().endGame;

    console.log(endGame);
    var _partidasRestantes = 4 - endGame;

    p.innerHTML = `Você ainda pode jogar mais ${_partidasRestantes} vezes`;
}
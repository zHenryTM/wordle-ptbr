function playKeyboardSound()
{
    var audio = new Audio("./JavaScript/Audio/MarcosVinicius.mp3");
    audio.play();
}

document.addEventListener("keydown", playKeyboardSound);

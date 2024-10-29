function apertarTecla(tecla)
{
    somTecla();
    console.log(tecla.key);
}

document.addEventListener("keydown", apertarTecla);

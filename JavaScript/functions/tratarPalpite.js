export function tratarPalpite(_palpite)
{
    // Retorna o palpite do jogador sem letras duplicadas, se houverem

    var palpiteTratado = "";
    
    for (var i = 0; i < 5; i++)
    {
        var palpiteTratadoLen = palpiteTratado.length;
        var letraDuplicada = false;
    
        for (var c = 0; c < palpiteTratadoLen; c++)
        { 
            if (_palpite[i] == palpiteTratado[c])
            {
                // Se uma entre todas as letras de palpiteTratado for igual a letra atual de _palpite...
                letraDuplicada = true;
            }
        }
        
        if (letraDuplicada == false)
        {
            palpiteTratado += _palpite[i]
        }
    }
    
    return palpiteTratado;
}
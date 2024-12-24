# Wordle-PtBR

Versão brasileira do jogo Wordle com features novas elaboradas pelos criadores deste projeto.

## Estágio atual:

![image](https://github.com/user-attachments/assets/1f4f64d7-d71d-4f7f-b3b4-edef3465d9f4)

## Sobre o estágio atual do jogo

O programa já é capaz de:
- Selecionar aleatoriamente uma palavra
- Coletar os inputs do jogador
- Tratar e comparar esses inputs com a palavra sorteada anteriormente
- Verificar as posições corretas e/ou erradas das letras encontradas no input do jogador 
  
### Próximos passos

Embora o jogo já possua lógica, diversas funcionalidades precisam ser implementadas, como:

- Animações para tornar o jogo mais agradável
- Menu de configurações 
- Instruções de como jogar o jogo
- Melhorar responsividade para dispositiveis móveis

## Sobre os desafios enfrentados durante o desenvolvimento

Diversos desafios foram, e continuam sendo, superados durante o desenvolvimento do Wordle-PtBR, o que proporcionou, e continua proporcionando, diversos momentos de descoberta e aprendizado. Esse processo é fundamental para a melhora de nossas habilidades de programação e, por isso, é visto com muito orgulho.

O primeiro grande desafio foi "importar" uma lista de palavras, que foi superado com a descoberta da função ```fetch()```.

O segundo maior desafio foi referente ao tratamento de strings, que foi superado com o uso de Regex (Regular Expression) e as funções ```test()``` e ```includes()```.

O terceiro, e maior desafio até então, foi a respeito da lógica do jogo, que verifica, a partir dos inputs do jogador, quais letras estão presentes na palavra sorteada pelo jogo, exibindo na tela quais letras estão nas posições corretas e quais não estão. Este problema foi resolvido após vários dias elaborando ideias, escrevendo várias lógicas diferentes no papel e testando no computador. 

A ideia escolhida para superar esse problema foi a seguinte:

converter a palavra sorteada e o input do jogador em objetos JavaScript (semelhantes ao dicionários em Python), em que cada letra das palavras se torna a chave e seus respectivos indíces dentro da string se tornam os valores; em seguida, verifica-se quais chaves estão presentes em ambos os objetos e analisa-se os seus valores; se houverem valores iguais, significa que as letras estão na posição correta, caso contrário, significa que estão na posição errada. 

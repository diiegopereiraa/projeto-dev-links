A propriedade CSS `display: flex;` é usada para criar um container flexível que permite a criação de layouts responsivos e flexíveis. Ao aplicar `display: flex;` a um elemento, você transforma esse elemento em um contêiner flexível que organiza seus elementos filhos em uma única linha ou em várias linhas, dependendo das configurações de layout.

`flex-direction:` Define a direção dos elementos dentro do contêiner (linha, coluna, linha reversa, coluna reversa).
`column:` Os elementos são dispostos em uma coluna de cima para baixo.

`justify-content:`Define o alinhamento horizontal dos elementos (início, fim, centro, espaço entre eles, espaço ao redor deles). Foi utilizado valor `center` na linha 58.

`align-items:` Define o alinhamento vertical dos elementos (início, fim, centro, esticado, linha de base). Foi utilizado valor `center` na linha 59.

A propriedade `rgba` é uma função CSS que permite definir a cor de um elemento usando valores de `vermelho, verde, azul e alfa (transparência).` Ela é uma extensão da propriedade rgb, que permite definir a cor sem a opção de transparência.

A sintaxe básica da função rgba é a seguinte:

`rgba(red, green, blue, alpha)`

# red, green e blue são valores numéricos entre 0 e 255 que representam a intensidade de vermelho, verde e azul, respectivamente.
alpha é um valor numérico entre 0 e 1 que define a transparência da cor, onde 0 é totalmente transparente e 1 é totalmente opaco.
Exemplo de uso da função rgba:


# div {
background-color: rgba(255, 0, 0, 0.5);
}
# Nesse exemplo, a cor de fundo do elemento <div> é definida como vermelho com uma transparência de 0.5 (50% opaco). Isso resulta em um tom de vermelho semi-transparente.

# A utilização da `função rgba` é útil quando se deseja aplicar cores com transparência, permitindo que o conteúdo ou elementos subjacentes sejam visíveis através da cor definida. Ela é amplamente utilizada em propriedades como `background-color` e color para criar efeitos de sobreposição, transições suaves e elementos semi-transparentes em CSS.

# A propriedade CSS border-radius é usada para definir o raio dos cantos de um elemento com borda. Ela permite arredondar os cantos, tornando o elemento com uma aparência mais suave e menos angular. Como mostra na linha 58 `style.css`.

A sintaxe básica da propriedade `border-radius` é a seguinte:

`border-radius: 8px;`

# A propriedade CSS `backdrop-filter` é usada para aplicar efeitos visuais a um elemento, como desfoque, ajuste de cor ou brilho, na área que está atrás desse elemento. Ela permite criar efeitos interessantes de sobreposição e melhoria da legibilidade do conteúdo. `blur`(4px): Aplica um desfoque à área de fundo. Como mostra na linha 65 do `style.css`.

# A propriedade CSS `text-decoration` é usada para adicionar decorações visuais a elementos de texto, como links ou títulos. Ela permite aplicar estilos como sublinhado, linha através do texto, sobreposição e outras decorações.

A sintaxe básica da propriedade text-decoration é a seguinte:

`text-decoration: none;`

# O `:hover` é um seletor `pseudo-classe` no CSS que é usado para aplicar estilos a um elemento quando o cursor do mouse é posicionado sobre ele. É amplamente utilizado para criar efeitos interativos e visuais em elementos HTML.

A sintaxe básica do `:hover` é a seguinte:

# selector:hover {
/_ Estilos aplicados quando o elemento é destacado _/
} 

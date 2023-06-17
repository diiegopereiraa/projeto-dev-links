Para alinhar um elemento com `display: block` no CSS, você pode usar as propriedades `margin` e `text-align`.

# A propriedade `text-align` no CSS é usada para alinhar o conteúdo de um elemento de texto. Ela pode ser aplicada a elementos de bloco (como <div>, <p>, etc.) e também a elementos inline (como <span>, <a>, etc.).

A propriedade `text-align` aceita os seguintes valores:

`text-align: left;` Alinha o conteúdo do texto à esquerda.
`text-align: right;` Alinha o conteúdo do texto à direita.
`text-align: center;` Centraliza o conteúdo do texto horizontalmente.
`text-align: justify;` Justifica o conteúdo do texto, fazendo com que as linhas se estendam da margem esquerda à margem direita.

Alinhar horizontalmente no centro: Com propriedade `margin:` com valores `4px auto`
no seletor `#switch` na linha 72 no arquivo `style.css`.
`#switch {
 margin: 4px auto;
}`

Essa técnica define margens `esquerda e direita` automáticas e margens em `cima e embaixo` com 4px, o que centraliza o elemento horizontalmente dentro de seu contêiner.

# Contexto de alinhar `posicionamento absoluto`. Ao utilizar `position: absolute` no CSS para alinhar elementos, você pode usar as propriedades `top, bottom, left e right` para controlar sua posição em relação ao elemento pai ou ao documento.

# No seletor `#switch button` na linha 81 movimentar o elemento com transform: translateY(-50%); -50% vai pegar no meio do elemento `#switch` e vai deixar -50% para cima. -50% na `metade` está acima do final desse elemento `#switch`. Na linha 82 o `top` pega todo elemento, vai se posicionar 50% do topo no meio do `#switch` essa é maneira de posicionar posicionamento `absoluto`. Neste caso estou alinhando o topo. O topo é o `translateY` que é o `Y`na vertical, eu tiro -50% do elemento e depois eu coloco 50% com essa propriedade `top`.

#switch button {
position: absolute;
top: 50%;
right: 0;
transform: translateX(-50%);
}

# Para alinhar o background usando a forma abreviada `(shorthand) background`, você pode incluir o valor de posição juntamente com outras propriedades do background, como cor, imagem, repetição e tamanho. A ordem dos valores dentro da propriedade background é a seguinte:

`background: #fff var(--switch-bg-url) no-repeat center;` como mostra no seletor `#switch button` na linha 77.

# Ao usar `display: flex no CSS`, você pode alinhar os itens dentro de um contêiner de forma flexível. Existem várias propriedades que podem ser usadas para controlar o alinhamento dos itens com flexbox. Como mostra no seletor `ul li a` na linha 111, 112 e 113. Com a propriedade`justify-content`alinhou o conteúdo ao meio.

ul li a {
display: flex;
justify-content: center;
align-items: center;
}
# O flex cria uma linha virtual que passa no meio do elemento que ele adicionou, o nome dessa linha chame-se `main` eixo principal. Os links estão centralizado ao topo, ou seja, acima da linha. Se eu colocar uma propriedade `height` que significa altura pode ver. Se eu quero que os links que está no topo `acima da linha`fique centralizado bem no meio da linha eu uso a propriedade `alinh-items` com valor `center`.

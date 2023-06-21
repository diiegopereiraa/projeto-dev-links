## A propriedade `outline` no CSS é usada para adicionar uma linha ao redor de um elemento, fornecendo uma forma visual de destacá-lo. O outline é semelhante ao border, mas difere em alguns aspectos. Enquanto o border ocupa espaço e pode afetar o layout do elemento, o outline não ocupa espaço e não afeta o posicionamento dos elementos adjacentes.

## largura é a espessura da linha de contorno `(outline)`, especificada em unidades de comprimento (por exemplo, `pixels, ems, rems, etc.`). estilo define o estilo da linha de `contorno`, como `dotted` (pontilhado), `dashed `(tracejado), `solid` (contínuo) ou `none` (nenhum contorno). cor define a cor da linha de contorno.

## A sintaxe básica da propriedade outline é a seguinte:

```css
.elemento {
  outline: largura estilo cor;
}
```

## Para destacar o elemento do botão iremos usar a propriedade `outline` como mostra na linha 93 do arquivo `style.css` o elemento terá uma linha de contorno com `8 pixels` de espessura, estilo `sólido` e com `cor` da variável com valor `hightlight-color` que foi definido no `:root` e `.light`. 
```css
  #switch button:hover {
    outline: 8px solid var(--hightlight-color);
}
```
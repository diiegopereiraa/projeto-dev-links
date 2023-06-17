# Por padrão o navegação já coloca espaço em algumas tag. Por exemplo a tag `<body>`. 

# Outro detalhe importante sobre medidas das caixas, sempre que precisar ir em uma caixa por exemplo `#Container` linha 20, vamos supor que eu quero colocar um `padding: um preenchimento interno de 100px;` Percebe que o `width` na linha 21 foi para o espaço, não existi mais, não terá regra. Não respeitará o 360px; Para resolver isso tem a propriedade chamada `box-sizing`: que é a medida do tamanho da caixa com valor: `border-box` para que seja medida através da borda. fazendo isso quando a medida vem da borda ele mantém os 360px; Qualquer preenchimento interno ele irá servirá para colocar esse 100px; por exemplo.

<body>: O elemento <body> tem uma margem de 8px e um preenchimento aplicados por padrão.

<p>: A tag <p> tem uma margem de 16px preenchimento aplicado por padrão.

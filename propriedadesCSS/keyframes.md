## `@keyframes:` A regra `@keyframes` é usada para definir animações em CSS. Ela permite que você crie animações com várias etapas definindo quadros-chave `(keyframes)` em diferentes pontos da animação.

## No exemplo: vai começar `'from'` a partir de e `'to'` para onde ele vai terminar. Vai começar do `left:0` e vai terminar em `left:50%.` Foi criado uma animação que vai fazer suavimente um slide-ani em uma entrada de 0 para 50%. Vai mover o elemento de `0` para `50%.` A volta da animação vai ser de `50%` para `0`.

```css
@keyframes slide-ani {
  from {
    0%;
  }
  to {
    50%;
  }
}
```

```css
@keyframes slide-back {
  from {
    50%;
  }
  to {
    0%;
  }
}
```

## O momento que irá acontecer essa movimentação quando estiver no `.light` na linha 88 no arquivo `style.css.` não vou usar mais `right` e nem `left:initial`.

```css
.light #switch button {
  right: 0;
  left: initial;
}
```

## vou usar propriedade `animation:` com essa propriedade irei precisar de dois valores. O nome da propriedade que foi criado `slide-ani` e o tempo `0.2s` que ela vai levar para executar. Ou seja, aplica animação quando eu colocar esse `.light` aqui. Quando eu clicar esse `.light` vai entrar no html, quando entrar: o css vai interpretar o `animation:` vai aplicar o `slide-ani` que vai fazer `left:0` até 50% no tempo `0.2s`.na linha 85 para linha 88 no arquivo `style.css.` Toda animação tem um começo e um fim, ou seja, ela foi 0 para 50%. Quando chega no fim em 0.2s ela acaba e volta para inicial do `left:0`. Mas existe uma regra que posso colocar `animation:` que executa a seguinte coisa: ei! `slide-ani` ou animação quando você terminar mantenha as propriedades aqui no `to` no `left:50%.` A regra é `forwards` ao colocar essa regra estou dizendo para ele o seguinte: você irá realizar animação do `slide-ani` que vai levar o `left` de `0` até `50%` em `0.2s` com `forwards` quando chegar no final mantenha as propriedades que eu defini no `slide-ani`.

```css
.light #switch button {
  animation: slide-ani 0.2s forwards;
}
```

## A volta da animação vai ser de `50%` para `0`.vou usar propriedade `animation:` porém, não vou colocar no `.light`, irei colocar `#switch button` na linha 76 do arquivo `style.css` com essa propriedade irei precisar de dois valores. O nome da propriedade que foi criado `slide-back` e o tempo `0.2s` que ela vai levar para executar a volta. Não precisa colocar `forwards` porque vai manter as propriedades do meu `animation:` é o `left:0`. não preciso colocar é redundante já existe no padrão o `left:0`.

```css
#switch button {
  animation: slide-back 0.2s;
}
```

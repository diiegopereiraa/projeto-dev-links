## Uma regra no css tudo que começa com `@` é uma `(at-rule)` no CSS `@` é `at` e `media` rules. `@media` com `(min-width:700px){}` eu falo na sua largura mínima de `700px`,ou seja, da sua largura de `700px` acima adicionará as regras de troca de background. Na pasta css no arquivo media.css. 

```css
@media screen and (max-width: 700px) {
  /* Estilos a serem aplicados em telas com largura mínima de 700 pixels */
  :root {
    --bg-url: url(../assets/bg-desktop.jpg);
  }

  .light {
    --bg-url: url(../assets/bg-desktop-light.jpg);
  }
}
```
## As media queries no CSS são usadas para aplicar estilos diferentes com base nas características do dispositivo de exibição, como largura de tela, altura de tela, densidade de pixels, orientação, etc. Elas permitem criar layouts responsivos e adaptáveis para diferentes dispositivos ou tamanhos de tela.
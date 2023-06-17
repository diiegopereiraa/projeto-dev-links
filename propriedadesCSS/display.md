## Cada elementos HTML exitem algumas regras de CSS por de baixos dos panos que não conseguimos ver.

# Uma dessas regras muito importante é a regra de display (visualização).

- Temos o _display none;_ que quer dizer que ele vai sumir com elemento da tela.

- Alguns elementos por padrão tem o _display block;_ automaticamente ele pegará o elemento aplicará toda largura possível no elemento de tela, caso não tiver uma largura fixa. Exemplo tirando a propriedade _width_ na _linha 12_ do seletor: _#container_ #container {
  width: 360px;
  } percebe que ele vai pegar toda largura disponível colocará para o elemento _block_ forçando qualquer outro elemento abaixo dele para que fique embaixo.

  - Já o _display-inline_ deixará o elemento em linha e todo elemento _inline_ não consigo aplicar margem. Para aplicar margin é preciso transformar o elemento para _"block"_. Como mostra a linha 23 do seletor #profile img {
    display: block;
    }
    ou não necessariamente alinho dessa forma, eu pego o elemento pai: _#profile_. Porém em display-inline ele aceita que o pai dele tenha um _text-align_ que seja _center_ em _#profile_ na linha 19. Todos elemento _inline_ vão aceitar que o pai dele defina se ele fica centralizado, no canto direito ou esquerdo padrão. Se esse elenento fosse do tipo como mostra a linha 23 do seletor #profile img {
    display: block;
    } não aceitará o _text-align: center_ no elemento pai: _#profile_.

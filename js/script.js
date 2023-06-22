// Foi criado a função 'toggleMode' com uma variável `const html e atribuindo '=' no 'document' que é a representação de todo documento 'html' em formato de objeto javaScript. Dentro documento '.' eu acesso minha TAG 'html' através 'documentElement'. No if condicional. Se essa condição for verdadeira ele entrará no código. Vai responder o tipo de dado booleano `true ou false` -> No 'html' na lista de classe 'classList' contém 'contains' 'light'? Se contém vou pegar o 'html' na lista de classe 'classList.' vou remover 'remove' a classe de nome 'light'. Senão `else` contém vou pegar o 'html' na lista de classe 'classList'. vou adicionar 'add' a classe de nome 'light'.

function toggleMode() {
  // const html = document.documentElement;
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add("light")
  // }

  // Selecionando a Tag html
  const html = document.documentElement
  // Substituído as classes
  html.classList.toggle("light")
  // Substituir a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/foto-light.png")
    // Se tiver light mode, adicionar a legenda na imagem
    img.setAttribute("alt","Foto de Diego Pereira de óculos, com camiseta branca e fundo laranja.")
  } else {
    // Se tiver sem light mode, manter a imagem padrão
    img.setAttribute("src", "./assets/foto.png")
    // Se tiver sem light mode, manter a legenda da imagem 
    img.setAttribute("alt","Foto de Diego Pereira, com camiseta preta e fundo vermelho.")
  }
}

// Foi simplificado a função `toggleMode` com uma variável `const html e atribuindo `=` no `document` que é a representação de todo documento `html` em formato de objeto javaScript. Dentro documento `.` eu acesso minha TAG `html` através `documentElement`. No `html` na lista de classe `classList` inserir a classe 'light' caso não exista e remover caso exista com `toggle`!?

// com uma variável `const img e atribuindo '=' no 'document.' Dentro documento tenho uma função querySelector() significa: pesquisa pelo seletor com argumento '#profile img'.

// No 'html' na função 'setAttribute()' que significa: modificar um atributo com novo valor. Se tiver light mode, adicionar a imagem light: 'src' '/assets/foto-light.png'. Se tiver sem light mode, manter a imagem padrão: "src", "/assets/foto.png". Modifica a imagem ao clicar no toggleMode.

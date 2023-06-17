# Git
O Git permite que você mantenha um histórico completo de todas as alterações feitas em seus arquivos ao longo do tempo. Ele funciona armazenando essas alterações em um repositório, que é um local onde todo o histórico do projeto é mantido. Cada vez que você faz uma alteração em um arquivo, o Git registra essa alteração como um "commit" no repositório, capturando uma imagem instantânea do estado dos arquivos naquele momento.

* Controle de versão
° Histórico do projeto

* Linha do tempo


# Conceitos básicos

* Repository

° Um repositório (ou repo) no contexto do Git é um local onde todo o histórico de um projeto é armazenado, incluindo os arquivos, pastas e registros de alterações. Local onde ficará o histórico do seu projeto. 

* Você pode criar um novo repositório local usando o comando git init, que inicializa um diretório como um repositório Git vazio. 

* Branch

° Uma branch (ramificação) no Git é uma linha separada de desenvolvimento dentro de um repositório. Ela permite que você trabalhe em novos recursos, correções de bugs ou experimente alterações em seu projeto sem afetar a versão principal ou a linha de desenvolvimento principal.

° Linha do tempo

* Commit

° um commit é uma operação que registra uma nova alteração no repositório. Ele representa uma imagem instantânea do estado dos arquivos em um determinado momento e armazena as informações sobre as alterações realizadas.

Quando você faz um commit, está criando um novo marco no histórico do projeto. Cada commit possui um identificador único (hash) que o torna facilmente referenciável. Além disso, um commit contém as seguintes informações:
* Autor: O nome e o endereço de e-mail do autor do commit.
* Data e hora: O momento em que o commit foi realizado.
* Mensagem: Uma descrição concisa das alterações realizadas no commit.

° Pontos na história

* Stage

* O staging area (ou área de stage) no Git é uma área intermediária que fica entre o diretório de trabalho e o repositório. É onde você seleciona e prepara as alterações que serão incluídas no próximo commit.

* Quando você faz modificações nos arquivos de um repositório Git, essas alterações não são automaticamente incluídas em um commit. Em vez disso, você precisa explicitamente adicionar essas alterações ao stage antes de realizar o commit.
* Para adicionar arquivos ao stage, você utiliza o comando git add. Por exemplo, para adicionar um arquivo chamado "exemplo.txt" ao stage, você executaria o seguinte comando:
° git add exemplo.txt
° Preparação do que será enviado para o ponto na história

# Comandos 

// inicia o git (repositório) no seu projeto.
`git init`

// adiciona todos os arquivos modificados ao stage.
`git add`

// cria e descreve um ponto na história
`git commit -m` "message here"

// envia alterações para o repositório remoto
`git push`

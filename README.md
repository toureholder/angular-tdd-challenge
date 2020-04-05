# Challenge Reserva Ingressos

## Descrição

Projeto feito em angular 9 em que existe um formulário de reserva de ingressos para os filmes que estão para serem lançados, o projeto está responsivo utilizando o sistema de guid do bootstrap 4, (não estava específicado como deveria ser a lista dos filmes, por isso fiz uma tela inicial que lista os filmes e clicando em um filme da lista é encaminhado para o formulário de reserva), os filmes estão sendo buscados na API do site (https://www.themoviedb.org/), o formulário está seguindo o layout dos mockups disponibilizados, o cep está sendo buscado na API (https://viacep.com.br/).

## Sugestão

O checkbox está abaixo do formulário do acompanhante no mockup, colocando ele acima do formulário melhora a usabilidade de clicar nele e desclicar. No mais eu mudaria o layout, em cores e fontes, adicionaria ícones nos campos. Em estrutura acho que está correto cumprindo o que foi proposto.

## Pré-requisitos

- [NodeJS](https://nodejs.org/en/download/)

Após o download do NodeJS é necessário instalar o Angular CLI, a qual esse projeto foi construído.

```
npm install -g @angular/cli
```

## Instalação

Após o download do projeto, existirá um arquivo chamado "moviedb-config-sample.ts" dentro da pasta "app" crie uma copia do arquivo e renomeie chamando-a de "moviedb-config.ts", dentro do arquivo terá um parametro chamado "api_key", configure esse parametro com sua api key do site (https://www.themoviedb.org/), instale as dependências do mesmo indo até o diretório raiz do projeto e executando o comando:

```
npm install
```
Após os passos anteriores estarem concluídos, podemos utilizar a nossa aplicação.
No diretório raiz do projeto digite o comando:

```
ng serve
```

O Serviço estará disponível na porta 4200.

http://localhost:4200

## Build

Execute `ng build` para criar o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção.

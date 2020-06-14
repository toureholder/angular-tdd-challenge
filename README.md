# Desafio TDD Angular


## Sobre
Este é um desafio de Test Driven Deleopment com Angular.

## Prerequisitos
### Obter chave de API The Movie Database
Este projeto usa a api [The Movie Database (TMDb) v3](https://developers.themoviedb.org/3/movies/get-movie-details) para obter informações sobre filmes. Você precisa obter uma **API Key (v3 auth)** para realizar o desafio.

- [Crie](https://www.themoviedb.org/account/signup) ou [acesse](https://www.themoviedb.org/login) sua conta The Movie Database
- Encontre sua **API Key (v3 auth)** clicando na sua imagem de perfil na barra superior de navegação e acessando **Settings** e em seguida **API**.

## Getting started

### Adicione sua chave de API ao código
Crie um arquivo `src/app/moviedb-config.ts` com o seguinte conteúdo e substitua o string vazio de `api_key` com sua chave de API:

```javascript
export const movieDb = {
  url: "https://api.themoviedb.org/3/movie/",
  api_key: "", // Your API key here
  url_image: "https://image.tmdb.org/t/p/w300/",
};
```

### Instalar
```bash
npm install
```

### Iniciar
```bash
ng serve
```

### Test
```bash
ng test
```

## Sobre o código existente

O projeto tem implementada uma tela de listar o próximos lançamentos. É a página inicial da aplicação.

![tela de listar o próximos lançamentos](https://i.imgur.com/vEypyAx.jpg "tela de listar o próximos lançamentos")


A cobertura de testes autal é 100%.


## O desafio

Seu desafio é **desenvolver com TDD** uma tela para fazer a reserva de um filme com os requisitos a seguir.

### Acesso à tela de fazer a reserva
Para acessar a tela de fazer a reserva o usuário deve clicar em um dos filmes da página inicial da aplicação.

### Serviço de dados
Para obter as informações necessárias para criar a tela de reserva é preciso fazer uma requisição `GET` para o endpont `https://api.themoviedb.org/3/movie/:id`.

### Interface de usuário
A tela deve ter os seguintes elementos de UI:
 - A imagem do cartaz do filme
 - O nome do filme
 - O **tagline** do filme
 - Um formulário com os seguintes elementos:
   - Um input para o nome da pessoa fazendo a reserva
   - Um input para o CPF da pessoa
   - Um input para o CEP da pessoa
   - Um botão para submeter o formulário

Este wireframe oferece uma sugestão de layout:
![wireframe da tela de fazer reserva](https://i.imgur.com/ovCHjYS.jpg "wireframe da tela de fazer reserva")

### Validacões
O formulário deve ter as seguintes validações:
 - O nome deve ser uma string entre 1 a 50 caracteres
 - O CPF deve ser um CPF válido
 - O CEP deve um CEP existente e validado pelo Webservice https://viacep.com.br/

### Cobertura de testes
A cobertura de teste deve permanecer em **100%**.



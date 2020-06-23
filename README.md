# TDD by example


## Sobre
Este é o código que foi produzido durante o curso de TDD para o frontend.


## Prerequisitos para rodar a aplicação
### Obter chave de API The Movie Database
Este projeto usa a api [The Movie Database (TMDb) v3](https://developers.themoviedb.org/3/movies/get-movie-details) para obter informações sobre filmes. Você precisa obter uma **API Key (v3 auth)** para realizar o desafio.

- [Crie](https://www.themoviedb.org/account/signup) ou [acesse](https://www.themoviedb.org/login) sua conta The Movie Database
- Encontre sua **API Key (v3 auth)** clicando na sua imagem de perfil na barra superior de navegação e acessando **Settings** e em seguida **API**.

### Adicione sua chave de API ao código
Edite o arquivo `src/app/moviedb-config.ts` e substitua o string vazio de `api_key` com sua chave de API:

```javascript
export const movieDb = {
  url: "https://api.themoviedb.org/3/movie/",
  api_key: "", // Your API key here
  url_image: "https://image.tmdb.org/t/p/w300/",
};
```

## Rodando a aplicação
```bash
# Instale as dependências
npm install

# Rodar a aplicação
ng serve

# Executar os testes
ng test

# Executar os testes e gerar relatório de cobertura de código
ng test --code-coverage
```


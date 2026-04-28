# Bandpedia

## Descrição

Bandpedia é um aplicativo mobile educacional desenvolvido com React Native e Expo, cujo objetivo é apresentar informações sobre bandas musicais de forma organizada, visual e acessível. A aplicação permite que o usuário explore uma lista de bandas e visualize detalhes como descrição, integrantes, álbuns, músicas famosas e curiosidades, promovendo uma experiência informativa e intuitiva.

O conteúdo do aplicativo é gerenciado por meio de um arquivo JSON local, o que facilita a manutenção, escalabilidade e separação entre dados e interface.

---

## Funcionalidades

- Tela de splash para apresentação inicial do aplicativo  
- Listagem de bandas em formato de cartões com imagem, nome, gênero e ano de formação  
- Navegação para tela de detalhes com informações completas de cada banda  
- Exibição de descrição, integrantes, álbuns, músicas famosas e curiosidades  
- Tela "Sobre" com informações do projeto e do desenvolvedor  
- Consumo de dados a partir de arquivo JSON local  

---

## Tecnologias Utilizadas

- React Native  
- Expo  
- JavaScript  
- JSON  

---

## Estrutura do Projeto

```
app/
assets/
  images/
components/
constants/
  bandas.json
hooks/
````

- `app/`: Contém as telas da aplicação utilizando o padrão do Expo Router  
- `components/`: Componentes reutilizáveis  
- `constants/bandas.json`: Fonte de dados estáticos do aplicativo  
- `assets/images/`: Imagens utilizadas na aplicação  

---

## Estrutura dos Dados

As informações das bandas são armazenadas no arquivo `bandas.json`, localizado na pasta `constants`. Cada banda segue uma estrutura padronizada contendo:

- id  
- nome  
- ano de formação  
- país  
- gênero  
- descrição  
- integrantes  
- álbuns famosos  
- músicas famosas  
- curiosidades  
- imagem  

Essa abordagem permite fácil expansão do conteúdo sem necessidade de alterações na lógica da aplicação.

---
## Como rodar o projeto

### 1) Pre-requisitos

- Node.js LTS (recomendado: 20+)
- npm (ja vem com Node)
- Expo Go no celular (Android/iOS) **ou** emulador configurado

### 2) Instalar dependencias

No diretorio do projeto, rode:

```bash
npm install
```

### 3) Iniciar o projeto

- `npx expo start`: inicia o Expo
- `npx expo start --tunnel`: caso tenha problemas de rede

Esse comando abre o Metro Bundler (servidor do Expo). A partir dele voce pode abrir o app em:

- Android (emulador/dispositivo)
- iOS (simulador no macOS)
- Web
  
## Estrutura base

- `app/`: telas e rotas (Expo Router)
- `components/`: componentes reutilizaveis
- `contexts/`: contextos React
- `assets/`: imagens e icones

## Observacoes

- Se houver erro de cache, tente:

```bash
npx expo start -c
```

- Se estiver no celular, use o app Expo Go e escaneie o QR Code exibido no terminal.

---

## Objetivo Acadêmico

Este projeto foi desenvolvido como parte de uma atividade acadêmica com o objetivo de aplicar conceitos de desenvolvimento mobile, organização de dados, navegação entre telas e construção de interfaces com React Native.

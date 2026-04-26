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

## Instalação e Execução

### Pré-requisitos

- Node.js instalado  
- Expo CLI (opcional, pode ser usado via npx)  
- Aplicativo Expo Go instalado no dispositivo móvel  

### Passos

1. Clone o repositório:


`git clone https://github.com/seu-usuario/bandpedia.git`


2. Acesse a pasta do projeto:


`cd bandpedia`


3. Instale as dependências:


`npm install`


4. Inicie o projeto:


`npx expo start`


5. Execute no dispositivo:
- Escaneie o QR Code com o Expo Go  
- Ou utilize um emulador Android/iOS  

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

## Objetivo Acadêmico

Este projeto foi desenvolvido como parte de uma atividade acadêmica com o objetivo de aplicar conceitos de desenvolvimento mobile, organização de dados, navegação entre telas e construção de interfaces com React Native.

---

## Autor

Matheus Resende

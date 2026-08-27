<div align="center">
    <h1>
        <picture>
        <img src="./src/assets/logo.svg" style="width: 50px">
        </picture><br>
        Organizer Web
    </h1>
    <p>
        Aplicação web para organização de anotações e grupos de imagens.
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</div>

---

## 📖 Resumo do Projeto

O **Organizer Web** é uma aplicação desenvolvida para auxiliar na organização de anotações e grupos de imagens.

A aplicação foi pensada principalmente para estudantes, professores e estagiários que precisam armazenar e organizar informações de maneira simples e rápida.

O usuário pode criar grupos de anotações, editar seus títulos e conteúdos, visualizar a quantidade de caracteres utilizados e excluir grupos.

Os dados são armazenados utilizando o **localStorage**, permitindo que as informações permaneçam salvas mesmo após o fechamento ou atualização da página.

---

## 🌐 Acesse o Projeto

<p align="left">
  <a href="https://organizer-web-snowy.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Organizer%20Web-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  </a>
</p>

---

## ⚙️ Tecnologias Utilizadas

- **React** — Desenvolvimento da interface utilizando componentes funcionais.
- **JavaScript** — Implementação da lógica e funcionalidades da aplicação.
- **CSS3** — Estilização da aplicação e responsividade.
- **Vite** — Ferramenta utilizada para criação e execução do projeto React.
- **LocalStorage** — Armazenamento local dos grupos e anotações.
- **Math** — Utilizado para operações matemáticas e cálculos apresentados na aplicação.
- **Git/GitHub** — Versionamento e armazenamento do código-fonte.
- **Vercel** — Deploy da aplicação.

---

## 🏗️ Estrutura do Projeto

A aplicação foi organizada utilizando componentes funcionais, seguindo uma estrutura de pai para filho.

```bash
.
├── public/
│
├── src/
│   ├── assets/
│   │   └── logo.svg
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── NotesSection.jsx
│   │   ├── NotesSection.css
│   │   ├── Popup.jsx
│   │   ├── Popup.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   │
│   ├── styles/
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

### Componentes
- App.jsx — Componente principal e responsável pelo gerenciamento dos estados da aplicação.
- Header.jsx — Cabeçalho e navegação da aplicação.
- Hero.jsx — Seção inicial com apresentação do Organizer.
- NotesSection.jsx — Exibição dos grupos de anotações e criação de novos grupos.
- Popup.jsx — Janela utilizada para visualizar e editar uma anotação.
- Footer.jsx — Rodapé contendo informações sobre o projeto e integrantes.

## 📝 Funcionalidades
### Criar grupos

O usuário pode criar novos grupos de anotações através do botão "+ Novo grupo".

Cada grupo recebe automaticamente um identificador único utilizando:

```javascript
Date.now()
```

Também são armazenadas informações como título, data de criação e conteúdo da anotação.

### Editar anotações

Ao clicar em um grupo, é aberto um popup que permite:

- Alterar o título;
- Adicionar ou editar uma anotação;
- Visualizar a quantidade de caracteres;
- Salvar as alterações;
- Excluir o grupo.
- Contagem de caracteres

A aplicação calcula a quantidade de caracteres presentes em cada anotação.

Também é apresentada uma média de caracteres considerando os grupos existentes.

A média é arredondada utilizando:

```javascript
Math.round()
```
### Armazenamento local

Os grupos e suas respectivas informações são armazenados no navegador através do:

```javascript
localStorage
```

Sempre que os grupos são modificados, os dados são atualizados no armazenamento local.

Dessa forma, ao atualizar ou fechar a página, as anotações continuam disponíveis no mesmo navegador.

### Responsividade

A aplicação possui estilos específicos para diferentes tamanhos de tela, permitindo sua utilização em:

- Desktop;
- Tablet;
- Smartphones;

### Uso de I.A.

A imagem do hero (src/assets/hero-banner.png) foi gerada com inteligência artficial.

## 📦 Instalação

Para executar o projeto localmente, é necessário possuir o Node.js instalado.

### 1. Clone o repositório
```bash
git clone COLOQUE_AQUI_O_LINK_DO_REPOSITORIO
```
### 2. Acesse a pasta do projeto
```bash
cd organizer-web
```
### 3. Instale as dependências
```bash
npm install
```
### 4. Execute o projeto
```bash
npm run dev
```

Após executar o comando, o Vite disponibilizará um endereço local, normalmente:

```bash
http://localhost:5173
```

👥 Integrantes

Segue abaixo os integrantes do grupo IRIS:

<ul> <li> <strong>Flávia Camerim de Sousa</strong> — RM: 570979 </li> <li> <strong>João Pedro Nóbrega Pereira</strong> — RM: 570322 </li> <li> <strong>Kevin Simões de Souza Lima</strong> — RM: 571942 </li> <li> <strong>Luan Sá Muniz dos Santos</strong> — RM: 569136 </li> <li> <strong>Manuella Sousa Thomazini</strong> — RM: 573606 </li> </ul>

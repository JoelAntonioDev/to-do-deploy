📌 To-Do List Front-End

Este projeto é a interface de um sistema de gerenciamento de tarefas, desenvolvido com React + TypeScript + Vite.
🚀 Tecnologias Utilizadas

    React 19
    TypeScript é um superset do JavaScript que fortemente tipado, garantindo maior segurança no código.
    Vite é um build tool para projetos frontend que oferece um ambiente de desenvolvimento extremamente rápido.
    React Router
    ESLint 
    Lucide React é uma biblioteca de ícones modernos e personalizáveis para React.

Este projecto está acessível em: https://to-do-deploy-two.vercel.app/
📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:
1️⃣ Clonar o repositório

    git clone https://github.com/JoelAntonioDev/to-do-list-frontend.git

    cd to-do-list-frontend

2️⃣ Instalar as dependências

    npm install

3️⃣ Executar o projeto

    npm run dev

    O projeto será iniciado em http://localhost:5173/.

Funcionalidades Implementadas:
    Listagem de Tarefas: Exiba todas as tarefas cadastradas.
    Criação e Edição: Formulário para criar e editar tarefas.
    Exclusão: Botão para remover tarefas.
    Upload de Arquivos: Permitir que o usuário anexe arquivos a uma tarefa.
    Listagem e Remoção de Arquivos: Mostrar os arquivos já anexados e possibilitar a exclusão.
    Feedback Visual: Estados de carregamento e mensagens de erro/sucesso

Utilizou-se também Hooks(useState, useEffect) para gerenciamento de estado. E temos uma interface amigável e responsiva
📝 Estrutura do Projeto

📦 to-do-list-front

├── 📂 src

│   ├── 📂 components  # Componentes reutilizáveis

│   ├── 📂 pages       # Páginas principais

│   ├── 📂 services    # Comunicação com a API

│   ├── 📂 styles      # Estilos globais

│   ├── 📜 main.tsx    # Arquivo principal do React

│   ├── 📜 App.tsx     # Configuração das rotas

│   ├── 📜 vite-env.d.ts  # Tipagem do Vite

├── 📜 package.json    # Dependências e scripts

├── 📜 tsconfig.json   # Configuração do TypeScript

├── 📜 vite.config.ts  # Configuração do Vite

└── 📜 README.md       # Este arquivo
...


🔗 Backend

Este projecto comunica-se com o backend disponível em:
🔗 http://localhost:3000

Certifique-se de que a API esteja rodando antes de iniciar o front-end.

🛠️ Personalizações

Caso precise alterar a porta do servidor de desenvolvimento, edite o arquivo vite.config.ts:

export default defineConfig({
  server: {
    port: 3001, // Altere a porta conforme necessário
  },
});


📌 Feito com 💙 por Joel António

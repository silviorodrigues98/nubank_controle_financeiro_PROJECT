## Sobre o Projeto

Este projeto foi criado para uso pessoal, com o objetivo de organizar os gastos da fatura do Nubank de forma mais eficiente.

### Como Usar

1. Acesse o site do Nubank: https://app.nubank.com.br
2. Exporte o CSV da sua fatura
3. Carregue o arquivo CSV no nosso aplicativo: https://nubank-controle-financeiro-project.vercel.app/

### Planos Futuros

- Implementar suporte para carregamento de múltiplos arquivos CSV simultaneamente
- Explorar a possibilidade de integração com a API do Nubank para buscar dados de forma dinâmica, eliminando a necessidade de importação manual do CSV

## Instalação

1. Clone o repositório:
    ```sh
   https://github.com/silviorodrigues98/nubank_controle_financeiro_PROJECT
    ```

2. Instale as dependências:
    ```sh
    cd controle-financeiro
    yarn install
    ```

3. Inicie o servidor de desenvolvimento:
    ```sh
    yarn dev
    ```

## Scripts

- `dev` – Inicia o servidor de desenvolvimento
- `build` – Cria a versão de produção do aplicativo
- `preview` – Visualiza localmente a versão de produção
- `typecheck` – Verifica os tipos TypeScript
- `lint` – Executa o ESLint
- `prettier:check` – Verifica os arquivos com o Prettier
- `vitest` – Executa os testes Vitest
- `vitest:watch` – Inicia o Vitest no modo de observação
- `test` – Executa os scripts `vitest`, `prettier:check`, `lint` e `typecheck`
- `storybook` – Inicia o servidor de desenvolvimento do Storybook
- `storybook:build` – Cria o pacote de produção do Storybook
- `prettier:write` – Formata todos os arquivos com o Prettier

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Mantine](https://mantine.dev/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [PostCSS](https://postcss.org/)

## Licença

Este projeto está licenciado sob a Licença MIT.
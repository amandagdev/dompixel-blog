# [Dom Pixel Blog](https://dompixel-blog-nine.vercel.app/)

DompixelBlog é uma aplicação de blog construída utilizando Next.js. Os usuários podem visualizar, ler e criar novas postagens. O projeto é estilizado com a biblioteca de componentes Mantine, as postagens e os usuários são obtidas de uma API simulada [MockApi](https://mockapi.io/).

## 🚀 Funcionalidades

- **Página inicial:** Lista todas as postagens de blog com título, data e imagem de capa.
- **Página de detalhes:** Exibe o conteúdo completo da postagem ao clicar em um item na página inicial.
- **Criação de postagens:** Permite que os usuários criem novas postagens com título, texto e imagem de capa.
- **Responsividade:** Layout totalmente adaptável para diferentes tamanhos de tela.
- **Controle de estado local:** Gerencia as postagens e formulários diretamente no estado do Next.js.
- **bcryptjs** Encripitar a senha do usuário na hora do cadastro
- **eslint** Garantia de que o código segue as melhores práticas e está bem formatado.
- **husky** Garantia de que todas as verificações de qualidade do código sejam executadas antes dos commits.
- **GitHub action** Integração contínua para execução automática de testes e análise estática de código.

### Bônus 🎁

- **Autenticação básica:** Apenas usuários autenticados podem criar postagens.
- **Pesquisa:** Sistema de busca para procurar postagens por título ou conteúdo.

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Mantine](https://mantine.dev/) (componentização e estilização)
- Fetch/Axios (consumo de API)

## 📦 Como Executar o Projeto

### Passos para executar o projeto:

[Dom Pixel Blog](https://dompixel-blog-nine.vercel.app/)

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/amandagdev/dompixel-blog.git

   ```

2. **Navegar para o repositório:**

   ```bash
   cd dompixel-blog

   ```

3. **Criar .env com seu localhost:**

   ```.env
      NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. **Instalar dependencias:**
   ```bash
   npm install
   ```
5. **Rodar o projeto:**
   ```bash
   npm run dev
   ```

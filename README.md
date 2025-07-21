# AppNode - Backend

Este é um projeto backend desenvolvido em **Node.js** com **Express** e **Prisma ORM**, utilizando **Joi** para validação de dados e **Jest** com **Supertest** para testes automatizados.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express** - Framework web
- **Prisma** - ORM para banco de dados relacional
- **Joi** - Validação de dados
- **CORS** - Middleware para controle de acesso
- **Jest** - Framework de testes
- **Supertest** - Testes de requisições HTTP

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/appnode.git
cd appnode




  Instale as dependências: npm install
Configure o Prisma: npx prisma init
Configure seu banco de dados no arquivo .env: DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
Rode as migrações do banco: npx prisma migrate dev --name init
Executando o Servidor: node --watch server.js
Executando os Testes: npm test

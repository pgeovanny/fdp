# Gabarite a Lei - Aplicação Fullstack

## Setup

1. Clone o repositório
2. Copie `.env.local.example` para `.env.local` e preencha as variáveis:
   ```
   DATABASE_URL=postgresql://user:pass@host:port/dbname
   NEXTAUTH_SECRET=uma-chave-secreta
   OPENAI_API_KEY=sua-chave-openai
   ```
3. Instale dependências:
   ```
   npm install
   ```
4. Gere o client do Prisma e migre o banco:
   ```
   npx prisma generate
   npx prisma migrate dev
   ```
5. Execute em modo de desenvolvimento:
   ```
   npm run dev
   ```
6. Acesse `http://localhost:3000`

## Deploy

- Configure as variáveis de ambiente no seu serviço (Vercel, Render, Railway).
- Push no GitHub para deploy automático.
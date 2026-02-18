# Barber Reservation API

API de agendamento para barbearias desenvolvida com **NestJS**, **Prisma** e **PostgreSQL**.  
O projeto implementa autenticação com **JWT**, organização por módulos e segue boas práticas de arquitetura para aplicações backend modernas.

Este repositório representa um projeto em evolução, construído feature por feature.

---

## Tecnologias Utilizadas

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Token)
- Passport
- Bcrypt

---

## Visão Geral da Arquitetura

A aplicação é organizada em módulos, cada um com responsabilidades bem definidas:

- **DatabaseModule**
  - Centraliza a conexão com o banco de dados
  - Expõe o `PrismaService` para toda a aplicação

- **AuthModule**
  - Responsável por autenticação
  - Implementa signup, signin e proteção de rotas
  - Utiliza JWT + Passport Strategy

Outros módulos de negócio (Appointments, Waitlist, etc.) serão adicionados posteriormente.

---

## Banco de Dados

- PostgreSQL como banco relacional
- Prisma como ORM
- Migrations versionadas
- Prisma Client gerado automaticamente

### Models principais

- User
- Barbershop
- Service
- BarberService
- Appointment
- Waitlist

---

## Autenticação (AuthModule)

A autenticação foi implementada seguindo o padrão profissional do NestJS utilizando **JWT + Passport**.

### Funcionalidades

- Criação de usuário (Signup)
- Login de usuário (Signin)
- Senhas criptografadas com bcrypt
- Geração de JWT no login
- Validação de token via JwtStrategy
- Proteção de rotas com JwtAuthGuard

---

## Fluxo de Autenticação

1. O usuário cria uma conta (`signup`)
2. O usuário realiza login (`signin`)
3. O sistema retorna um `access_token` (JWT)
4. O token deve ser enviado no header `Authorization`
5. Rotas protegidas validam o token automaticamente
6. O usuário autenticado fica disponível em `req.user`

---

## Endpoints de Autenticação

### Signup – Criar conta


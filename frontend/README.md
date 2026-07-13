# Stewie Griffin AI

A character-based AI chatbot inspired by Stewie Griffin from *Family Guy*.

Stewie Griffin AI is an experimental conversational AI project focused on creating an entertaining and personality-driven chat experience. Instead of being a general-purpose AI assistant, the goal of this project is to simulate conversations with a fictional character using modern AI technologies.

The project allows users to create accounts, have conversations with the AI, and store their chat history securely.

---

## Features

* 🤖 AI-powered conversations
* 🎭 Character-focused AI personality
* 🔐 User authentication
* 💬 Persistent chat history
* 🗄️ PostgreSQL database integration
* ⚡ Streaming AI responses
* 🌙 Dark/light theme support
* 📱 Responsive user interface

---

## Tech Stack

### Frontend

* [Next.js](https://nextjs.org/)
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Redux Toolkit

### Backend

* Next.js API Routes
* Prisma ORM
* PostgreSQL

### Authentication

* Better Auth

### AI

* Vercel AI SDK
* OpenRouter API

---

# Getting Started

Follow these instructions to run the project locally.

## Prerequisites

Before installing the project, make sure you have:

* Node.js 20 or newer
* npm
* PostgreSQL database

You can check your Node.js version with:

```bash
node -v
```

---

# Installation

## 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Replace `YOUR_REPOSITORY_URL` with the actual GitHub repository URL.

Example:

```bash
git clone https://github.com/username/stewie-griffin-ai.git
```

---

## 2. Navigate into the project

```bash
cd stewie-griffin-ai
```

---

## 3. Install dependencies

```bash
npm install
```

---

# Environment Setup

The project requires environment variables for database access, authentication, and AI services.

Create a new file called:

```
.env
```

in the project root.

You can use `.env.example` as a template.

Your environment file should contain:

```env
# PostgreSQL Database
DATABASE_URL=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# OpenRouter AI API
OPENROUTER_API_KEY=
```

---

## Environment Variables Explanation

### DATABASE_URL

Your PostgreSQL connection string.

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

---

### BETTER_AUTH_SECRET

A random secret string used by Better Auth to secure authentication sessions.

You can generate one using:

```bash
openssl rand -base64 32
```

---

### BETTER_AUTH_URL

The URL where your application runs.

For local development:

```env
BETTER_AUTH_URL=http://localhost:3000
```

---

### OPENROUTER_API_KEY

An API key from OpenRouter used to communicate with AI models.

You can get one from:

https://openrouter.ai/

---

# Database Setup

After configuring your environment variables, generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio to view your database:

```bash
npx prisma studio
```

---

# Running the Application

## Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## Production Build

To create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

# Project Structure

```
app/
 ├── api/
 │    └── chat/
 │         └── route.ts
 │
 ├── auth/
 │
 └── page.tsx


components/
 ├── ChatBox/
 ├── ChatMessages/
 ├── Navbar/
 └── UI components


lib/
 ├── auth.ts
 ├── prisma.ts
 ├── chat.ts
 └── AI configuration


prisma/
 └── schema.prisma
```

---

# Database Models

The project uses Prisma with PostgreSQL.

Main models:

## User

Stores authentication information.

Contains:

* ID
* Email
* Username
* Authentication data

## Chat

Stores user conversations.

Contains:

* User relationship
* Messages
* Creation/update timestamps

---

# Contributing

Contributions, suggestions, and improvements are welcome.

If you want to contribute:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

# Disclaimer

This project is a fan-made experimental AI project created for educational and development purposes.

It is not affiliated with or endorsed by the creators of *Family Guy* or the official Stewie Griffin character.

---

# License

This project is licensed under the MIT License.

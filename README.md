````markdown
# AI Instructor - LMS with Next.js, Supabase & AI Voice Agents

Build a next-generation Learning Management System (LMS) designed to revolutionize the way users engage with education through real-time AI voice tutors, intelligent session tracking, and a seamless user experience — all powered by cutting-edge tools like Next.js, Supabase, Clerk, and Vapi.

**AI Instructor** is an interactive learning platform where users can create and engage with AI-powered tutors across a wide range of topics. It delivers responsive, real-time educational sessions using conversational voice agents, combined with modern UI/UX principles and full cross-device compatibility. From creating a tutor to revisiting previous sessions, the platform is engineered to scale and adapt to user needs with zero friction.

Whether you're a developer looking to build a project-based portfolio or an educator aiming to integrate AI tutoring, **AI Instructor** offers a robust foundation to build, learn, and iterate.

---

## 📋 Table of Contents

- 🤖 Introduction  
- ⚙️ Tech Stack  
- 🔋 Features  
- 🤸 Quick Start  
- 🔐 Environment Variables  
- 🚀 Extras  

---

## 🤖 Introduction

A scalable, AI-powered LMS (Learning Management System) with:

- Real-time backend (Supabase)
- Conversational AI agents (Vapi)

---

## ⚙️ Tech Stack

| Technology    | Purpose |
|---------------|---------|
| **Next.js**   | Framework for SSR/SSG/ISR and routing |
| **Supabase**  | Backend (PostgreSQL DB, Auth, API, Storage) |
| **Clerk**     | Authentication & user management |
| **Tailwind CSS** | Styling and responsive design |
| **shadcn/ui** | Prebuilt UI components |
| **Zod**       | Type-safe validation |
| **Vapi**      | Voice AI for real-time tutoring |
| **TypeScript** | Static typing and developer tooling |

---

## 🔋 Features

- 🎤 **AI Voice Agents** – Vapi-powered tutors with real-time voice interaction
- 🔐 **Authentication** – Secure sign-up/sign-in with Clerk (OAuth supported)
- 🔁 **Session History** – View past tutoring sessions
- 🔍 **Search & Filter** – Quickly find relevant tutors by subject/topic
- 🧠 **Create a Tutor** – Add new AI tutors with configurable subjects & tones
- 📱 **Responsive Design** – Mobile-first UI with shadcn + Tailwind
- 🧩 **Reusable Components** – Modular architecture for scalability
- 💬 **Real-time Database** – Supabase for live session sync
- 🛡️ **Validation** – Zod ensures backend & frontend data integrity

---

## 🤸 Quick Start

### Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/)

### Clone & Install

```bash
git clone https://github.com/connect-abdullah/Ai-Instructor.git
cd TO-MAIN-FOLDER
npm install
````

### Start Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔐 Environment Variables

Create a `.env` file in the root and add:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

```

> ⚠️ Replace the values with your actual project credentials.

---


## 🚀 Extras

### Deployment Options

* [Vercel](https://vercel.com/) – Recommended for Next.js apps
* [Supabase Hosting](https://supabase.com/) – For backend and storage


---

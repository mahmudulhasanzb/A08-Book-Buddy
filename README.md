# 📚 Book Buddy — Online Book Borrowing Platform

A seamless and modern web application that digitizes the traditional library experience. Users can explore a vast collection of books, filter by categories, and borrow titles digitally.

## 🌐 Live URL

> _Add your Vercel / Render live URL here_

## 🎯 Purpose

Book Buddy lets readers discover, search, and borrow books online. It prioritizes security and performance using BetterAuth for authentication, Next.js for server-side rendering, and MongoDB as the database.

## ✨ Key Features

- 🔐 **Authentication** — Email/password login & Google OAuth via BetterAuth
- 📖 **All Books** — Browse all available books with search by title/author
- 🗂️ **Category Filter** — Sidebar to filter books by Story, Tech, or Science
- 📄 **Book Details** — Full details page with available quantity and borrow action
- 👤 **My Profile** — View and update your profile (name & photo)
- 🔒 **Private Routes** — Book details and profile protected via middleware
- 📢 **Marquee** — Scrolling new arrivals ticker on homepage
- 🌟 **Featured Books** — Top 4 highlighted books on homepage

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router |
| **Tailwind CSS v4** | Utility-first styling |
| **DaisyUI v5** | Component library |
| **BetterAuth** | Authentication (email + Google OAuth) |
| **MongoDB** | Database via `@better-auth/mongo-adapter` |

## 📦 NPM Packages Used

| Package | Usage |
|---|---|
| `better-auth` | Authentication engine |
| `@better-auth/mongo-adapter` | MongoDB adapter for BetterAuth |
| `mongodb` | Database driver |
| `react-fast-marquee` | Scrolling marquee on homepage |
| `react-toastify` | Toast notifications |
| `react-icons` | Icon set |
| `react-spinners` | Loading spinners |
| `animate.css` | CSS animations |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

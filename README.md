# OutLink – Mini LinkedIn-like Community Platform

OutLink is a modern platform where users can share updates, connect, and build a professional presence. Inspired by LinkedIn, it’s lightweight, streamlined, and designed for today’s developers and job-seekers.

## 🚀 Features

- **User Authentication:** Secure sign-up/login via Clerk.js (email \& password)
- **User Profiles:** Name, email, and bio fields
- **Public Feed:** Post, view, and read text-only public posts with author \& timestamp
- **Profile Page:** View user profiles and their posts
- **Responsive UI:** Clean, mobile-first layout

## 🛠 Tech Stack

- **Frontend \& Backend:** Next.js 15 (App Router, Server Actions)
- **Authentication:** Clerk.js
- **Database:** MongoDB
- **API:** Next.js `/api` routes
- **Styling:** Tailwind CSS + shadcn/ui

## 🌐 Live Demo

[Live App URL Here](https://out-link.vercel.app/)

## 📦 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (URI - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) recommended)
- Clerk project \& API keys ([Clerk Dashboard](https://dashboard.clerk.com/))

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/yourusername/outlink.git
cd outlink
```

2. **Install dependencies:**

```sh
npm install
```

3. **Set environment variables:**
   Create a `.env.local` file:

```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

4. **Run the app locally:**

```sh
npm run dev
```

5. **Open:**
   [http://localhost:3000](http://localhost:3000)

## 🙋 Demo Login

Register with any email and password or use Clerk-supported social login (if enabled).
_Provide demo/test credentials here if set up._

## 📜 Submission

- [GitHub Repo Link Here](https://github.com/goutam-khowal/OutLink)
- [Live Demo Link Here](https://out-link.vercel.app/)

## ✨ Features

- [ ] Image upload to posts
- [ ] Like \& comment functionality
- [ ] add/delete posts
- [ ] User profile

## ✨ Features To be Added (Future - Continous Dev)

- [ ] Image upload to profile
- [ ] Edit posts/comments
- [ ] Add images/stickers to comments
- [ ] Rich text for text inputs in posts and comments

## 📚 License

[MIT](LICENSE)

**Built with ❤️ using Next.js, Clerk, and MongoDB**

# 📝 Task Management App (View Only)

A simple **Task Management Application** built using **React**, **Redux Toolkit**, and **Bootstrap 5**.  
This project displays tasks grouped by date, fetched from a centralized Redux store.  
It demonstrates how to use **Redux Toolkit** for state management in a clean and scalable way — without any reducers or API calls.

---

## 🚀 Live Demo

🔗 **Live URL:** [https://your-live-demo-link-here.com](https://your-live-demo-link-here.com)

_(Replace with your deployed app URL — for example, from Netlify or Vercel)_

---

## 🧰 Tech Stack

- ⚛️ **React JS** – Frontend framework
- 🧠 **Redux Toolkit** – State management
- 🎨 **Bootstrap 5** – Styling and layout
- 💾 **JavaScript (ES6+)** – Logic and components

---

## 📂 Folder Structure

src/
│
├── app/
│ └── store.js
│
├── features/tasks
│ └── taskSlice.js
│ └── Task.js
│
├── App.js
└── index.js

---

## 🧠 How It Works

1. **Redux Store** is configured with a single slice named `taskSlice`.
2. The slice holds an **initialState** containing pre-defined task data.
3. `useSelector()` is used in the `Task` component to fetch data from the store.
4. Bootstrap classes are used to style cards, badges, and lists.
5. The app simply **displays data** — no reducers or dynamic actions.

---

## ⚙️ Installation & Setup

Follow these steps to clone and run the project locally 👇

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sushants2711/task-management-app.git

cd task-management-app

cd frontend

npm install

npm run dev

```

---

## Contact

For bugs or feature request, please reach out to sushants2711@gmail.com

[Linkedin](https://www.linkedin.com/in/sushant-kumar-singh-414782230)

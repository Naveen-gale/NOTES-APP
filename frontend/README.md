# 📝 Notes App

A full-stack Notes Application with authentication and note management features.

---

## 🔐 Authentication Features

- User Registration (Signup)
- User Login
- JWT Token based Authentication
- Store token in LocalStorage
- Auto login on page refresh using Context
- Logout functionality
- Show username in Navbar after login
- Hide Login / Signup after login

---

## 🧠 State Management

- React Context API for global user state
- `AuthContext` stores:
  - user information
  - setUser function
- User persists even after refresh using LocalStorage

---

## 🗂️ Notes Features

- Create Note using Modal (Popup)
- Add Title & Content
- Save Note
- Notes display on Home screen
- Notes stored in Home state
- Real-time UI update after adding note
- Cancel note creation
- Close modal anytime

---

## 🪟 Modal (Model) Features

- Dark background overlay
- Center popup
- Close (❌) button
- Title input
- Content textarea
- Save & Cancel buttons
- Smooth UX like real apps

---

## 📌 Navbar Features

- App Name
- Search Bar (UI ready)
- Shows:
  - Login + Signup if not logged in
  - Username + Logout if logged in
- Logout clears Context + LocalStorage

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS v4
- Axios
- Context API

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt for password hashing

---


---

## 🚀 Future Features (Optional)

- Edit Note
- Delete Note
- Search Notes
- Save Notes to Database
- User-wise Notes Storage
- Dark Mode
- Note Categories
- Note Pinning

---

## 💡 Key Concepts Used

- React Hooks (`useState`, `useEffect`, `useContext`)
- Lifting State Up
- Context API
- Conditional Rendering
- JWT Auth Flow
- Tailwind UI
- Modal Design
- Component Reusability

---

This project follows **real production-level app logic** and is perfect for:
- Portfolio
- Resume
- MERN Stack learning
- Placement projects



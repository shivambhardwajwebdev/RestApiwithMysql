# 🎨 Frontend - Teacher Management System

## 📌 Overview

This is the **React frontend** for the Teacher Management System.
It connects with a Node.js backend and allows:

* User Login (JWT based authentication)
* Create Teacher (User + Teacher data in one form)
* View Teachers list
* View individual Teacher details

---

## 🚀 Tech Stack

* React (Vite)
* Axios (API calls)
* React Router DOM
* Tailwind CSS

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Start Development Server

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

## 🔗 Backend Requirement

Make sure backend is running on:

```bash
http://localhost:3000
```

---

## 🔐 Login Credentials (Dummy User)

Use the following credentials to login:

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

> ⚠️ Note: This user must already exist in the database with a hashed password.

---

## 🔑 Authentication Flow

1. User logs in
2. Backend returns JWT token
3. Token is stored in `localStorage`
4. Token is automatically sent in API requests
5. Protected routes are accessed using this token

---

## 📡 API Endpoints Used

### 🔹 Login

```bash
POST /api/auth/login
```

---

### 🔹 Create Teacher

```bash
POST /api/teachers/create
```

Header:

```bash
Authorization: Bearer <token>
```

---

### 🔹 Get All Teachers

```bash
GET /api/teachers
```

---

### 🔹 Get Single Teacher

```bash
GET /api/teachers/:id
```

---

## 🧭 Pages

| Route           | Description     |
| --------------- | --------------- |
| `/`             | Login Page      |
| `/dashboard`    | Create Teacher  |
| `/teachers`     | Teachers List   |
| `/teachers/:id` | Teacher Details |

---

## ⚠️ Important Notes

* Ensure backend CORS is enabled
* Token must be present for protected routes
* `.env` is not required in frontend (API URL is hardcoded or configured)

---

## 🔥 Features

* Clean UI with Tailwind CSS
* Form validation (basic)
* Secure API communication using JWT
* Dynamic routing for teacher details

---

## 🚀 Future Improvements

* Toast notifications instead of alerts
* Protected routes (redirect if not logged in)
* Edit/Delete Teacher
* Search & Filter

---

## 👨‍💻 Author

**Shivam Bhardwaj**
Full-Stack Developer

---

## ⭐ Final Note

This frontend demonstrates:

* Clean UI design
* Proper API integration
* Authentication handling
* Scalable structure

---

👉 Ready for production-level UI enhancements 🚀

## 📊 View Teachers Data (Frontend Guide)

To view all teachers in the frontend:

### 🔹 Step 1: Login

Go to:

```
http://localhost:5173
```

Use credentials:

```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

---

### 🔹 Step 2: Open Teachers Page

After login, navigate to:

```
http://localhost:5173/teachers
```

---

### 🔹 Step 3: What Happens

* Frontend calls:

```
GET /api/teachers
```

* JWT token is automatically sent in headers
* Backend verifies token
* Data is fetched and displayed in table

---

### 🔹 Expected Output

You will see a table like:

| Name         | Email                                   | University       |
| ------------ | --------------------------------------- | ---------------- |
| Ritik Sharma | [test@gmail.com](mailto:test@gmail.com) | Delhi University |

---

### ⚠️ Common Issues

* If you see **"Unauthorized"** → token missing or expired
* If table is empty → no data in database
* If error occurs → check backend is running

---

### 💡 Tip

You can add a button in dashboard to navigate:

```js
navigate("/teachers")
```

# 🚀 Fullstack Authentication & Teacher Management System

## 📌 Project Overview

This project is a fullstack web application built using **Node.js, Express, MySQL, and React**. It implements a **token-based authentication system (JWT)** and manages a **1-1 relationship between users and teachers**.

### 🔑 Core Features

* User Registration & Login
* Secure Password Hashing (bcrypt)
* JWT-based Authentication
* Protected Routes using Middleware
* Relational Database (MySQL)
* Single API to insert data into both tables
* Fetch combined data using JOIN
* Clean and scalable folder structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MySQL
* **Authentication:** JWT + bcrypt
* **Frontend:** React (optional integration)

---

## 📁 Project Structure

```
project/
│── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── app.js
│── server.js
│── .env
│── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env` file in root:

```
DB_HOST=localhost
DB_USER=root
PASSWORD=yourpassword
DB_NAME=yourdbname
JWT_SECRET=secretkey
```

---

### 4️⃣ Setup Database

Run this SQL:

```sql
CREATE TABLE auth_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL UNIQUE,
    university_name VARCHAR(150) NOT NULL,
    gender ENUM('male','female','other') NOT NULL,
    year_joined YEAR NOT NULL,
    FOREIGN KEY (user_id) REFERENCES auth_user(id)
        ON DELETE CASCADE
);
```

---

### 5️⃣ Run Server

```bash
npm start
```

Server runs on:

```
http://localhost:3000
```

---

## 🔐 API Endpoints

---

### 🟢 1. Register User

**POST** `/api/auth/register`

#### Request Body:

```json
{
  "email": "test@gmail.com",
  "first_name": "Ritik",
  "last_name": "Sharma",
  "password": "123456"
}
```

#### Response:

```json
{
  "message": "User registered successfully"
}
```

---

### 🔵 2. Login User

**POST** `/api/auth/login`

#### Request Body:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

#### Response:

```json
{
  "token": "your_jwt_token_here"
}
```

---

### 🟡 3. Create Teacher (Protected)

**POST** `/api/teachers/create`

#### Headers:

```
Authorization: Bearer <your_token>
```

#### Request Body:

```json
{
  "email": "teacher@gmail.com",
  "first_name": "John",
  "last_name": "Doe",
  "password": "123456",
  "university_name": "Delhi University",
  "gender": "male",
  "year_joined": 2022
}
```

#### Response:

```json
{
  "message": "Teacher created successfully"
}
```

---

### 🟣 4. Get All Teachers (Protected)

**GET** `/api/teachers`

#### Headers:

```
Authorization: Bearer <your_token>
```

#### Response:

```json
[
  {
    "id": 1,
    "email": "teacher@gmail.com",
    "first_name": "John",
    "last_name": "Doe",
    "university_name": "Delhi University",
    "gender": "male",
    "year_joined": 2022
  }
]
```

---

## 🔄 Authentication Flow

1. User registers → Data stored in `auth_user`
2. User logs in → JWT token generated
3. Token stored in frontend (localStorage)
4. Token sent in headers for protected routes
5. Middleware verifies token before access

---

## 🔗 Database Relationship

* `auth_user` → Stores login data
* `teachers` → Stores additional info
* Linked via `user_id`
* Enforced using **FOREIGN KEY + UNIQUE constraint (1-1 relationship)**

---

## 🧪 Testing (Postman)

### Steps:

1. Register user
2. Login → copy token
3. Add token in header
4. Call protected APIs

---

## ⚠️ Important Notes

* Passwords are hashed using bcrypt
* JWT is used for authentication
* `.env` file is not uploaded for security
* Database file should be included separately

---

## 🔥 Future Improvements

* Input validation (Joi / express-validator)
* Refresh tokens
* Role-based authentication
* Pagination for data
* Better error handling

---

## 👨‍💻 Author

**Shivam Bhardwaj**
Full-Stack Developer

---

## ⭐ Final Note

This project demonstrates:

* Clean backend architecture
* Secure authentication
* Relational database handling
* API design best practices

---

👉 Ready for production-level scaling 🚀

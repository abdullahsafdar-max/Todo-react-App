# MERN Todo App with JWT & Google Authentication

A full-stack Todo Application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).
The application allows users to register an account, log in using either Email & Password or Google Sign-In, and securely manage their own personal tasks using JSON Web Tokens (JWT). Every user can only access, create, update, and delete their own tasks.

---

## Screenshots

### Login Page

![Login Page](screenshots/login.png)

### Signup Page

![Signup Page](screenshots/signup.png)

### Todo Dashboard

![Todo Dashboard](screenshots/todo.png)

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Authentication Flow](#authentication-flow)
- [REST API Endpoints](#rest-api-endpoints)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Application Architecture](#application-architecture)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Features

- User Signup
- User Login (Email & Password)
- Google Sign-In
- JWT Authentication
- Protected Routes
- User-specific Tasks
- Add New Tasks
- View Personal Tasks
- Update Existing Tasks
- Delete Tasks
- Mark Tasks as Completed/Incomplete
- Password Encryption using bcryptjs
- Persistent Data Storage using MongoDB
- RESTful API Integration
- Responsive User Interface

---

## Technologies Used

### Frontend

- React.js
- JavaScript (ES6)
- Axios
- CSS3
- @react-oauth/google

### Backend

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcryptjs
- Google OAuth
- google-auth-library

### Database

- MongoDB
- Mongoose

### Development Tools

- Git
- GitHub
- Postman
- MongoDB Compass

---

## Project Structure

```text
todo-react-app/
│
├── public/
│
├── screenshots/
│   ├── login.png
│   ├── signup.png
│   └── todo.png
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── TodoInput.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── taskService.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── user.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── package.json
└── README.md
```

---

## Authentication Flow

### Email & Password

1. User creates an account.
2. Password is hashed using bcryptjs.
3. User logs in.
4. Server verifies credentials.
5. JWT token is generated.
6. JWT is stored in Local Storage.
7. Protected requests include the JWT.
8. Backend verifies the JWT.
9. User accesses only their own tasks.

### Google Sign-In

1. User clicks **Continue with Google**.
2. Google authenticates the user.
3. Google sends an ID Token.
4. Backend verifies the Google ID Token.
5. If the user does not exist, a new account is created automatically.
6. Backend generates its own JWT.
7. JWT is stored in Local Storage.
8. User accesses only their own tasks.

---

## REST API Endpoints

### Authentication APIs

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | `/api/auth/signup` | Register a new user    |
| POST   | `/api/auth/login`  | Login an existing user |
| POST   | `/api/auth/google`  | Login with google |

### Task APIs

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| GET    | `/api/tasks`     | Retrieve logged-in user's tasks |
| POST   | `/api/tasks`     | Create a new task               |
| PUT    | `/api/tasks/:id` | Update a task                   |
| DELETE | `/api/tasks/:id` | Delete a task                   |

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/abdullahsafdar-max/Todo-react-App.git
```

### 2. Navigate to the Project

```bash
cd Todo-react-App
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend Dependencies

```bash
cd server
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 6. Start the Backend

```bash
cd server
npm run dev
```

### 7. Start the Frontend

Open another terminal.

```bash
npm start
```

---

## How It Works

1. Users create an account using the Signup page.
2. Users log in using their credentials.
3. The backend generates a JWT after successful authentication.
4. The frontend stores the JWT in Local Storage.
5. Every request includes the JWT in the Authorization header.
6. The backend validates the JWT before allowing access.
7. Authenticated users can manage only their own tasks.

---

## Application Architecture

```text
React Frontend
       │
     Axios
       │
Authorization Header (JWT)
       │
Express.js API
       │
Authentication Middleware
       │
Controllers
       │
Mongoose
       │
MongoDB
```

---

## Future Improvements

- Forgot Password
- Email Verification
- Task Categories
- Task Priority
- Due Dates
- Search Tasks
- Filter Tasks
- Dark Mode
- Deploy Backend and Frontend
- Edit User Profile
- Change Password
- Remember Me
- Task Sharing
- Notifications
- Mobile Responsive Improvements

---

## Author

**Abdullah Safdar**

🎓 BS Business Analytics Student

🌐 GitHub:
https://github.com/abdullahsafdar-max

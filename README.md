# MERN Todo App

A full-stack Todo Application built using the MERN Stack (MongoDB, Express.js, React, and Node.js). The application allows users to create, view, update, and delete tasks, with all data stored permanently in a MongoDB database.



## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [REST API Endpoints](#rest-api-endpoints)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Application Architecture](#application-architecture)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Features

- Add new tasks
- View all tasks
- Mark tasks as completed/incomplete
- Delete tasks
- Persistent data storage using MongoDB
- RESTful API integration
- Responsive and clean user interface



## Technologies Used

### Frontend
- React
- JavaScript
- Axios
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Development Tools
- Git
- GitHub
- Postman
- MongoDB Compass


## Project Structure

```
todo-react-app/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── TodoInput.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   │
│   ├── services/
│   │   └── taskService.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── package.json
└── README.md
```



## REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |



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
MONGO_URI=mongodb://127.0.0.1:27017/todoDB
```



### 6. Start the Backend Server

```bash
cd server
npm run dev
```

The backend will run on:

```
http://localhost:5000
```



### 7. Start the React Application

Open another terminal.

```bash
npm start
```

The frontend will run on:

```
http://localhost:3000
```


## How It Works

1. The user enters a task in the React application.
2. Axios sends an HTTP request to the Express backend.
3. Express processes the request.
4. Mongoose communicates with MongoDB.
5. MongoDB stores or retrieves the data.
6. The backend sends a response to React.
7. React updates the user interface automatically.


## Application Architecture

```
React Frontend
       │
     Axios
       │
HTTP Requests
       │
Express.js API
       │
 Controllers
       │
 Mongoose ODM
       │
MongoDB Database
```


## Future Improvements

- User Authentication (JWT)
- User Registration & Login
- Search Tasks
- Filter Tasks
- Edit Task Text
- Task Categories
- Task Priority
- Due Dates
- Dark Mode
- Deploy Frontend and Backend

---

## Author

**Abdullah Safdar**

🎓BS Business Analytics Student

🌐GitHub:
https://github.com/abdullahsafdar-max


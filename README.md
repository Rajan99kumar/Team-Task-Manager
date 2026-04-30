
📌 Team Task Manager (Full Stack)

A full-stack role-based task management system where users can create projects, manage teams, assign tasks, and track progress with secure authentication and real-time status updates.

🚀 Features
🔐 Authentication
Signup / Login using JWT
Secure password hashing (bcrypt)
Protected frontend & backend routes
Logout functionality
👥 Project Management
Create projects
View all projects
Project ownership tracking
Team member assignment support
📋 Task Management
Create tasks
Assign tasks to users
Update task status
pending
in-progress
completed
📊 Dashboard
View all projects
View all tasks
Task status tracking
Dynamic project count
Responsive dashboard UI
🛠️ Tech Stack
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
bcryptjs
Frontend
React.js (Vite)
Axios
React Router DOM
Tailwind CSS
📁 Project Structure
team-task-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── taskRoutes.js
│   │   └── testRoutes.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── index.html
│
├── .gitignore
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/Rajan99Kumar/team-task-manager.git
cd team-task-manager
2️⃣ Backend Setup
cd backend

Install dependencies:

npm install

Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Run backend:

npm run dev

Server runs on:

http://localhost:5000
3️⃣ Frontend Setup
cd frontend

Install dependencies:

npm install

Create .env file:

VITE_API_URL=http://localhost:5000/api

Run frontend:

npm run dev

App runs on:

http://localhost:5173
🔗 API Endpoints
🔐 Auth
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
📁 Projects
Method	Endpoint	Description
POST	/api/projects	Create project
GET	/api/projects	Get all projects
📋 Tasks
Method	Endpoint	Description
POST	/api/tasks	Create task
GET	/api/tasks	Get all tasks
PUT	/api/tasks/:id	Update task status
🔐 Authentication Flow
User signs up / logs in
Backend returns JWT token
Token stored in localStorage
Protected routes validate token
All API requests use token in headers

Example:

Authorization: Bearer token
📊 Dashboard Features
View all projects
Create projects
View all tasks
Create tasks
Update task status
Dynamic dashboard cards
🧪 Testing (Thunder Client / Postman)
Signup
POST /api/auth/register
{
  "name": "Rajan",
  "email": "rajan@gmail.com",
  "password": "123456"
}
Login
POST /api/auth/login
{
  "email": "rajan@gmail.com",
  "password": "123456"
}
🚀 Deployment
Backend (Railway / Render)
Add environment variables
Deploy Node.js backend
Frontend (Vercel / Netlify)
npm run build
📌 Environment Variables
Backend
MONGO_URI=
JWT_SECRET=
PORT=
Frontend
VITE_API_URL=
🎯 Future Improvements
Drag & Drop Task Board (Trello style)
Team Member Roles
Notifications System
File Attachments
Real-time Updates (Socket.io)
Analytics Dashboard
Dark Mode
Task Due Dates & Reminders
👨‍💻 Author
Rajan Kumar

GitHub: https://github.com/Rajan99Kumar
Email : rajan993167@gmail.com

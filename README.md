🚀 Team Task Manager

A modern full-stack Team Task Management platform built with the MERN stack. This application helps teams manage projects, assign tasks, track progress, and securely collaborate through authentication-protected workflows.

Designed with a clean SaaS-style dashboard UI and secure backend architecture, this project demonstrates real-world full-stack development concepts including JWT authentication, protected routes, REST APIs, MongoDB relationships, and responsive frontend design.

✨ Features
🔐 Authentication & Security
User Signup & Login
JWT-based Authentication
Protected Backend APIs
Protected Frontend Routes
Secure Password Hashing using bcrypt
Logout Functionality
📁 Project Management
Create Projects
View All Projects
Project Ownership Tracking
Team Member Assignment Support
✅ Task Management
Create Tasks
Assign Tasks to Users
Update Task Status
Task Status Tracking
Pending
In Progress
Completed
🎨 Frontend Features
Responsive Dashboard UI
SaaS-style Design
Tailwind CSS Styling
Dynamic Project Rendering
API Integration with Axios
⚙️ Backend Features
RESTful API Architecture
Express.js Middleware
MongoDB Integration
Mongoose Relationships
Modular Backend Structure
🛠 Tech Stack
Frontend
React.js
Vite
Tailwind CSS
Axios
React Router DOM
Backend
Node.js
Express.js
JWT Authentication
bcryptjs
Middleware Authentication
Database
MongoDB Atlas
Mongoose ODM
📂 Project Structure
project/
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
│   ├── middleware/
│   │   └── authMiddleware.js
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
│   ├── .env
│   ├── package.json
│   └── server.js
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
│   └── package.json
│
├── .gitignore
└── README.md
⚡ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/Rajan99Kumar/team-task-manager.git
cd team-task-manager
🔧 Backend Setup
Go to backend folder
cd backend
Install dependencies
npm install
Create .env file
PORT=5000

MONGO_URI=your_mongodb_connection_string
Run backend server
npm run dev

Backend will run on:

http://localhost:5000
🎨 Frontend Setup
Open new terminal
cd frontend
Install dependencies
npm install
Start frontend
npm run dev

Frontend will run on:

http://localhost:5173
🔑 API Endpoints
Authentication APIs
Method	Endpoint	Description
POST	/api/auth/register	Register User
POST	/api/auth/login	Login User
Project APIs
Method	Endpoint	Description
GET	/api/projects	Fetch All Projects
POST	/api/projects	Create Project
Task APIs
Method	Endpoint	Description
GET	/api/tasks	Fetch All Tasks
POST	/api/tasks	Create Task
PUT	/api/tasks/:id	Update Task Status
🔒 Authentication Flow
User Signup/Login
        ↓
JWT Token Generated
        ↓
Token Stored in Local Storage
        ↓
Protected Routes Access
        ↓
Secure API Requests
📸 Screenshots
Dashboard

Add screenshot here

Login Page

Add screenshot here

Signup Page

Add screenshot here

Project Management

Add screenshot here

🚀 Future Improvements
Drag & Drop Kanban Board
Real-time Notifications
Team Collaboration Chat
File Attachments
Task Deadlines & Reminders
Dark Mode
Analytics Dashboard
Email Notifications
Role-Based Permissions
Activity Logs
💡 Why This Project Stands Out

This project demonstrates strong full-stack engineering concepts commonly used in modern SaaS products:

Secure Authentication Systems
REST API Development
Database Relationships
Frontend & Backend Integration
State Management
Protected Route Handling
Responsive UI Design
Scalable Project Structure
👨‍💻 Author

Rajan Kumar

GitHub: @Rajan99Kumar

⭐ Support

If you found this project useful, consider giving it a star on GitHub.

📄 License

This project is open-source and available under the MIT License.

# Task Management Application

A full-stack task management application built with Angular and Node.js.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)
- MongoDB (running locally or have a MongoDB Atlas connection string)
## Getting Started

### Backend Setup

1. Navigate to the backend directory:
cd backend

2. Install dependencies:
    
npm install

3. Create a `.env` file in the backend root directory with the following variables:

PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

4. Start the backend server:

npm run dev


The backend server will start running on `http://localhost:3000`

### Backend (Node.js)
src/

├── controllers/        # Request handlers

├── models/            # Database models


├── routes/            # API routes

├── middleware/        # Custom middleware

└── server.js         # Entry point


## API Endpoints

### Authentication
- POST `/api/users/register` - Register new user
- POST `/api/users/login` - User login

### Tasks
- GET `/api/tasks` - Get all tasks
- POST `/api/tasks` - Create new task
- PUT `/api/tasks/:id` - Update task
- DELETE `/api/tasks/:id` - Delete task
- GET `/api/tasks/:id` - Get single task
## Development Process

1. Start the backend server first
2. Start the Angular development server
3. Register a new account
4. Login with your credentials
5. Start managing your tasks!

## Common Issues & Troubleshooting

1. **Backend Connection Error**
   - Ensure MongoDB is running
   - Check if the correct MongoDB URI is in `.env`
   - Verify the backend is running on port 3000

2. **Frontend Issues**
   - Clear browser cache
   - Check console for errors
   - Ensure all dependencies are installed




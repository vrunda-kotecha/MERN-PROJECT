# MERN Forms Management App

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to create, manage, and display forms with data stored in MongoDB.

---

## ✨ Features

- Create new forms with various input fields
- View a list of submitted forms
- Edit or delete form entries
- Persist data in MongoDB
- RESTful API with Express and Mongoose
- React frontend with Axios for API calls

---

## 🛠️ Tech Stack

- **Frontend:** React, HTML/CSS, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas)
- **Other Tools:** Mongoose, dotenv

---

## 🚀 Setup Instructions

### 1. Clone the Repository

bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

2. Configure Environment Variables
Inside the server folder, create a .env file:
env
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
🔐 Replace your-mongodb-atlas-uri with your actual MongoDB Atlas connection string. You can get this from your MongoDB Atlas dashboard after creating a cluster and user.


3. Install Dependencies
bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

4. Run the Application
Use two terminals or tabs:

Start the Backend Server:

bash
cd server
npm run dev
Start the React Frontend:

bash
cd client
npm start

📁 Project Structure
bash
forms/
├── client/         # React frontend
├── server/         # Express backend
│   ├── models/     # Mongoose schemas
│   ├── routes/     # API endpoints
│   ├── controllers/ # Logic for handling requests
│   └── .env        # MongoDB connection string


##  QuickChat

QuickChat is a real-time chat application built with **React**, **Node.js/Express**, **MongoDB**, and **Socket.io**.  
It allows users to sign up, log in, and chat instantly with others in real-time.

---

## Features
-  User authentication (JWT)
-  Real-time messaging using Socket.io
- User profiles with bio & profile picture
- Responsive UI built with React
-  Image upload via Cloudinary

---

##  Tech Stack
**Frontend:** React, Context API, Axios, TailwindCSS  
**Backend:** Node.js, Express.js, MongoDB, JWT, Socket.io  
**Hosting:** Vercel (Client + API), MongoDB Atlas (Database)  

---

##  Setup & Installation

###  Clone the repo
```bash
git clone https://github.com/deepikarani2k3/QuickChat
cd QuickChat
```
---

## Install Dependencies

### Backend
```bash
cd server
npm install
```
---

### Frontend
```bash
cd ../client
npm install
```
---

##  Setup Environment Variables

###  Server `.env`
Create a `.env` file inside the **server** folder and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
---

###  Client `.env`

Create a `.env` file inside the **client** folder and add:

```env
VITE_BACKEND_URL=http://localhost:5000
```

##  Start the App

###  Backend
```bash
cd server
npm run dev
```

###  Frontend
```bash
cd client
npm run dev
```



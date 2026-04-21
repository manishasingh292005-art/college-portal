# 🎓 College Mini Portal (MySQL + Node.js)

## 📌 Project Overview

The College Mini Portal is a web-based application designed to manage basic student data and communication within a college system. It demonstrates how a static frontend can be integrated with a backend server and a relational database.

This project is built using **HTML, CSS, Bootstrap, Node.js, Express, and MySQL**, and performs core database operations like storing and retrieving user data.

---

## 🚀 Features

* 📝 Student Registration Form (stores data in MySQL)
* 📬 Contact Form (saves user messages)
* 📊 Admin Panel to view student records
* 🔍 Basic data retrieval from database
* ✅ Simple and clean UI using Bootstrap

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, Bootstrap
* **Backend:** Node.js, Express
* **Database:** MySQL

---

## 🗄️ Database Design

### Students Table

* id (Primary Key, Auto Increment)
* name
* email
* course
* year

### Messages Table

* id (Primary Key)
* name
* email
* message

---

## 📂 Project Structure

```
college-portal/
│
├── public/
│   ├── index.html
│   ├── register.html
│   ├── contact.html
│
├── server.js
├── db.js
└── package.json
```

---

## ⚙️ How It Works

1. User fills out a form on the frontend
2. Data is sent to the Express server
3. Server processes the request
4. Data is stored in MySQL database
5. Admin can view stored data

---

## ▶️ How to Run the Project

1. Install dependencies:

   ```
   npm install
   ```

2. Start the server:

   ```
   node server.js
   ```

3. Open in browser:

   ```
   http://localhost:3000
   ```

---

## 📌 Future Enhancements

* 🔐 User authentication system
* 📈 Advanced admin dashboard
* 🗑️ Edit/Delete functionality
* 📱 Responsive UI improvements

---
##  Author

Manisha

---

## 📄 License

This project is for educational purposes only.

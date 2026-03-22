# 🎬 Movie API

A RESTful Movie API built using **Node.js, Express, and MongoDB** that allows users to explore movies, manage accounts, and maintain a list of favorite movies.

---

## 🚀 Features

* 🎥 Get all movies
* 🔍 Get movie details by title
* 🎭 Get movies by genre
* 🎬 Get director details
* 👤 User registration & login
* ✏️ Update user profile
* ❤️ Add/remove favorite movies
* ❌ Delete user account

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT, Passport
* **Testing:** Postman
* **Other Tools:** Nodemon, dotenv

---

## 📁 Project Structure

```
Movie_API/
│── controllers/
│── models/
│── routes/
│── middleware/
│── db/
│── .env
│── server.js
│── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/brij018/Movie_API.git
cd Movie_API
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Run the server:

```bash
npm run dev
```

---

## 📌 API Endpoints

### 🎬 Movies

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | /movies                | Get all movies       |
| GET    | /movies/:title         | Get movie by title   |
| GET    | /movies/genre/:name    | Get movies by genre  |
| GET    | /movies/director/:name | Get director details |

---

### 👤 Users

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| POST   | /users     | Register user |
| PUT    | /users/:id | Update user   |
| DELETE | /users/:id | Delete user   |
| GET    | /users/:id | Get user      |

---

### ❤️ Favorites

| Method | Endpoint                      | Description     |
| ------ | ----------------------------- | --------------- |
| POST   | /users/:id/favorites/:movieId | Add favorite    |
| DELETE | /users/:id/favorites/:movieId | Remove favorite |

---

## 🔐 Authentication

* Uses **JWT (JSON Web Token)**
* Send token in headers:

```
Authorization: Bearer <your_token>
```

---

## 🧪 Testing

Use **Postman** to test API endpoints.

👉 Add your screenshots below:

### ➕ Add Movie

*(Add screenshot here)*

### 📥 Get All Movies

*(Add screenshot here)*

### 🔍 Get Movie by ID

*(Add screenshot here)*

### ✏️ Update User

*(Add screenshot here)*

### ❌ Delete User

*(Add screenshot here)*

---

## 🌐 Future Improvements

* Add pagination
* Improve validation
* Add search & filters
* Deploy on cloud (Render / Railway)

---

## 👨‍💻 Author

**Brij (Full Stack Developer)**

* Passionate about building scalable web applications
* Skilled in MERN stack

---

## 📜 License

This project is licensed under the **MIT License**.

---

⭐ If you like this project, give it a star on GitHub!

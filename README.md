
🍔 Food Server API (Node.js + Express)

A backend REST API built using Node.js and Express.js for managing a food ordering system.
This server handles authentication, users, restaurants, food items, and categories.

The API is designed to be used with a frontend application (React / Web / Mobile) for a complete food ordering platform.

⸻

🚀 Features
	•	🔐 User authentication system
	•	👤 User management
	•	🍽️ Restaurant management
	•	🍕 Food item management
	•	📂 Category management
	•	🌐 RESTful API structure
	•	🧾 Request logging with Morgan
	•	🔓 CORS enabled for frontend communication
	•	🌱 Environment variable configuration with Dotenv
	•	🗄️ MongoDB database connection

⸻

🛠️ Technologies Used
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	Cors
	•	Morgan
	•	Dotenv
	•	Colors

⸻

📂 Project Structure

food-server/
│
├── config/
│   └── db.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── resturantRoutes.js
│   ├── categoryRoutes.js
│   └── foodRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md


⸻

⚙️ Environment Variables

Create a .env file in the root directory and add:

PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key


⸻

📡 API Routes

Authentication
  => /api/v1/auth
Users
  => /api/v1/user
Restaurants
  =>/api/v1/resturant
Categories
  =>/api/v1/category
Food Items
  =>/api/v1/food

⸻

🚀 How to Run the Project

1️⃣ Clone the repository

git clone https://github.com/Prathvirajbhure/Resturant-API.git

2️⃣ Navigate into the project folder

cd fResturant-API

3️⃣ Install dependencies

npm install

4️⃣ Run the server

npm start

or

node server.js


⸻

🌐 Server URL

http://localhost:8080

When running successfully, the server will display:

Node Server running 8080

Opening the root route will show:

Welcome to Food server App


⸻

📋 Middleware Used
	•	CORS → Enables frontend communication
	•	Express.json() → Parses JSON request body
	•	Morgan → Logs API requests in development mode

⸻

🔮 Future Improvements

Possible upgrades for this project:
	•	🛒 Order management system
	•	💳 Payment gateway integration
	•	📱 Mobile app support
	•	⭐ Food rating and reviews
	•	🧑‍🍳 Admin dashboard
	•	📦 Image upload for food items

⸻

⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

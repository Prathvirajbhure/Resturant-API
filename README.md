

#  Resturant API

A robust, production-ready REST API built with Node.js and Express.js designed to power modern food delivery platforms. This backend handles the heavy lifting of user lifecycle management, restaurant catalogs, and menu categorization.

---

##  Key Features

*  Secure Authentication: Full JWT-based user login and registration system.
*  Role-Based Management: Specialized logic for Users and Admin/Restaurant owners.
*  Dynamic Catalog: Full CRUD operations for Restaurants and Food Items.
*  Structured Categories: Efficient menu organization through category management.
*  Production-Ready: Includes request logging (Morgan), security headers (CORS), and environment abstraction.

---

## Tech Stack

| Category | Technology |
| --- | --- |
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (via Mongoose ODM) |
| **Security** | JWT (JSON Web Tokens), Dotenv, CORS |
| **Logging** | Morgan |
| **Styling/CLI** | Colors.js |

---

##  Architecture

```text
food-server/
├── config/             # Database & global configurations
├── controllers/        # Business logic (highly recommended)
├── middlewares/        # Auth & validation checks
├── models/             # Mongoose schemas (Data structure)
├── routes/             # API Endpoint definitions
├── .env                # Private environment variables
└── server.js           # Application entry point

```

---

##  API Reference

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/v1/auth/register` | Register a new user |
| `POST` | `/api/v1/auth/login` | User login & token generation |

### Resource Management

| Resource | Base Route | Functionality |
| --- | --- | --- |
| **Users** | `/api/v1/user` | Profile updates, password reset |
| **Restaurants** | `/api/v1/resturant` | List, search, and manage outlets |
| **Categories** | `/api/v1/category` | Organize food by type |
| **Food** | `/api/v1/food` | Manage menu items and prices |

---

##  Quick Start

### 1. Installation

```bash
git clone https://github.com/Prathvirajbhure/Resturant-API.git
cd Resturant-API
npm install

```

### 2. Configuration

Create a `.env` file in the root directory:

```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

```

### 3. Execution

```bash
# Development mode
npm run dev

# Production mode
npm start

```

---

##  Roadmap & Improvements

* [ ] Order Management: Real-time order tracking using WebSockets.
* [ ] Payments: Stripe or Razorpay integration.
* [ ] Reviews: Star rating system for food and service.
* [ ] Media: Image hosting for food photos via Cloudinary.

---

##  Support & Contributing

If you found this project helpful, please consider giving it a **Star**!

**Contributions:**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

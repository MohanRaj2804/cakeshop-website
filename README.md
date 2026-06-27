# 🎂 Butter Bliss — Cake Shop E-Commerce Web Application

A full-stack e-commerce web application for a cake shop named **Butter Bliss**, built with the MERN stack. Features product browsing with weight/price variants, cart management, order placement, and secure JWT-based authentication.

## 🔗 Live Demo

- **Frontend:** [cakeshop-by-mohan.netlify.app](https://cakeshop-by-mohan.netlify.app)
- **Backend API:** [cakeshop-website-backend.onrender.com](https://cakeshop-website-backend.onrender.com)

> ⚠️ The backend is hosted on Render's free tier — it may take 30–60 seconds to wake up on first load.

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./screenshots/home.png)

### 🛍️ Product Listing — Premium Cake Collection
![Cake Listing](./screenshots/cake-listing.png)

### 🎂 Featured Product — Chef's Signature Cake
![Product Detail](./screenshots/product-detail.png)

### 🔐 Sign In Page
![Sign In](./screenshots/signin.png)

### 📝 Sign Up Page
![Sign Up](./screenshots/signup.png)

---

## ✨ Features

- 🏠 Landing page with hero section and featured cake highlights
- 🎂 Premium cake collection with product cards, star ratings, and "Best Seller" badges
- ⚖️ Weight/size variants with dynamic pricing (500g, 1kg, etc.)
- 👨‍🍳 Chef's Signature limited-edition product section
- 🛒 Add to cart and order management
- 🔐 Secure Sign In / Sign Up with JWT authentication and bcrypt password hashing
- 🔒 Protected routes — only authenticated users can place orders
- 📡 12+ RESTful API endpoints for products, cart, and orders
- 📱 Fully responsive design across all screen sizes

---

## 🛠️ Tech Stack

| Layer     | Technology                                        |
|-----------|---------------------------------------------------|
| Frontend  | React.js, TypeScript, Vite, Bootstrap, CSS3       |
| Backend   | Node.js, Express.js                               |
| Database  | MongoDB, Mongoose                                 |
| Auth      | JWT (JSON Web Tokens), bcrypt                     |
| Dev Tools | Postman, ESLint, Git, VS Code                     |
| Deployed  | Netlify (frontend), Render (backend)              |

---

## 📁 Project Structure

```
cakeshop-website/
├── backend/
│   ├── config/             # DB connection and app config
│   ├── controllers/        # Route handler logic
│   ├── middleware/         # JWT auth middleware
│   ├── models/             # Mongoose schemas (User, Product, Cart, Order)
│   ├── routes/             # Express API routes
│   ├── scripts/            # Utility / seed scripts
│   ├── .env.example        # Environment variable template
│   ├── .eslintrc.json
│   └── server.js           # Entry point
│
└── frontend/
    ├── public/             # Static assets
    ├── src/                # React components, pages, hooks
    ├── dist/               # Production build output
    ├── .env.example        # Environment variable template
    ├── eslint.config.js
    ├── index.html
    ├── tsconfig.json
    └── vercel.json
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/MohanRaj2804/cakeshop-website.git
cd cakeshop-website
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file (refer to `.env.example`):
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

```bash
npm start
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Create a `.env` file (refer to `.env.example`):
```env
VITE_API_URL=http://localhost:5000
```

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint              | Description             | Auth Required |
|--------|-----------------------|-------------------------|---------------|
| POST   | /api/auth/register    | Register a new user     | ❌            |
| POST   | /api/auth/login       | Login and get JWT token | ❌            |
| GET    | /api/products         | Get all products        | ❌            |
| GET    | /api/products/:id     | Get single product      | ❌            |
| POST   | /api/cart             | Add item to cart        | ✅            |
| GET    | /api/cart             | Get user's cart         | ✅            |
| PUT    | /api/cart/:id         | Update cart item        | ✅            |
| DELETE | /api/cart/:id         | Remove cart item        | ✅            |
| POST   | /api/orders           | Place a new order       | ✅            |
| GET    | /api/orders           | Get user's orders       | ✅            |
| GET    | /api/orders/:id       | Get single order        | ✅            |
| DELETE | /api/orders/:id       | Cancel an order         | ✅            |

---

## 🌱 Future Improvements

- [ ] Admin dashboard for managing products and orders
- [ ] Payment gateway integration (Razorpay)
- [ ] Product search and filter by category
- [ ] Email confirmation on order placement
- [ ] Review and rating system

---

## 👨‍💻 Author

**Mohan Raj V**
- GitHub: [@MohanRaj2804](https://github.com/MohanRaj2804)
- LinkedIn: [linkedin.com/in/mohan-rajv](https://linkedin.com/in/mohan-rajv)
- Email: mohanraj171810@gmail.com

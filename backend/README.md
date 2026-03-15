# CakeShop Backend API

Express.js REST API server for the CakeShop MERN application.

## 📚 For Beginners

If you're new to MERN development, start with the main [README.md](../README.md) and [DEVELOPMENT.md](../DEVELOPMENT.md) files for a complete guide.

## 🏃 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or cloud)

### Setup
1. **Copy environment template**:
   ```bash
   cp .env.example .env
   ```

2. **Configure `.env`**:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/cakeshop
   JWT_SECRET=<your_secure_random_string_here>
   ```

3. **Install and run**:
   ```bash
   npm install
   npm run dev
   ```

Server will start at `http://localhost:5000`

---

## 📁 Folder Structure

```
backend/
├── config/           # Database configuration
│   └── DB.js        # MongoDB connection setup
├── controllers/      # Request handlers (business logic)
│   ├── userController.js
│   └── cakeController.js
├── middleware/       # Express middleware
│   └── auth.js      # JWT authentication
├── models/          # MongoDB schemas
│   ├── User.js
│   └── Cake.js
├── routes/          # API endpoints
│   ├── auth.js      # /api/auth routes
│   └── cake.js      # /api/cakes routes
├── server.js        # Main server file
└── package.json     # Dependencies
```

---

## 🔗 API Endpoints

### Auth Routes (`POST /api/auth/...`)
- `POST /register` - Create new user account
  ```json
  { "name": "John", "email": "john@example.com", "password": "123456" }
  ```

- `POST /login` - Login user
  ```json
  { "email": "john@example.com", "password": "123456" }
  ```
  Returns: JWT token (save in frontend localStorage)

- `GET /profile` - Get user info (protected, requires token)

### Cake Routes (`GET/POST /api/cakes/...`)
- `GET /` - Get all cakes
- `POST /` - Create new cake (protected)
- `GET /:id` - Get single cake by ID

---

## 🔐 Authentication

This API uses **JWT (JSON Web Tokens)** for authentication.

### How it works:
1. User logs in → Backend returns JWT token
2. Frontend stores token in localStorage
3. Each request includes token in Authorization header:
   ```
   Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
   ```
4. Backend verifies token before allowing access to protected routes

---

## 📝 Available Scripts

```bash
npm run dev      # Run with auto-reload (recommended for development)
npm start        # Run production mode
npm run lint     # Check code quality with ESLint
```

---

## 🐛 Troubleshooting

### MongoDB connection fails
- Ensure MongoDB is running: `mongod`
- Check MONGO_URI in .env matches your setup
- For MongoDB Atlas: Update MONGO_URI with cloud connection string

### Port already in use
```bash
# Change PORT in .env
PORT=5001
```

### Module not found error
```bash
npm install
```

---

## 🧹 Code Quality

```bash
npm run lint        # Show linting errors
eslint . --fix      # Auto-fix most issues
```

---

## 📚 Learn More

- [Main README](../README.md) - Full project overview
- [Development Guide](../DEVELOPMENT.md) - How to extend the project
- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [JWT Explanation](https://jwt.io/introduction)

---

**Happy coding!** 🚀
- PUT /api/cakes/:id -> update cake (protected)
- DELETE /api/cakes/:id -> delete cake (protected)

Example curl usage (assuming backend on localhost:5000):

```bash
# register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","password":"secret"}'

# login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alice@example.com","password":"secret"}'

# list cakes
curl http://localhost:5000/api/cakes
```

### Linting

The backend includes ESLint for code quality. After installing dependencies (`npm install`), run:

```bash
npm run lint
```

Any issues will be printed; fix or ignore warnings as needed.

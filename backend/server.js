// Import required packages
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/DB.js';
import authRoutes from './routes/auth.js';
import cakeRoutes from './routes/cake.js';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware: Enable CORS for frontend communication
const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'https://thecakeshop.netlify.app'];
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Middleware: Parse JSON request bodies
app.use(express.json());

// Connect to MongoDB database
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/cakes', cakeRoutes);

// Root route - test if server is running
app.get('/', (req, res) => res.send('Cake shop backend is running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

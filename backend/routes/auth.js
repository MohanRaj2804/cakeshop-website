import express from 'express';
import { registerUser, loginUser, getProfile } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes (no authentication required)
router.post('/register', registerUser);  // Register new user
router.post('/login', loginUser);        // Login user

// Protected routes (authentication required)
router.get('/profile', protect, getProfile);  // Get user profile

export default router;

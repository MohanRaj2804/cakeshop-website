import express from 'express';
import { createCake, getCakes, getCakeById, updateCake, deleteCake } from '../controllers/cakeController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes (no authentication required)
router.get('/', getCakes);           // Get all cakes
router.get('/:id', getCakeById);     // Get single cake by ID

// Protected routes (authentication required)
router.post('/', protect, createCake);        // Create new cake
router.put('/:id', protect, updateCake);      // Update cake
router.delete('/:id', protect, deleteCake);   // Delete cake

export default router;

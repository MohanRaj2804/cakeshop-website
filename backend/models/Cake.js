import mongoose from 'mongoose';

// Define price variant schema (for different cake sizes/weights)
const priceVariantSchema = new mongoose.Schema({
  label: String,  // e.g., "500g", "1kg"
  price: Number   // e.g., 500, 1000
}, { _id: false });

// Define Cake schema (structure of cake data)
const cakeSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: String,
  image: String,
  priceVariants: [priceVariantSchema],
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
}, { 
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create Cake model from schema
const Cake = mongoose.model('Cake', cakeSchema);

export default Cake;

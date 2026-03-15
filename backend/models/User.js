import mongoose from 'mongoose';

// Define User schema (structure of user data)
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  }
}, { 
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create User model from schema
const User = mongoose.model('User', userSchema);

export default User;

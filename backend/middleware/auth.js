import jwt from 'jsonwebtoken';

// Middleware to protect routes - checks if user is authenticated
export const protect = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;
  
  // Check if token exists and starts with 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Extract token (remove 'Bearer ' prefix)
  const token = authHeader.split(' ')[1];
  
  try {
    // Verify token and decode user information
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user info to request object
    req.user = { id: decoded.id, role: decoded.role };
    
    // Continue to next middleware/route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid or expired' });
  }
};

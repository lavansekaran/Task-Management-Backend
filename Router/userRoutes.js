const express = require('express');
const { register, login } = require('../Controllers/userController');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/users', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed' });
});


function authenticateToken(req, res, next) {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.startsWith('Bearer ') && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access Denied: No Token Provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or Expired Token' });
    
    req.user = user; // Attach user payload to request
    next(); // Pass control to the next middleware or route handler
  });
}
module.exports = router;

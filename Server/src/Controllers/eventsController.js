const User = require('../Models/User')
const jwt = require('jsonwebtoken')
const config = require('../Config/index')
const { register } = require('module')


//Helper function to generate JWT
const generateJWTToken = (id) => {
    return jwt.sign({ id }), config.jwtSecret,{
        expiresIn: config.jwtExpiresIn
    }
}



// register user

exports.registerUSer = async () => {
    const { username, password } = req.body;

  
  try {
    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    // Check if email already exists (if email is unique)
    if (email) {
      user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'Email already registered' });
      }
    }

    // Create new user
    user = await User.create({
      username,
      email,
      password, // Password will be hashed by pre-save hook in model
    });

    res.status(201).json({
      message: 'User registered successfully',
      token: generateToken(user._id), // Send JWT back
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    // Mongoose validation errors or other server errors
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
}

exports.loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await TODOUSER.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if password matches
    const isMatch = await TODOUSER.matchPassword(password); // Using method defined in model
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      message: 'Logged in successfully',
      token: generateToken(user._id), // Send JWT back
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

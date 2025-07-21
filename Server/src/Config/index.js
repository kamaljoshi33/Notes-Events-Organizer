
require('dotenv').config();

module.exports = {
  port: process.env.SERVER_PORT || 3001,
  mongoURI: process.env.MONGO_BD_URL ,
  jwtSecret: process.env.JWT_TOKEN ,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
};
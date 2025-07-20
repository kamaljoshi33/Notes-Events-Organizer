
module.exports = {
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || 'supersecretjwtkey', // Fallback for development, but always use .env
  mongoURI: process.env.MONGO_BD_URL || 'mongodb://localhost:27017/notes-events-organizer-db-dev', // Fallback
};
const { User } = require('../models');

// Sample user data
const userData = [
  { "username": "leonis", "email": "leonhsu95@gmail.com", "password": "admin12345" },
  { "username": "saladtini", "email": "lernantino@hotmail.com", "password": "password12345" },
  { "username": "zaconium", "email": "zli0@gmail.com", "password": "zacPW1234" },
  { "username": "amiChopsticks", "email": "amiko@yahoo.com", "password": "password12345" },
  { "username": "DallioHax", "email": "dalliohax0@gmail.com", "password": "dHaxer9519" }
];

// Function to seed users
const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true, // Needed to hash passwords if your User model does so
  returning: true, // Optional: if you want to return the users
});

module.exports = seedUsers;

const seedUsers = require('./user');
const seedPosts = require('./post');
const seedComments = require('./comment');

const sequelize = require('../config/connection');

// Function to seed all data
const seedAll = async () => {
    await sequelize.sync({ force: true }); // Reset the database
    await seedUsers(); // Seed users
    await seedPosts(); // Seed posts
    await seedComments(); // Seed comments
    process.exit(0); // Exit the process
};

seedAll();

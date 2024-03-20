const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Define the User model with a method to check password validity
class User extends Model {
  // Method to compare the provided password with the hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initialize the User model's attributes and configurations
User.init(
  {
    // Define an ID field
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define a username field
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define an email field with validation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,  // Validates the email format
      },
    },
    // Define a password field
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Hooks to hash the password before saving or updating a user
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,  // Disable automatic timestamp fields
    freezeTableName: true,  // Prevents Sequelize from renaming the table
    underscored: true,  // Uses underscores instead of camelCasing
    modelName: 'user',  // Sets the model name
  }
);

module.exports = User;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Post model
class Post extends Model {}

// Initialize the Post model's attributes and configurations
Post.init(
    {
      // Define an ID field
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // Define a title field
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Define a content field
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      // Define a user_id field as a foreign key
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',  // References the user model
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,  // Prevents Sequelize from renaming the table
      underscored: true,  // Uses underscores instead of camelCasing
      modelName: 'post'  // Sets the model name
    }
  );

module.exports = Post;

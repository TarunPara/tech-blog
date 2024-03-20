const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the Comment model
class Comment extends Model {}

// Initialize the Comment model's attributes and configurations
Comment.init({
    // Define an ID field
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Define a comment_text field with validation
    comment_text: {
        type: DataTypes.STRING,
        validate: {
            len: [3]  // Requires the comment to be at least 3 characters long
        }
    },
    // Define a user_id field as a foreign key
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    // Define a post_id field as a foreign key
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,  // Prevents Sequelize from renaming the table
    underscored: true,  // Uses underscores instead of camelCasing
    modelName: 'comment'  // Sets the model name
});

module.exports = Comment;

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// A user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A post belongs to a single user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"  // If a user is deleted, their posts are also deleted
});

// A comment belongs to a single user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"  // If a user is deleted, their comments are also deleted
});

// A comment belongs to a single post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"  // If a post is deleted, its comments are also deleted
});

// A user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"  // If a user is deleted, their comments are also deleted
});

// A post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"  // If a post is deleted, its comments are also deleted
});

module.exports = { User, Post, Comment };

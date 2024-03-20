const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Routes for user-related requests
router.use('/users', userRoutes);

// Routes for post-related requests
router.use('/posts', postRoutes);

// Routes for comment-related requests
router.use('/comments', commentRoutes);

module.exports = router;

const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Use API routes
router.use('/api', apiRoutes);

// Use home routes
router.use('/', homeRoutes);

// Use dashboard routes
router.use('/dashboard', dashboardRoutes);

// Handle 404 not found
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;

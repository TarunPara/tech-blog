const { Post } = require('../models');

// Sample post data
const postData = [
    { title: "Ethereum Extends Gains to Rise 8%; Bitcoin Firms", content: "Cryptocurrency Ethereum extended gains...", user_id: 1 },
    { title: "npm 7 is the latest and the greatest!", content: "npm 7 was just published as latest to the npm registry...", user_id: 2 },
    { title: "Chrome will soon warn you when you might not want to trust an extension", content: "A Google is rolling out new safety features...", user_id: 2 },
    { title: "Have autonomous robots started killing in war?", content: "Elke Schwarz, a senior lecturer in political theory...", user_id: 5 },
    { title: "Google is making it harder for Android apps to track you once you’ve opted out", content: "It’s going to get harder for Android apps to track users...", user_id: 4 }
];

// Function to seed posts
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

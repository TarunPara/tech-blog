# The Tech Word Blog

## Description

The Tech Word is a CMS-style blog site where developers can publish articles, blog posts, and share their thoughts and opinions on various tech-related topics. It follows the MVC (Model-View-Controller) architectural pattern, using Handlebars.js as the templating engine, Sequelize as the ORM (Object-Relational Mapping) tool for MySQL database management, and Express.js for handling server routes and middleware.

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Dashboard: Logged-in users have access to a dashboard where they can view and manage their blog posts.
- Create, read, update, and delete (CRUD) operations: Users can create new blog posts, view existing posts, edit their own posts, and delete posts.
- Commenting system: Users can leave comments on blog posts, and comment creators are displayed along with the comment content and timestamp.
- Session management: Users remain logged in until they choose to log out or their session expires due to inactivity.
- Responsive design: The site is optimized for various screen sizes, ensuring a seamless user experience across devices.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/TarunPara/tech-blog.git
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your MySQL database credentials:

Create a folder locally to nominate for cloning from online repo
Clone with SSH by
git clone git@github.com:leonhsu95/tech-blog.git"
Additionally, please install NodeJS and the below npm packages

npm i init -y
npm i
npm i bcrypt
npm i connect-session-sequelize
npm i dotenv
npm i express
npm i express-handlebars
npm i express-session
npm i handlebars
npm i inquirer
npm i mysql2
npm i nodemon
npm i sequelize
Before you run the code, please change scripts:{start: } to 'node server.js' in the package.json file and change your database login credentials in the .env file.

It is highly encouraged to install Insomnia, MySQL and MySQL Workbench for RESTful API and Database functionalities to work.
Start the application:

bash
Copy code
npm start
Access the application in your web browser at http://localhost:3001.

Technologies Used
Node.js
Express.js
Sequelize
MySQL
Handlebars.js
Express Handlebars
Express Session
Connect Session Sequelize
bcrypt
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

Questions
If you have any questions, feel free to reach out:

GitHub: TarunPara

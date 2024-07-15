// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Database Configuration

// 1. Create Sequelize instance
const sequelize = require('./config/database');
// import sequelize from "./config/database";

// 2. Define our schema
const Course = require('./src/models/Course');

// "Sync" our sequelize with our database
sequelize.sync({ alter: true });

// Server Configuration

// PORT: Where the server app will run (default: 3000)
const port = 3000;
const app = express();

// MIDDLEWARE
const CoursesController = require('./src/controllers/CoursesController');
const AuthController = require('./src/controllers/AuthController');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CoursesController);
app.use(AuthController);

// Services
app.get("/", (req, res) => {

    let payload = { message: "Welcome to student portal!" };
    res.json(payload);
})

// Run the server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
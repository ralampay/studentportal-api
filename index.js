// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Database Configuration

// 1. Create Sequelize instance
const sequelize = require('./config/database');
// import sequelize from "./config/database";

// 2. Schema
const Course = require('./src/models/Course');
const Student = require('./src/models/Student');
const User = require('./src/models/User');

// 3. Define associations
Course.hasMany(Student, { foreignKey: 'courseId' });
Student.belongsTo(Course, { foreignKey: 'courseId' });

// "Sync" our sequelize with our database
sequelize.sync({ alter: true });

// Server Configuration

// PORT: Where the server app will run (default: 3000)
const port = 3000;
const app = express();

// MIDDLEWARE
const CoursesController = require('./src/controllers/CoursesController');
const StudentsController = require('./src/controllers/StudentsController');
const AuthController = require('./src/controllers/AuthController');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(AuthController);
app.use(CoursesController);
app.use(StudentsController);

// Services
app.get("/", (req, res) => {

    let payload = { message: "Welcome to student portal!" };
    res.json(payload);
})

// Run the server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

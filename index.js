// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Model, DataTypes } = require('sequelize');

// Database Configuration

// 1. Create Sequelize instance
const sequelize = require('./config/database');
// import sequelize from "./config/database";

// 2. Define our schema
class Course extends Model {}

Course.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT
    }
}, { sequelize, modelName: 'course' })

// { sequelize } --> { sequelize: sequelize }

// "Sync" our sequelize with our database
sequelize.sync({ alter: true });

// Server Configuration

// PORT: Where the server app will run (default: 3000)
const port = 3000;
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Services
app.get("/", (req, res) => {

    let payload = { message: "Welcome to student portal!" };
    res.json(payload);
})

// Run the server
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
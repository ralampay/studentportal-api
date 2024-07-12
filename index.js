// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');

// Database Configuration

// 1. Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})

// 2. Define our schema
class Course extends Model {}

Course.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { sequelize, modelName: 'course' })

// { sequelize } --> { sequelize: sequelize }

// "Sync" our sequelize with our database
sequelize.sync();

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
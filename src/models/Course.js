const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

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

module.exports = Course;
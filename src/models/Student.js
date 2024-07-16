const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

class Student extends Model {}

Student.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Courses', // refers to the table name,
            key: 'id' // refers to column name in courses table
        }
    }
}, { sequelize, modelName: 'Student' })

module.exports = Student;
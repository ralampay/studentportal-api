const { Sequelize } = require('sequelize');
// import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})

module.exports = sequelize;
// export default sequelize;
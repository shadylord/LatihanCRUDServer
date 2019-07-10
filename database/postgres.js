const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres://shady:12345@localhost/db_users");

module.exports = sequelize;

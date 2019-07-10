const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://qwwokridbejebb:d2b444fea35d706c379776767d5b82d8a05d0a0a03a9910603acf9f4a3faf224@ec2-50-19-222-129.compute-1.amazonaws.com:5432/df8uj2mdcn3e38"
);

module.exports = sequelize;

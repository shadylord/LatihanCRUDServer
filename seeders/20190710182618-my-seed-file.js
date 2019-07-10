"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          password: "123456",
          email: "johnDoe@test.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Users", [
      {
        name: "John Doe"
      }
    ]);
  }
};

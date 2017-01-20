'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.INTEGER
      },
      constitution: {
        type: Sequelize.INTEGER
      },
      intelligence: {
        type: Sequelize.INTEGER
      },
      spirit: {
        type: Sequelize.INTEGER
      },
      dexterity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Players');
  }
};
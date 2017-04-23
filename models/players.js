'use strict';
module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define('Players', {
    name: DataTypes.STRING,
    job: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    constitution: DataTypes.INTEGER,
    intelligence: DataTypes.INTEGER,
    spirit: DataTypes.INTEGER,
    dexterity: DataTypes.INTEGER,
    level: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Players;
};
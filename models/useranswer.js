'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserAnswer = sequelize.define('UserAnswer', {
    uID: DataTypes.INTEGER,
    aID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserAnswer;
};
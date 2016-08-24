'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    text: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Answer;
};
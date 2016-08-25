'use strict';
module.exports = function(sequelize, DataTypes) {
  var QuestionAnswer = sequelize.define('QuestionAnswer', {
    qID: DataTypes.INTEGER,
    aID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionAnswer;
};
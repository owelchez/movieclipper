'use strict';
module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    text: DataTypes.STRING,
    cAnswerID: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Question.hasMany(models.Answer);
      }
    }
  });
  return Question;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
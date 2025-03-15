'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Здесь будут ассоциации (если нужны)
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'admin'] // Добавьте значения для ENUM
    },
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


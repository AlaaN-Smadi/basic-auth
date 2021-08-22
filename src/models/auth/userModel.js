'use strict';


// id column will be added by default with datatibe SERIAL
const Users = (sequelize, DataTypes) => sequelize.define('Users', {
    userName: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    userPassword: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
  
});

module.exports = Users;
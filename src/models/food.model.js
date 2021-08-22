'use strict';


// id column will be added by default with datatibe SERIAL
const Food = (sequelize, DataTypes) => sequelize.define('Food', {
    foodName: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    foodType: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    descreption: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    
});

module.exports = Food;
'use strict';


// id column will be added by default with datatibe SERIAL
const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
    clothesName: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    clothesType: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    descreption: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    foodId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Clothes;
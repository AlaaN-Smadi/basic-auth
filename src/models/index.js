'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');
const clothes = require('./clothes')

const Collection = require('./collections-class')


var sequelize = new Sequelize(POSTGRES_URI, {});




const foodModel = food(sequelize, DataTypes);
const clothesModel = clothes(sequelize, DataTypes);

// create our relations that will add 'foreign keys' to our tables
foodModel.hasMany(clothesModel, { sourceKey: 'id', foreignKey: 'foodId' });
clothesModel.belongsTo(foodModel, { foreignKey: 'foodId', targetKey: 'id' });

const foodCollection = new Collection(foodModel);
const clothesCollection = new Collection(clothesModel);



 
module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    Clothes: clothes(sequelize, DataTypes)
}


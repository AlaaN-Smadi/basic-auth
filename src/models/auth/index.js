'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const user = require('./userModel');

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    User: user(sequelize, DataTypes),
}



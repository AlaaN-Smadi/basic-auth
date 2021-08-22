'use strict';


const { Food } = require('../models/index');
const express = require('express');
const router = express.Router();

const DataBaseManagement = require('../models/collections-class')

const newObj = new DataBaseManagement(Food)
 // ------------------------------
 //         Functions
 // ------------------------------

 //   Get all Data 
async function getAllFood(req,res){
    let allFood = await newObj.getAllItems()

    res.status(200).json(allFood)
}
//   Add new Data for food 
async function addNewFood(req,res){
    let addFood = await newObj.addNew(req.body)

    res.status(201).json(addFood)

}
//   Get One item
async function getOneFood(req,res){
    let getOneItem = await newObj.getOneItem(req.params.id)

    res.status(200).json(getOneItem)
}
//   Update  Food 
async function updateFood(req,res){
    let updateItem = await newObj.updateInfo(req.params.id,req.body)

    res.status(200).json(updateItem)
}
//   Delete Food 

async function deleteFood(req,res){
    let deletedItem = await newObj.deleteInfo(req.params.id)

    res.status(204).json(deletedItem)
}

 // ------------------------------
 //          Routes
 // ------------------------------
router.get('/api/v1/food', getAllFood);
router.post('/api/v1/food', addNewFood);
router.get('/api/v1/food/:id', getOneFood);
router.put('/api/v1/food/:id', updateFood);
router.delete('/api/v1/food/:id', deleteFood);


module.exports = router;
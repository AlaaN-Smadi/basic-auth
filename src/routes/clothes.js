'use strict';


const { Clothes } = require('../models/index');
const express = require('express');
const router = express.Router();

const DataBaseManagement = require('../models/collections-class')

const newObj = new DataBaseManagement(Clothes)
 // ------------------------------
 //         Functions
 // ------------------------------

 //   Get all Data 
async function getAllClothes(req,res){
    let allClothes = await newObj.getAllItems()

    res.status(200).json(allClothes)
}
//   Add new Data for Clothes 
async function addNewClothes(req,res){
    let addClothes = await newObj.addNew(req.body)

    res.status(201).json(addClothes)

}
//   Get One item
async function getOneClothes(req,res){
    let getOneItem = await newObj.getOneItem(req.params.id)

    res.status(200).json(getOneItem)
}
//   Update  Clothes 
async function updateClothes(req,res){
    let updateItem = await newObj.updateInfo(req.params.id,req.body)

    res.status(200).json(updateItem)
}
//   Delete Clothes 

async function deleteClothes(req,res){
    let deletedItem = await newObj.deleteInfo(req.params.id)

    res.status(204).json(deletedItem)
}

 // ------------------------------
 //          Routes
 // ------------------------------
router.get('/api/v1/clothes', getAllClothes);
router.post('/api/v1/clothes', addNewClothes);
router.get('/api/v1/clothes/:id', getOneClothes);
router.put('/api/v1/clothes/:id', updateClothes);
router.delete('/api/v1/clothes/:id', deleteClothes);


module.exports = router;
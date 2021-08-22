'use strict';


class DataBaseManagement{
    constructor(model){
        this.model = model  // Food
    }


    async addNew(passData) {  // req.body
        let itemInfo = passData;
        let itemA = await this.model.create(itemInfo);
        // res.status(201).json(itemA);
        return itemA
    }
    
    async getOneItem(passData) { //  req.params.id
        const id = parseInt(passData);
        let itemA = await this.model.findOne({ where: { id: id } });
        // res.status(200).json(itemA);
        return itemA
    }
    
    async getAllItems() {
        let all = await this.model.findAll();
        // res.status(200).json(all);\
        return all
    }
    
    async updateInfo(passData, passDataBody) {  //  req.params.id   //  req.body
        const id = parseInt(passData);
        let itemInfo = passDataBody;
    
        let itemA = await this.model.findOne({ where: { id } });
        let updateItem = await itemA.update(itemInfo);
        // res.status(200).json(updateItem);
        return updateItem
    }
    
    async deleteInfo(passData) { // req.params.id
        const id = parseInt(passData);
        let deleteItem = await this.model.destroy({ where: { id } });
        // res.status(204).json(deleteItem);
        return deleteItem
    }
    


}


module.exports = DataBaseManagement


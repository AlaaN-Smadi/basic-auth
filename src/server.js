'use strict';

/* ----------------------------------------------------------------------------------------------------
Importing all things and intialaizing variables to use inside our methods 
---------------------------------------------------------------------------------------------------- */


const express = require('express')
const app = express();

app.use(express.json())


const cleintError = require('./error-handers/404.js')
const servreError = require('./error-handers/500.js')


const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator')

const foodRouter = require('./routes/food')
app.use(foodRouter)

const clothesRouter = require('./routes/clothes')
app.use(clothesRouter)

app.use(logger);



const userAuth = require('./routes/auth_route')
app.use(userAuth)
// app.use(validator);s

/* ----------------------------------------------------------------------------------------------------
Routs to adding, deleting and  getting the data 
---------------------------------------------------------------------------------------------------- */


//  Main Root => when opening the server
app.get('/', (req,res)=>{
    res.send("Welcome To Ala'a Server")
})


//  person route  =>  objData =>  return an object
app.get('/person',validator ,(req,res)=>{
    console.log(req.method , " == " , req.newMethod)
    let sendData = {
        name: req.name,
        age: req.query.age,
        address: req.query.address,
        
    }
    
    res.status(200).json(sendData)
})


//  job =>  return an object
app.get('/job', (req,res)=>{
    let sendData = {
        job: "Full StackDeveloper",
        experince: '3 Years',
        address: "Jordan/ Amman",
        salary: '650  J.D'
    }
    
    res.send(sendData)
})

app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

/* ----------------------------------------------------------------------------------------------------
Handelling the Error =>  Internal Server //  =>  DNE =>  Does Not Exist
---------------------------------------------------------------------------------------------------- */

app.use(servreError);
app.use('*',cleintError);

/* ----------------------------------------------------------------------------------------------------
Exporting functions and create the listening part in our code //  To start the server 
---------------------------------------------------------------------------------------------------- */


function start(port) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports = {
    start,
    app
}
'use strict';



module.exports = (req, res, next) => {

    console.log(`request mthod is ${req.method} and the path is ${req.path}`)

    req.newMethod = req.method

    next();

}
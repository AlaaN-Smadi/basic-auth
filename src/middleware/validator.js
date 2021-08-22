'use strict';



module.exports = (req, res, next) => {
    let name = req.query.name

    if (name) {
        req.name = name
        next()
    } else {
        next('name not found  :( ');
    }


}
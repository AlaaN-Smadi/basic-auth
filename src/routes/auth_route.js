'use strict';

const express = require('express');
const router = express.Router();
const { User } = require('../models/auth/index')

const bccrypt = require('bcrypt');
const base64 = require('base-64');

const basicAuth = require('../middleware/basicAuth')

async function signUp(req, res) {
    let userData = req.headers.authorization;


    let encodedCreditentials = userData.split(' ').pop();

    let decodedCreditentials = base64.decode(encodedCreditentials);



    let [username, password] = decodedCreditentials.split(':');

    let oldUser = await User.findOne({ where: { userName: username } });

    if (oldUser) {
        res.status(201).json('Already Exist')
    }

    let newPassword = await bccrypt.hash(password, 10);

    const record = await User.create({ username, password: newPassword });
    res.status(201).json(record);
}


async function signIn(req, res) {


    let isValid = req.user

    if (isValid) {
        res.status(200).json(user);
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }

}




router.post('/signup', signUp);
router.post('/signin', basicAuth, signIn);


module.exports = router


const bccrypt = require('bcrypt');
const base64 = require('base-64');


module.exports = async(req, res, next) => {

    let authHeader = req.headers.authorization;
    console.log(authHeader);
    let encodedCreditentials = authHeader.split(' ').pop();

    let decodedCreditentials = base64.decode(encodedCreditentials);
    console.log(decodedCreditentials);
    let [username, password] = decodedCreditentials.split(':');
    const user = await Users.findOne({ where: { username } });
    const isValid = await bccrypt.compare(password, user.password);

    if (isValid) {
        req.user = user
        next();
    } else {
        next('Invalid credentials');
    }

}
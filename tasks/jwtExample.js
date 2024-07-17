const jwt = require('jsonwebtoken');

const user = {
    username: 'admin',
    role: 'admin'
}

const token = jwt.sign(user, 'secret');
console.log(`token: ${token}`);

const decodedToken = jwt.verify(token, 'secret');
console.log(`decodedToken:`)
console.log(decodedToken)
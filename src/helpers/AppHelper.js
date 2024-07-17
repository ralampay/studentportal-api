const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const isValidLogin = async (inputPassword, passwordHash) => {
    return await bcrypt.compare(inputPassword, passwordHash);
}

module.exports = {
    hashPassword,
    isValidLogin
}
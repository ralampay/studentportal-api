const User = require('../../models/User');
const { isValidLogin } = require('../../helpers/AppHelper');

const ValidateLogin = async (username, password) => {
    let isValid = true;
    let user = null;

    let payload = {
        username: [],
        password: []
    }

    if (!username) {
        payload.username.push("required");
    }

    if (!password) {
        payload.password.push("required");
    }

    if (username && password) {
        user = await User.findOne({ where: { username: username } })

        if (user) {
            let isValid = await isValidLogin(password, user.passwordHash);

            if (!isValid) {
                payload.password.push("invalid password");
            }
        } else {
            payload.username.push("not found");
        }
    }

    // Loop through each key checking if we have error messages
    Object.keys(payload).forEach((key) => {
        if (payload[key].length > 0) {
            isValid = false;
        }
    })

    return {
        isValid,
        payload,
        user
    }
}

module.exports = ValidateLogin;
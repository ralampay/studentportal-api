const express = require('express');
const router = express.Router();
const ValidateLogin = require('../operations/users/ValidateLogin');
const { generateToken } = require('../helpers/AppHelper');

router.post("/login", async (req, res) => {
    console.log("POST /login");

    const username = req.body.username;
    const password = req.body.password;

    let result = await ValidateLogin(username, password);

    if (result.isValid) {
        // return the token and user object
        let user = {
            username: result.user.username,
            role: result.user.role
        }

        let token = generateToken(user);

        res.json({
            token,
            user
        })
    } else {
        res.status(422).json(result.payload)
    }
})

module.exports = router;
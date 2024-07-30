const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateUser = async (req, res, next) => {
    if ('authorization' in req.headers) {
        // Extract token
        let authHeader = req.headers.authorization.split(' ');

        // Checks the format of our authHeader
        // Format: Bearer tokenValue
        if (authHeader.length == 2) {
            // Get the token value of the request
            let token = authHeader[1];

            let userObject = jwt.decode(token, 'secret');

            let user = await User.findOne({ where: { username: userObject.username } });

            if (user) {
                // load the user to be accessed in the next part of the stack
                req.user = user;
    
                // Trigger the next part of the stack (i.e. our actual controller method)
                next();
            } else {
                res.status(404).json({ message: "user not found" })
            }
        } else {
            res.status(401).json({ message: 'user must be logged in' })
        }
    } else {
        // return response stating that user is not logged in
        res.status(401).json({ message: 'user must be logged in' })
    }
}

module.exports = authenticateUser;
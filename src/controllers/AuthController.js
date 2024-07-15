const express = require('express');
const router = express.Router();

router.post("/login", (req, res) => {
    console.log("POST /login");

    res.json({
        token: "1234",
        user: {
            username: "admin",
            role: "admin"
        }
    });
})

module.exports = router;
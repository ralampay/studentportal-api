const express = require('express');
const Student = require('../models/Student');
const Course = require('../models/Course');
const router = express.Router();

router.get("/students", async (req, res) => {
    console.log("URL Parameters:");
    console.log(req.query);

    students = await Student.findAll({ 
        include: Course
    });

    console.log(`Students:`);
    console.log(students);

    res.json(students);
})

module.exports = router;
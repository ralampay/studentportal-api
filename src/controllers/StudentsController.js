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

router.post("/students", async (req, res) => {
    let student = await Student.create(req.body);

    res.json(student);
})

router.get("/students/:id", async (req, res) => {
    let student = await Student.findByPk(req.params.id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "not found" });
    }
})

router.put("/students/:id", async (req, res) => {
    let student = await Student.findByPk(req.params.id);

    if (student) {
        await student.update(req.body);

        res.json(student);
    } else {
        res.status(404).json({ message: "not found" });
    }
})

router.delete("/students/:id", async (req, res) => {
    let student = await Student.findByPk(req.params.id);

    if (student) {
        await student.destroy();

        res.json({ message: "ok" });
    } else {
        res.status(404).json({ message: "not found" });
    }
})

module.exports = router;
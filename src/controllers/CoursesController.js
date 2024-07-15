const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

router.get("/courses", async (req, res) => {
    let courses = await Course.findAll();

    res.json(courses);
});

router.post("/courses", async (req, res) => {
    let course = await Course.create(req.body);

    res.json(course);
});

router.get("/courses/:id", async (req, res) => {
    let course = await Course.findByPk(req.params.id);

    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: "not found" });
    }
})

router.put("/courses/:id", async (req, res) => {
    let course = await Course.findByPk(req.params.id);

    if (course) {
        await course.update(req.body);

        res.json(course);
    } else {
        res.status(404).json({ message: "not found" });
    }
})

router.delete("/courses/:id", async (req, res) => {
    let course = await Course.findByPk(req.params.id);

    if (course) {
        await course.destroy();

        res.json({ message: "ok" });
    } else {
        res.status(404).json({ message: "not found" });
    }
})

module.exports = router;
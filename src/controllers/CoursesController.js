const express = require('express');
const Course = require('../models/Course');
const ValidateCreate = require('../operations/courses/ValidateCreate');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.get("/courses", async (req, res) => {
    console.log("Headers:")
    console.log(req.headers)
    let token = req.headers['authorization'].split(' ')[1]
    console.log(`token: ${token}`)
    let user = jwt.verify(token, 'secret');
    console.log('User:')
    console.log(user)
    let courses = await Course.findAll();

    res.json(courses);
});

router.post("/courses", async (req, res) => {

    let result = ValidateCreate(req.body);

    if (result.isValid) {
        let course = await Course.create(req.body);

        res.json(course);
    } else {
        // Return unprocessable_entity if we have errors
        res.status(422).json(result.payload);
    }
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
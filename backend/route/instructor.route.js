const express = require('express');
const instructorRoutes = express.Router();
const Instructor = require('../model/instructor');

instructorRoutes.route('/getInstructor').get((req,res) => {
    Instructor.find((err, instructors) => {
        if(err) {
            console.log(err);
        }
        else {
            res.json(instructors);
        }
    });
});

instructorRoutes.route('/addInstructor').post((req,res) => {
    let instructor = new Instructor(req.body);
    instructor.save()
        .then(instructor => {
            res.status(200).json({instructor : instructor})
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

module.exports = instructorRoutes;
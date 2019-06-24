const express = require('express');
const assignInstructorRoute = express.Router();
let AssignInstructor = require('../model/assign_instructor');

assignInstructorRoute.route('/getAssignedInstructors').get((req,res) => {
    AssignInstructor.find((err, assignInstructors) => {
        if(err) {
            console.log(err);
        }
        else {
            res.json({assignInstructors:assignInstructors});
        }
    });
});

assignInstructorRoute.route('/addAssignInstructor').post((req,res) => {
    let assignInstructor = new AssignInstructor(req.body);
    assignInstructor.save()
        .then(assignInstructor => {
            res.status(200).json({assignInstructor : assignInstructor});
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

module.exports = assignInstructorRoute;
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

assignInstructorRoute.route('/addAssignInstructors').post((req,res) => {
    let assignInstructor = new AssignInstructor(req.body);
    assignInstructor.save()
        .then(assignInstructor => {
            res.status(200).json({'assignInstructor' : 'Instructor assigned to subject'})
        })
        .catch((err) => {
            res.status(400).json('assigning failed')
        })
})

module.exports = assignInstructorRoute;
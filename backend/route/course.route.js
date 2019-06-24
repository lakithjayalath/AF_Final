const express = require('express');
const courseRoutes = express.Router();
let Course = require('../model/course');

courseRoutes.route('/getCourses').get((req,res) => {
    Course.find((err, courses) => {
        if(err) {
            console.log(err);
        }
        else {
            res.json(courses);
        }
    });
});

courseRoutes.route('/:id').get((req,res) => {
    let id = req.params.id;
    Course.findById(id, (err, course) => {
        res.json(course);
    });
});


courseRoutes.route('/addCourse').post((req,res) => {
    let course = new Course(req.body);
    course.save()
        .then(course => {
            res.status(200).json({course : course})
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

courseRoutes.route('/updateCourse/:id').post((req,res) => {
    Course.findById(req.params.id, (err,course) => {
        if(!course) {
            res.status(404).send("data is not found");
        }
        else {
            course.courseName = req.body.courseName;
            course.courseHead = req.body.courseHead;
            course.courseDuration = req.body.courseDuration;
        }

        course.save().then(course => {
            res.json('course updated');
        })
            .catch(err => {
                res.status(400).send('update not possible');
            });
    });
});

module.exports = courseRoutes;
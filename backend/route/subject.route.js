const express = require('express');
const subjectRoute = express.Router();
let Subject = require('../model/subject');

subjectRoute.route('/getSubjects').get((req,res) => {
    Subject.find((err, subjects) => {
        if(err) {
            console.log(err);
        }
        else {
            res.json({subjects:subjects});
        }
    })
});

subjectRoute.route('/addSubject').post((req,res) => {
    let subject = new Subject(req.body);
    subject.save()
        .then(subject => {
            res.status(200).json({'subject' : 'subject added'});
        })
        .catch((err) => {
            res.status(400).json('adding subject failed');
        });
});

module.exports = subjectRoute;
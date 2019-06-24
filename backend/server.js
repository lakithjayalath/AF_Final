const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 9000;
const courseRoute = require('./route/course.route');
const subjectRoute = require('./route/subject.route');
const instructorRoute = require('./route/instructor.route')
const assignInstructorRoute = require('./route/assignInstructor.route')

app.use(cors());
app.use(bodyParser.json());

app.use('/course', courseRoute);
app.use('/subject', subjectRoute);
app.use('/instructor', instructorRoute);
app.use('/assignInstructor', assignInstructorRoute);

mongoose.connect('mongodb://127.0.0.1:27017/courseweb', {useNewUrlParser : true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});
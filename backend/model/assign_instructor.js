const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AssignInstructor = new Schema({
    _id: {
        type: String,
        default: ''
    },
    subjectId: {
        type: String,
        default: ''
    },
    instructorId: {
        type: String,
        default: ''
    }
}, {
    collection : 'assignInstructor'
});

module.exports = mongoose.model('AssignInstructor', AssignInstructor);
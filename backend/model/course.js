const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Course = new Schema({
    _id: {
        type: String,
        default: ''
    },
    courseName: {
        type: String,
        default: ''
    },
    lecturerInCharge: {
        type: String,
        default: ''
    },
    courseDuration: {
        type: String,
        default: ''
    },
    subjectsOne : {
        type: [{type:String}],
        validate: [semOneLimit, '{PATH} exceeds the limit of 4'],
        default: ''
    },
    subjectsTwo : {
        type: [{type:String}],
        validate: [semTwoLimit, '{PATH} exceeds the limit of 6'],
        default: ''
    }
}, {
    collection : 'course'
});

function semOneLimit(val) {
    return val.length <= 4;
}

function semTwoLimit(val) {
    return val.length <= 6;
}

module.exports = mongoose.model('Course', Course);
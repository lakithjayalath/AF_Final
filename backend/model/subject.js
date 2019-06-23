const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Subject = new Schema({
    _id: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    hoursPerMonth: {
        type: String,
        default: ''
    }
}, {
    collection : 'subject'
});

module.exports = mongoose.model('Subject', Subject);
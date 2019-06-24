const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Instructor = new Schema({
    _id: {
        type: String,
        required: true
    },
    NIC_or_Passport: {
        type: String,
        required: true,
    },
    Faculty: {
        type: String,
        required: true
    }}, {
    collection : 'instructor'
});

module.exports = mongoose.model('Instructor',Instructor);
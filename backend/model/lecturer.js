const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Lecturer = new Schema({
    _id: {
        type: String,
        required: true
    },
    Name_With_Initial: {
        type: String,
        required: true
    },
    Full_Name: {
        type: String,
        required: true
    },
    NIC_or_Passport: {
        type: String,
        required: true
    },
    Address: {
        type:String,
        required: true
    },
    Contact_No: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Faculty: {
        type: String,
        required: true
    },
    Degree: {
      type: String,
      required: true
    },
    Qualifications: {
        type: String,
        required: true
    },
    Campus: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Profile_Photo: {
        type: String,
        required: true
    }
}, {
    collection : 'lecturer'
});

module.exports = mongoose.model('Lecturer', Lecturer);
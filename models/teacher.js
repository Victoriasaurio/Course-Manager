const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocenteSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    role: {
        type: String,
        default: 'DOCENT_ROLE'
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'E-mail is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    description: {
        type: String
    }
})

DocenteSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports = mongoose.model('teacher', DocenteSchema);
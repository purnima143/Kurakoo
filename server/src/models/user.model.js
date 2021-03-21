const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    course:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    year:{
        type: Number,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    clgName:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    hash_password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['user','admin'],
        default:'user'
    }
}, {timestamps: true });

userSchema.virtual("fullName").get(function () {
    return `${this.firstName}`;
  });
userSchema.methods = {
    authenticate: function(){
        return bcrypt.compare(password,this.hash_password);
    }
}
module.exports = mongoose.model('User', userSchema)
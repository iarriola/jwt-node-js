//import { Schema, Mongoose } from 'mongoose';
const mongoose = require('mongoose');
//const mongoose = Mongoose();

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    created_timestamp: {
        type: String,
        default: Date.now
    },
    updated_timestamp: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model("User", schema);

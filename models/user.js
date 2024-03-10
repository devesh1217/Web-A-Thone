import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,j
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    registrationDate: {
        type: Date,
        default: new Date(),
    }
});

const user = mongoose.model('user', schema);

export default user;
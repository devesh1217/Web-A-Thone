import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new mongoose.Schema({
    waiterName: {
        type: String,
        required: true,
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
    },
});

const waiter = mongoose.model('waiter', schema);

export default waiter;
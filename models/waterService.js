import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: order,
        required: true,
        unique:true
    },
    waiterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: waiter,
        required: true,
        unique:true
    },
    tableNo: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: new Date(),
    }    
});

const waiterService = mongoose.model('waiterService', schema);

export default waiterService;
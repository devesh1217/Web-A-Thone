import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        required: true,
        unique:true
    },
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
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

const order = mongoose.model('order', schema);

export default order;
import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique:true
    },
    userName: {
        type: String,
    },
    items: [{
        itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item',
            required: true
        },
        itemName: {
            type: String,
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
    status: {
        type: String,
        default: 'Ordered',
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
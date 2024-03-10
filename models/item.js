import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
        unique:true
    },
    price: {
        type: Number,
        required: true,
    },
    imageLink: {
        type: String,
        required: true,
    },
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    },
});

const item = mongoose.model('item', schema);

export default item;
import mongoose from "mongoose";
import { Schema } from "mongoose";

const schema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    imageLink: {
        type: String,
        required: true,
    },
});

const category = mongoose.model('category', schema);

export default category;
import { Schema } from "mongoose";
import mangoose from "mongoose";


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    savedPosts: {
        type: [String],
        default: []
    }

}, { timestamps: true }
);
export default mangoose.model("User", userSchema);
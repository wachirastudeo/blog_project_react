import { Schema } from "mongoose";
import mangoose from "mongoose";
const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    isFeature: {
        type: Boolean,
        default: false
    },
    visit: {
        type: Number,
        default: 0
    }

}, { timestamps: true }
);
export default mangoose.model("Post", postSchema);
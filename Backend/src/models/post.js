import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    txHash: {
        type: String,
        required: true,
        index: true
    },
    blockID: {
        type: String,
        required: true
    },
    scamType: {
        type: String,
        required: true,
        enum: ["Phishing", "Rugpull", "Impersonation", "Spam", "Other"]
    },
    comment: {
        type: String,
    },
    reportedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

export const Post = mongoose.model("Post", postSchema)
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    address: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
        lowercase: true
    },
    reports: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    reportCount: {
        type: Number,
        default: 0
    },
    relatedSenders: {
        type: [String],
        default: []
    },
    totalRecived: {
        type: Number,
        default: 0
    },
    lastReportedAt: {
        type: Date
    }

}, { timestamps: true })

export const user = mongoose.model("User", userSchema)
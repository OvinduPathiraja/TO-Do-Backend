import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
        title: {
                type: String,
                required: true,
        },
        user: {
                type: Number,
                required: true,
        },
        description: {
                type: String,
                required: true,
        },
        status: {
                type: String,
                required: true,
        },
        date: {
                type: Date,
        },
}, {
        timestamps: true,
}
);

export const Task = mongoose.model("Task", taskSchema);



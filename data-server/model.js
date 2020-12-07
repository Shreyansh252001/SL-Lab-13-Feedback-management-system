const mongoose = require("mongoose");
const FeedbackModel = mongoose.model("feedback",
    mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        score: {
            type: String,
            required: true
        }
    })
);
module.exports = FeedbackModel;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    post_title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Comments',CommentSchema);

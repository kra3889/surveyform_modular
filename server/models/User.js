const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    comment: String
}, { timestamps: true });

// add UserSchema to the mongosse models
mongoose.model('User', UserSchema);

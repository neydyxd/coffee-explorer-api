const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    image: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    shortInfo: {
        required: true,
        type: String,
    },
    longInfo: {
        required: true,
        type: String,
    },
});


module.exports = mongoose.model('user', newSchema);
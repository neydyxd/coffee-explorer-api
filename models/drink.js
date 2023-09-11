const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    type: {
        required: true,
        type: String,
      },
    name: {
        required: true,
        type: String,
      },
    ttk_milk: {
        required: true,
        type: String,
    },
    ttk_coffee: {
        required: true,
        type: String,
    },
    ttk_osnova: {
        required: true,
        type: String,
    },
    ttk_water: {
        required: true,
        type: String,
    },
    ttk_juice: {
        required: true,
        type: String,
    },
});


module.exports = mongoose.model('user', drinkSchema);
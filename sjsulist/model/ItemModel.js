const mongoose = require('mongoose');


const itemScema  = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    contact: {
        type: Number,

    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('itemModel', itemScema);
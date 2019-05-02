const mongoose = require('mongoose');


const itemSchema  = new mongoose.Schema({
    imageSrc: {
        type: String
    },
    
    itemName: {
        type: String 
    },

    description: {
        type: String 
    },
    price: {
        type: Number 
    },

    contact: {
        type: String
    },
    
    name: {
        type: String
    },

    condition: {
        type: String
    }

});

module.exports = mongoose.model('itemModel', itemSchema);
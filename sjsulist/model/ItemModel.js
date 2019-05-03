const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema; //we extract objectid from the Schema


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
    },
    itemPostedBy : {
        type: ObjectId,
        
    }

});

module.exports = mongoose.model('itemModel', itemSchema);
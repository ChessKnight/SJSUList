const mongoose  = require ('mongoose');

const StudyGroupSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: {
        type: [String]
    }
})
module.exports = mongoose.model('StudyGroup', StudyGroupSchema);
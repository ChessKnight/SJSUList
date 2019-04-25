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
    memberss: {
        type: [String]
    }
})
model.exports = mongoose.model('SudyGroup', StudyGroupSchema);
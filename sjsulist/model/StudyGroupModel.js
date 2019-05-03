const mongoose  = require ('mongoose');
const {ObjectId} = mongoose.Schema;

const StudyGroupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: {
        type: [String]
    },
    studyGroupPostedBy:{
        type: ObjectId,
        ref: "User"
    }
})
module.exports = mongoose.model('StudyGroup', StudyGroupSchema);
const mongoose  = require ('mongoose');
const {ObjectId} = mongoose.Schema;

const StudyGroupSchema = new mongoose.Schema({
    title: {
        type: String 
    },
    description: {
        type: String 
    },
    members: {
        type: [String]
    },
    studyGroupPostedBy:{
        type: ObjectId,
        ref: "User"
    },
    PostDate: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('StudyGroup', StudyGroupSchema);
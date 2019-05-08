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
        type: String ,
        ref: "User"
    },
    studyGroupPostedById:{
        type: String,
        ref: "User"
    },
    PostDate: {
        type: Date,
        default: Date.now
    },
    follow: [{
        type: ObjectId,
        ref: "User"
    }]
})


 

module.exports = mongoose.model('StudyGroup', StudyGroupSchema);
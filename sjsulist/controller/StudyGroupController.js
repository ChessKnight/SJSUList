const StudyGroup = require('../model/StudyGroupModel');


exports.getStudyGroup = (_req,res) =>{
    const studyGroup = StudyGroup.find();
    studyGroup.find((err,data)=> {
        if(err) {
            res.select('_id body').status(400).send(err);
        }
        res.json(data).send(200);
    }
    )
}
exports.addStudyGroup = (req,res) =>{
    const stydygroup = new StudyGroup(req.body);
    stydygroup.save((err)=>{
        if(err) {
            res.status(500).send(err);
        }
        res.json(stydygroup).send(200);
    })
    }


// exports.addStudyGroup = (res,req) =>{
//
// }
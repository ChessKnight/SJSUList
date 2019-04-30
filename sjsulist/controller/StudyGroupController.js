const StudyGroup = require('../model/StudyGroupModel');


exports.getStudyGroup = (_req,res) =>{
    const studyGroup = StudyGroup.find();
    studyGroup.find((err,data)=> {
        if(err) res.status(400).send(err);
      res.json(data).status(200);
    }
    )
}
exports.addStudyGroup = (req,res) =>{
    const studygroup = new StudyGroup(req.body);
    studygroup.save((err)=>{
        if(err) res.status(500).send(err);
       res.json(studygroup).status(200);
    })
    }
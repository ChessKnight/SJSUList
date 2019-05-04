const StudyGroup = require('../model/StudyGroupModel');
const _ = require('lodash');

//StudyGroupId:  to get the studygroupId in the database
exports.studyGroupId = (req,res,next,id)=>{
    StudyGroup.findById(id)
        .populate("itempostedBy", "_id name" ) //using populate because we used the information from the user model
        .exec((err,studyGroupPost)=>{
            if(err || !studyGroupPost){
                return res.status(400).json({
                    error: err
                })
            }
//get the studygroup information and addit to req function
            req.studyGroupPost = studyGroupPost;    
            next();
        });
};

exports.getstudygroup = (req, res) => {
  
  const studygroup = StudyGroup.find()
    .populate("itemPostedBy", " _id studentId")
    .select("_id title description members ")
    .then(studygroup => {
      res.json({ studygroup });
    })
    .catch(err => console.log(err));
};

exports.getStudyGroup = (_req,res) =>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    const studyGroup = StudyGroup.find();
    studyGroup.find((err,data)=> {
        if(err) res.status(400).send(err);
      res.json(data).status(200);
    }
    )
}
exports.addStudyGroup = (req,res) =>{
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  
    const studygroup = new StudyGroup(req.body);
    studygroup.studyGroupPostedBy = req.Userprofile;//get user profile info
    studygroup.save((err)=>{
      if (err) res.send(err).status(500);
      res.status(200).json(studygroup);
    });
    };

    exports.getStudyGroupByUserId = (req, res) => {
      StudyGroup.find({ studyGroupPostedBy: req.Userprofile._id })
        .populate("studyGroupPostedBy", "_id studentId name")
        .exec((err, studygroups) => {
          if (err) {
            return res.status(400).json({
              error: err
            });
          }
          res.json({ studygroups });
        });
    };

  //update item using item id and user id
exports.updatStudyGroup = (req,res,next) =>{
  let studygroup = req.studyGroupPost;
  studygroup = _.extend(studygroup, req.body);
  studygroup.updated = Date.now();
  studygroup.save(err=>{
    if(err){
    return res.status(400).json({error: err});}
     res.json(studygroup);
  });
};


//Delete item using post Id
exports.deleteStudyGroup = (req,res) =>{
  let studygroup = req.studyGroupPost;
  studygroup.remove((err,studygroup) =>{
    if(err){
      return res.status(400).json({
        error: err
      });
    }
     res.json({message: "study group rmoved"});
  });
};


const Item = require('../model/ItemModel')
const _ = require("lodash");
const fs = require("fs");


//ItemId:  to get the itemId in the database
exports.itemId = (req,res,next,id)=>{
    Item.findById(id)
        .populate("itempostedBy", "_id name" ) //using populate because we used the information from the user model
        .exec((err,itemPost)=>{
            if(err || !itemPost){
                return res.status(400).json({
                    error: err
                })
            }
//get the items information and addit to req function
            req.item = itemPost;    
            next();
        })
};


exports.getItems = (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const item = Item.find()
  item.find((err, item ) => {
      if (err) res.status(400).send(err);
    res.json(item ).status(200); 
  })
}

exports.getItem = (req,res)=>{
  const item = Item.find()
    .populate("itemPostedBy", " _id studentId")
    .select("_id itemName description ")
    .then(item=>{
       res.json({item});
    }).catch(err=>console.log(err));
};


//post on the database using user ID
exports.addItem = (req, res) => {
 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    const item = new Item(req.body);
    item.itemPostedBy = req.Userprofile; //get the user profile info
  item.save((err) => {
       if (err) res.status(500).send(err);
    res.status(200).json(item);
     });
};

//this function to get the user post using user ID
exports.getItemByUserId = (req,res)=>{
  Item.find({ itemPostedBy: req.Userprofile._id })
  .populate("itemPostedBy", "_id studentId name")
  .exec((err,items)=>{
    if(err) {
      return res.status(400).json({
        error: err
      });
    }
     res.json({items});
  });
};

//update item using item id and user id

exports.updateItem = (req,res,next) =>{
  let item = req.item;
  item = _.extend(item, req.body);
  item.updated = Date.now();
  item.save(err=>{
    if(err){
    return res.status(400).json({error: err});}
     res.json(item);
  });
};

//Delete item using post Id

exports.deleteItem = (req,res) =>{
  let item = req.item;
  item.remove((err,item) =>{
    if(err){
      return res.status(400).json({
        error: err
      });
    }
     res.json({message: "item rmoved"});
  });
};

//to check if the item  posted is for the user who post it 
exports.thePoster = (req,res,next)=>{
  let thePoster =
    req.item &&
    req.authantication &&
    req.item.itemPostedBy._id 
    == req.authantication._id;
    console.log("req.item", req.item);
    console.log("req.auth",req.authantication);
    console.log("req.item.postedby",req.item.itemPostedBy._id);
    console.log("req.auth.id",req.authantication._id);

  if(!thePoster){
    return res.status(403).json({
      error: "You can't change the item, Log in first"
    });
    next();
  }
}

 

 




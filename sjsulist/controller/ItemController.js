const Item = require('../model/ItemModel')


exports.getItem = (_req, res) => {
  Item.find((err, Item ) => {
      if (err) res.select("_id body").status(400).send(err);
    res.json(Item ).status(200); 
  })
}


exports.addItem = (req, res) => {
    const Item = new Item(req.body) 
  Item .save((err) => {
       if (err) res.status(500).send(err);
    res.json(Item ).status(200);
     });
};

 

 




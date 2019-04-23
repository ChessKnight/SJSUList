const Item = require('../model/ItemModel')


exports.getItem = (_req, res) => {
  const item = Item.find()
  item.find((err, item ) => {
      if (err) res.select("_id body").status(400).send(err);
    res.json(item ).status(200); 
  })
}


exports.addItem = (req, res) => {
    const item = new Item(req.body) 
  item.save((err) => {
       if (err) res.status(500).send(err);
    res.json(item).status(200);
     });
};

 

 




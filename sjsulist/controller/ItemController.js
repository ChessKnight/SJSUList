const Item = require('../model/ItemModel')


exports.getItem = (_req, res) => {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const item = Item.find()
  item.find((err, item ) => {
      if (err) res.status(400).send(err);
    res.json(item ).status(200); 
  })
}


exports.addItem = (req, res) => {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    const item = new Item(req.body) 
  item.save((err) => {
       if (err) res.status(500).send(err);
    res.json(item).status(200);
     });
};

 

 




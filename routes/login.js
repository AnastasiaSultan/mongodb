var express = require('express');
var router = express.Router();
const userModel = require('./../src/model/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.index(req,res);
});
 // console.log('/:login/:password',req.params.login,req.params.password)
 // res.set('Content-Type', 'application/json');
 // if (req.params.login === '1' && req.params.password === '2'){
 //   res.status(200) 
 //   res.end()
 // }else{
 //   res.status(304)
 //   res.end()



router.post('/:login/:password/:name', function(req, res, next) {
  userModel.create(req,res);
});


 // console.log('/',req.body)
  // res.set('Content-Type', 'application/json');

  userModel.findOne({ login: req.body.login, password:req.body.password }, function (err, doc) {
    if (err || doc==null) {
      console.log(err);
      res.status(403)
      res.end()
      return
    }
    console.log('doc=',doc)
    res.send(doc)
  });


  // if (req.body.login === '1' && req.body.password === '2'){
  //   res.status(200) 
  //   let b = req.body
  //   b.d = new Date()
  //   res.send(b)
  // }else{
  //   res.status(304)
  //   res.end()
  // }


module.exports = router;

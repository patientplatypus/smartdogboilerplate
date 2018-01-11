var express = require('express');
var router = express.Router();
var Dummy = require('../models/dummySchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function dummyreturn(res){
  Dummy.find({}, function(err,names){
    console.log('value of names: ', names);
   res.json(names);
  });
}

router.post('/addname', function(req,res,next){
  console.log('inside addname');
  console.log('value of name is : ', req.body.name);
  console.log('value of body is : ', req.body);
  var name = new Dummy({
    name: req.body.name,
  })
  console.log('value of name after set is : ', name);

  name.save(function(err,name){
    if (err) {return next(err)}
    dummyreturn(res);
  })
})


router.get('/allnames', function (req, res) {
  console.log('inside allnames');
  dummyreturn(res);
})

router.delete('/deleteName/:name',function(req,res,next){
  console.log("inside delete method");
  console.log("value of name: ", req.params.name);

  Dummy.remove({
           name: req.params.name
       }, function(err, name) {
           if (err)
               res.send(err);
           dummyreturn(res);
       });

});


module.exports = router;

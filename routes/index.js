var entities = require('../data/models/entities');
var express = require('express');
var router = express.Router();

var provincia = entities.Provincia;

var provincias = provincia.findAll().then(function(provincias){
    provincias = provincias.map(function(provincia){ return provincia.toJSON() });
    return provincias;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', provincias: provincias });
});

/* GET Fb page. */
router.get('/facebook', function(req, res) {
   res.render('facebook', { title: 'Facebook Login' });
});

console.log(provincias);



module.exports = router;

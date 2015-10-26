var express = require('express');
var router = express.Router();
//var Project = require('../data/models/project');

/* GET projects listing. */
router.get('/', function(req, res, next) {
    res.render('projects/index');
});

router.get('/create', function(req, res, next) {
    res.render('projects/create');
});

module.exports = router;
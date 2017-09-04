var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Live long and prosper!'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var starships = require('./starships-queries');

router.get('/api/starships', starships.getAllStarships);
router.get('/api/starships/:id', starships.getStarship);
router.post('/api/starships', starships.createStarship);
router.put('/api/starships/:id', starships.updateStarship);
router.delete('/api/starships/:id', starships.removeStarship);

module.exports = router;

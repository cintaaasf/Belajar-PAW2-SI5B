var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/user', (req, res, next) => {
  console.log('Router middleware - Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Router middleware - Request Type:', req.method)
  next()
});

router.get('/user', (req, res) => {
  res.send("Hello dari contoh router middleware");

  
});

module.exports = router;

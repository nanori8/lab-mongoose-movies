const express = require('express'); // use express library to create router
const router = express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

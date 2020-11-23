const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.use('/user', require('./user.js'));
router.use('/rfp', require('./rfp.js'));

module.exports = router;

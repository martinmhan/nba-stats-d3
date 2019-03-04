const router = require('express').Router();
const { getPlayerData } = require('./controller');

router.route('/data/')
  .get(getPlayerData);

module.exports = router;

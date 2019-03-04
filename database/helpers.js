const db = require('./index.js');

module.exports = {
  getAllPlayersData: () => (db.query('SELECT DISTINCT * FROM player_data;')),
};

const pool = require('./index.js');

module.exports = {
  getAllPlayersData: async () => {
    try {
      const client = await pool.connect();
      const data = await client.query('SELECT DISTINCT * FROM player_data;');
      client.release();
      return data;
    } catch (err) {
      return console.error(err);
    }
  },
};

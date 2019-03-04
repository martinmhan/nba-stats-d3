const { getAllPlayersData } = require('../database/helpers');

module.exports = {
  getPlayerData: async (req, res) => {
    try {
      const { rows } = await getAllPlayersData();
      res.send(rows);
    } catch (err) {
      console.error(err);
    }
  },
};

import React from 'react';
import PropTypes from 'prop-types';
import PlayerInfoHeader from './PlayerInfoHeader';
import PlayerStats from './PlayerInfoStats';

const PlayerInfoContent = ({ selectedPlayer }) => (
  <div className="playerinfocontent">
    <PlayerInfoHeader player={selectedPlayer} />
    <PlayerStats player={selectedPlayer} />
  </div>
);

PlayerInfoContent.propTypes = {
  selectedPlayer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlayerInfoContent;

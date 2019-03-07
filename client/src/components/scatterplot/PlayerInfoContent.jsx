import React from 'react';
import PropTypes from 'prop-types';
import PlayerInfoHeader from './PlayerInfoHeader';
import PlayerInfo from './PlayerInfo';

const PlayerInfoContent = ({ selectedPlayer }) => (
  <div className="playerinfocontent">
    <PlayerInfoHeader player={selectedPlayer} />
    <PlayerInfo player={selectedPlayer} />
  </div>
);

PlayerInfoContent.propTypes = {
  selectedPlayer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlayerInfoContent;

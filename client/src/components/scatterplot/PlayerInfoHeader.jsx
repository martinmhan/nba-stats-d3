import React from 'react';
import PropTypes from 'prop-types';

const PlayerInfoHeader = ({ player }) => (
  <h1>
    {`${player.first_name} ${player.last_name}`}
  </h1>
);

PlayerInfoHeader.propTypes = {
  player: PropTypes.string.isRequired,
};

export default PlayerInfoHeader;

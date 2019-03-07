import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/scatterplot/PlayerInfoHeader.css';

const PlayerInfoHeader = ({ player }) => (
  <h1 className={styles.playerinfoheader}>
    {`${player.first_name} ${player.last_name}`}
  </h1>
);

PlayerInfoHeader.propTypes = {
  player: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlayerInfoHeader;

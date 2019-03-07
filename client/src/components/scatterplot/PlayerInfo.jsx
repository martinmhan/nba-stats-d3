import React from 'react';
import PropTypes from 'prop-types';
import PlayerInfoStat from './PlayerInfoStat';
import styles from '../../styles/scatterplot/PlayerInfo.css';

const PlayerInfo = ({ player }) => (
  <div className={styles.playerinfo}>
    {Object.keys(player).map(stat => (
      <PlayerInfoStat stat={stat} value={player[stat]} />
    ))}
  </div>
);

PlayerInfo.propTypes = {
  player: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PlayerInfo;

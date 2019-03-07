import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/scatterplot/PlayerInfoStat.css';

const includedStats = ['team_name', 'team_market', 'primary_position', 'games_played', 'minutes_per_game', 'points_per_game', 'rebounds_per_game', 'assists_per_game', 'steals_per_game', 'blocks_per_game', 'turnovers_per_game'];
const formatStat = stat => (stat.split('_').map(a => a[0].toUpperCase() + a.slice(1)).join(' '));

const PlayerInfoStat = ({ stat, value }) => (
  includedStats.includes(stat)
    ? (
      <div className={styles.playerinfostat}>
        {`${formatStat(stat)}: ${value}`}
      </div>
    )
    : null
);

PlayerInfoStat.propTypes = {
  stat: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default PlayerInfoStat;

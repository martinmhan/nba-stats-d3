import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/scatterplot/PlayerInfoStat.css';

const excludedStats = ['id', 'api_id', 'first_name', 'last_name', 'full_name', 'position'];
const formatStat = stat => (stat.split('_').map(a => a[0].toUpperCase() + a.slice(1)).join(' '));

const PlayerInfoStat = ({ stat, value }) => (
  excludedStats.includes(stat)
    ? null
    : (
      <div className={styles.playerinfostat}>
        {`${formatStat(stat)}: ${value}`}
      </div>
    )
);

PlayerInfoStat.propTypes = {
  stat: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default PlayerInfoStat;

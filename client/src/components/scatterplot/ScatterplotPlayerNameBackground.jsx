import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Scatterplot/ScatterplotPlayerNameBackground.css';

const ScatterplotPlayerNameBackground = ({ player }) => (
  <h1 className={styles.scatterplotplayernamebackground}>
    {`${player.first_name} ${player.last_name}`}
  </h1>
);

ScatterplotPlayerNameBackground.propTypes = {
  player: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ScatterplotPlayerNameBackground;

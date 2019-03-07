import React from 'react';
import PropTypes from 'prop-types';
import PlayerInfoContent from './PlayerInfoContent';
import styles from '../../styles/scatterplot/PlayerInfoView.css';

const PlayerInfoView = ({ selectedPlayer, togglePlayerInfoView }) => (
  <div className={styles.playerinfoview}>
    <button type="button" onClick={togglePlayerInfoView} />
    {
      selectedPlayer
        ? <PlayerInfoContent selectedPlayer={selectedPlayer} />
        : null
    }
  </div>
);

PlayerInfoView.defaultProps = {
  selectedPlayer: null,
};

PlayerInfoView.propTypes = {
  selectedPlayer: PropTypes.objectOf(PropTypes.any),
  togglePlayerInfoView: PropTypes.func.isRequired,
};

export default PlayerInfoView;

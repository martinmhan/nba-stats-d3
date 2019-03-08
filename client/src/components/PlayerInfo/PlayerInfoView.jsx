import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInfoContent from './PlayerInfoContent';
import styles from '../../styles/scatterplot/PlayerInfoView.css';

class PlayerInfoView extends Component {
  componentDidMount = () => { this.playerinfo.focus(); };

  componentDidUpdate = () => { this.playerinfo.focus(); }

  setRef = (element) => { this.playerinfo = element; };

  render = () => {
    const { selectedPlayer, updateSelectedPlayer } = this.props;

    return (
      <div className={styles.playerinfoview} tabIndex="-1" ref={this.setRef} onBlur={() => { updateSelectedPlayer(null); }}>
        {
          this.props.selectedPlayer
            ? <PlayerInfoContent selectedPlayer={selectedPlayer} />
            : null
        }
      </div>
    );
  };
}

PlayerInfoView.defaultProps = {
  selectedPlayer: null,
};

PlayerInfoView.propTypes = {
  selectedPlayer: PropTypes.objectOf(PropTypes.any),
  updateSelectedPlayer: PropTypes.func.isRequired,
};

export default PlayerInfoView;

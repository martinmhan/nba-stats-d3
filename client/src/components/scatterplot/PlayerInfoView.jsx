import React from 'react';
import PropTypes from 'prop-types';

const PlayerInfoView = ({ selectedPlayer, togglePlayerInfoView }) => (
  <div className="playerinfoview">
    {JSON.stringify(selectedPlayer)}
    <button type="button" onClick={togglePlayerInfoView} />
  </div>
);

PlayerInfoView.propTypes = {
  selectedPlayer: PropTypes.objectOf(PropTypes.any).isRequired,
  togglePlayerInfoView: PropTypes.func.isRequired,
};

export default PlayerInfoView;

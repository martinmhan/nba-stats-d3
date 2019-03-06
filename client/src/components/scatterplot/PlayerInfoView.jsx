import React from 'react';
import PropTypes from 'prop-types';

const PlayerInfoView = ({ selectedPlayer, togglePlayerInfoView }) => (
  <div className="playerinfoview">
    <button type="button" onClick={togglePlayerInfoView} />
    {
      selectedPlayer
        ? (
          <h1 className="playerinfoviewname">
            {`${selectedPlayer.first_name} ${selectedPlayer.last_name}`}
          </h1>
        )
        : null
    }
    {/* {JSON.stringify(selectedPlayer)} */}
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scatterplot from './Scatterplot';
import ScatterplotFiltersList from './ScatterplotFiltersList';
import { allPositions, allTeams } from '../../reducers/ScatterplotReducers';
import styles from '../../styles/scatterplot/ScatterplotView.css';

class ScatterplotView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount = () => {
    const checkboxes = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].checked = 'true';
    }
  };

  render = () => {
    const {
      playerData,
      xStat,
      yStat,
      positionFilters,
      teamFilters,
      updateScatterplotXStat,
      updateScatterplotYStat,
      updateScatterplotPositionFilters,
      updateScatterplotTeamFilters,
    } = this.props;

    const scatterplotData = playerData
      .filter(player => positionFilters.includes(player.primary_position) && teamFilters.includes(player.team_name));

    const stats = ['Games Played', 'Minutes Per Game', 'Points Per Game', 'Off Rebounds Per Game', 'Def Rebounds Per Game', 'Rebounds Per Game', 'Assists Per Game', 'Steals Per Game', 'Blocks Per Game', 'Turnovers Per Game', 'Personal Fouls Per Game', 'Flagrant Fouls Per Game', 'Blocked Att Per Game', 'Field Goals Made Per Game', 'Field Goals Att Per Game', 'Three Points Made Per Game', 'Three Points Att Per Game', 'Free Throws Made Per Game', 'Free Throws Att Per Game', 'Two Points Made Per Game', 'Two Points Att Per Game', 'Efficiency Per Game', 'True Shooting Att Per Game', 'Points Off Turnovers Per Game', 'Points In Paint Made Per Game', 'Points In Paint Att Per Game', 'Points In Paint Per Game', 'Fouls Drawn Per Game', 'Offensive Fouls Per Game', 'Fast Break Pts Per Game', 'Fast Break Att Per Game', 'Fast Break Made Per Game', 'Second Chance Pts Per Game', 'Second Chance Att Per Game', 'Second Chance Made Per Game'];
    const positions = allPositions;
    const teams = allTeams;

    return (
      <div className={styles.scatterplotview} ref={this.ref}>
        <ScatterplotFiltersList
          playerData={playerData}
          stats={stats}
          positions={positions}
          teams={teams}
          positionFilters={positionFilters}
          teamFilters={teamFilters}
          updateXStat={updateScatterplotXStat}
          updateYStat={updateScatterplotYStat}
          updateScatterplotPositionFilters={updateScatterplotPositionFilters}
          updateScatterplotTeamFilters={updateScatterplotTeamFilters}
        />
        <Scatterplot
          scatterplotData={scatterplotData}
          playerData={playerData}
          xStat={xStat}
          yStat={yStat}
          teams={teams}
        />
      </div>
    );
  };
}

ScatterplotView.propTypes = {
  playerData: PropTypes.arrayOf(PropTypes.object).isRequired,
  xStat: PropTypes.string.isRequired,
  yStat: PropTypes.string.isRequired,
  positionFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateScatterplotXStat: PropTypes.func.isRequired,
  updateScatterplotYStat: PropTypes.func.isRequired,
  updateScatterplotPositionFilters: PropTypes.func.isRequired,
  updateScatterplotTeamFilters: PropTypes.func.isRequired,
};

export default ScatterplotView;

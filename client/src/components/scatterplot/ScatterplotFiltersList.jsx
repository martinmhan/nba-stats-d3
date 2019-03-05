import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/scatterplot/ScatterplotFiltersList.css';
import { ScatterplotAxisSelector, ScatterplotFilter } from './ScatterplotFilter';

const ScatterplotFiltersList = (props) => {
  const {
    stats,
    positions,
    teams,
    positionFilters,
    teamFilters,
    updateXStat,
    updateYStat,
    updateScatterplotPositionFilters,
    updateScatterplotTeamFilters,
  } = props;

  return (
    <div className={styles.scatterplotfilterslist}>
      <ScatterplotAxisSelector name="X Axis" values={stats} updateStat={updateXStat} />
      <ScatterplotAxisSelector name="Y Axis" values={stats} updateStat={updateYStat} />
      <ScatterplotFilter
        name="Position(s)"
        values={positions}
        filters={positionFilters}
        updateFilters={updateScatterplotPositionFilters}
      />
      <ScatterplotFilter
        name="Team(s)"
        values={teams}
        filters={teamFilters}
        updateFilters={updateScatterplotTeamFilters}
      />
    </div>
  );
};

ScatterplotFiltersList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
  positions: PropTypes.arrayOf(PropTypes.string).isRequired,
  teams: PropTypes.arrayOf(PropTypes.string).isRequired,
  positionFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  teamFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateXStat: PropTypes.func.isRequired,
  updateYStat: PropTypes.func.isRequired,
  updateScatterplotPositionFilters: PropTypes.func.isRequired,
  updateScatterplotTeamFilters: PropTypes.func.isRequired,
};

export default ScatterplotFiltersList;

import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFiltersList.css';
import { ScatterplotAxisSelector, ScatterplotFilter } from './ScatterplotFilter';

export const ScatterplotFiltersList = ({
  stats,
  positions,
  teams,
  positionFilters,
  teamFilters,
  updateXStat,
  updateYStat,
  updateScatterplotPositionFilters,
  updateScatterplotTeamFilters}) => (
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

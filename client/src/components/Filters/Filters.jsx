import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { allStats, allPositions, allTeams } from '../../reducers/reducers';
import ScatterplotFilter from './Filter';
import ScatterplotAxisSelector from './AxisSelector';
import styles from '../../styles/Filters/Filters.css';

class ScatterplotFiltersList extends Component {
  static propTypes = {
    positionFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    teamFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateXStat: PropTypes.func.isRequired,
    updateYStat: PropTypes.func.isRequired,
    updatePositionFilters: PropTypes.func.isRequired,
    updateTeamFilters: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    const checkboxes = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxes.length; i += 1) {
      checkboxes[i].checked = 'true';
    }
  };

  render = () => {
    const {
      positionFilters,
      teamFilters,
      updateXStat,
      updateYStat,
      updatePositionFilters,
      updateTeamFilters,
    } = this.props;

    return (
      <div className={styles.scatterplotfilterslist}>
        <ScatterplotAxisSelector name="X Axis" values={allStats} updateStat={updateXStat} />
        <ScatterplotAxisSelector name="Y Axis" values={allStats} updateStat={updateYStat} />
        <ScatterplotFilter
          name="Position(s)"
          values={allPositions}
          filters={positionFilters}
          updateFilters={updatePositionFilters}
        />
        <ScatterplotFilter
          name="Team(s)"
          values={allTeams}
          filters={teamFilters}
          updateFilters={updateTeamFilters}
        />
      </div>
    );
  };
}

export default ScatterplotFiltersList;

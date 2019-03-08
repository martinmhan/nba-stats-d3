import { connect } from 'react-redux';
import ScatterplotFiltersList from '../components/Filters/Filters';
import {
  updateXStat,
  updateYStat,
  updatePositionFilters,
  updateTeamFilters,
} from '../actions/actions';

const mapStateToProps = state => ({
  playerData: state.playerData,
  xStat: state.xStat,
  yStat: state.yStat,
  positionFilters: state.positionFilters,
  teamFilters: state.teamFilters,
  playerInfoViewOpen: state.playerInfoViewOpen,
  selectedPlayer: state.selectedPlayer,
  hoveredPlayer: state.hoveredPlayer,
});

const mapDispatchToProps = dispatch => ({
  updateXStat: (xStat) => { dispatch(updateXStat(xStat)); },
  updateYStat: (yStat) => { dispatch(updateYStat(yStat)); },
  updatePositionFilters: (positionFilters) => { dispatch(updatePositionFilters(positionFilters)); },
  updateTeamFilters: (teamFilters) => { dispatch(updateTeamFilters(teamFilters)); },
});

const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotFiltersList);

export default FiltersContainer;

import { connect } from 'react-redux';
import ScatterplotView from '../components/scatterplot/ScatterplotView';
import {
  updateScatterplotXStat,
  updateScatterplotYStat,
  updateScatterplotPositionFilters,
  updateScatterplotTeamFilters,
} from '../actions/Scatterplot';

const mapStateToProps = state => ({
  playerData: state.playerData,
  xStat: state.xStat,
  yStat: state.yStat,
  positionFilters: state.positionFilters,
  teamFilters: state.teamFilters,
});

const mapDispatchToProps = dispatch => ({
  updateScatterplotXStat: (xStat) => { dispatch(updateScatterplotXStat(xStat)); },
  updateScatterplotYStat: (yStat) => { dispatch(updateScatterplotYStat(yStat)); },
  updateScatterplotPositionFilters: (positionFilters) => { dispatch(updateScatterplotPositionFilters(positionFilters)); },
  updateScatterplotTeamFilters: (teamFilters) => { dispatch(updateScatterplotTeamFilters(teamFilters)); },
});

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;

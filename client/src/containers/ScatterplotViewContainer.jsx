import { connect } from 'react-redux';
import ScatterplotView from '../components/scatterplot/ScatterplotView';
import {
  updateScatterplotXStat,
  updateScatterplotYStat,
  updateScatterplotPositionFilters,
  updateScatterplotTeamFilters,
  togglePlayerInfoView,
  updateSelectedPlayer,
  updateHoveredPlayer,
} from '../actions/Scatterplot';

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
  updateScatterplotXStat: (xStat) => { dispatch(updateScatterplotXStat(xStat)); },
  updateScatterplotYStat: (yStat) => { dispatch(updateScatterplotYStat(yStat)); },
  updateScatterplotPositionFilters: (positionFilters) => { dispatch(updateScatterplotPositionFilters(positionFilters)); },
  updateScatterplotTeamFilters: (teamFilters) => { dispatch(updateScatterplotTeamFilters(teamFilters)); },
  togglePlayerInfoView: () => { dispatch(togglePlayerInfoView()); },
  updateSelectedPlayer: (selectedPlayer) => { dispatch(updateSelectedPlayer(selectedPlayer)); },
  updateHoveredPlayer: (hoveredPlayer) => { dispatch(updateHoveredPlayer(hoveredPlayer)); },
});

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;

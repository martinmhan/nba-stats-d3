import { connect } from 'react-redux';
import ScatterplotFiltersList from '../components/Filters/ScatterplotFiltersList';
import {
  updatePlayerData,
  updateXStat,
  updateYStat,
  updatePositionFilters,
  updateTeamFilters,
  updateSelectedPlayer,
  updateHoveredPlayer,
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
  updatePlayerData: (playerData) => { dispatch(updatePlayerData(playerData)); },
  updateXStat: (xStat) => { dispatch(updateXStat(xStat)); },
  updateYStat: (yStat) => { dispatch(updateYStat(yStat)); },
  updatePositionFilters: (positionFilters) => { dispatch(updatePositionFilters(positionFilters)); },
  updateTeamFilters: (teamFilters) => { dispatch(updateTeamFilters(teamFilters)); },
  updateSelectedPlayer: (selectedPlayer) => { dispatch(updateSelectedPlayer(selectedPlayer)); },
  updateHoveredPlayer: (hoveredPlayer) => { dispatch(updateHoveredPlayer(hoveredPlayer)); },
});

const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotFiltersList);

export default FiltersContainer;

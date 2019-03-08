import { connect } from 'react-redux';
import Scatterplot from '../components/Scatterplot/Scatterplot';
import { updatePlayerData, updateSelectedPlayer, updateHoveredPlayer } from '../actions/actions';

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
  updateSelectedPlayer: (selectedPlayer) => { dispatch(updateSelectedPlayer(selectedPlayer)); },
  updateHoveredPlayer: (hoveredPlayer) => { dispatch(updateHoveredPlayer(hoveredPlayer)); },
});

const ScatterplotContainer = connect(mapStateToProps, mapDispatchToProps)(Scatterplot);

export default ScatterplotContainer;

import { connect } from 'react-redux';
import PlayerInfo from '../components/PlayerInfo/PlayerInfo';
import { updateSelectedPlayer } from '../actions/actions';

const mapStateToProps = state => ({
  selectedPlayer: state.selectedPlayer,
});

const mapDispatchToProps = dispatch => ({
  updateSelectedPlayer: (selectedPlayer) => { dispatch(updateSelectedPlayer(selectedPlayer)); },
});

const PlayerInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);

export default PlayerInfoContainer;

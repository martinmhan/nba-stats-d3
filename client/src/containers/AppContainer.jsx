import { connect } from 'react-redux';
import { updatePlayerData } from '../actions/actions';
import App from '../components/App';

const mapStateToProps = state => ({
  playerData: state.playerData,
});

const mapDispatchToProps = dispatch => ({
  updatePlayerData: (playerData) => { dispatch(updatePlayerData(playerData)); },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

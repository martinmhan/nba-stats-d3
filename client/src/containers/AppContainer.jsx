import { connect } from 'react-redux';
import { App } from '../components/App';
import { updatePlayerData } from '../actions/Scatterplot';

const mapStateToProps = state => ({
  playerData: state.playerData,
});

const mapDispatchToProps = dispatch => ({
  updatePlayerData: (playerData) => { dispatch(updatePlayerData(playerData)); },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

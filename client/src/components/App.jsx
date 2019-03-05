import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ScatterplotViewContainer from '../containers/ScatterplotViewContainer';
import styles from '../styles/App.css';

class App extends Component {
  componentWillMount = async () => {
    try {
      const { data } = await Axios.get('/api/data/');
      this.props.updatePlayerData(data);
    } catch (err) {
      console.error(err);
    }
  };

  render = () => (
    <div className={styles.app}>
      <ScatterplotViewContainer />
    </div>
  );
}

App.propTypes = {
  updatePlayerData: PropTypes.func.isRequired,
};

export default App;

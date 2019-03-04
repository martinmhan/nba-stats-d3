import React, { Component } from 'react';
import Axios from 'axios';
import ScatterplotViewContainer from '../containers/ScatterplotViewContainer';
import styles from '../styles/App.css';

export class App extends Component {
  componentWillMount = async () => {
    try {
      const { data } = await Axios.get('/api/data/');
      this.props.updateScatterplotData(data);
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

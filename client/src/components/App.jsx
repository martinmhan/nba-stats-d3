import React from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import ScatterplotContainer from '../containers/ScatterplotContainer';
import styles from '../styles/App.css';

const App = () => (
  <div className={styles.app}>
    <FiltersContainer />
    <ScatterplotContainer />
  </div>
);

export default App;

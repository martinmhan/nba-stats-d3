import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/scatterplot/ScatterplotFilterOption.css';

const ScatterplotFilterOption = ({ value, updateFilters }) => (
  <div className={styles.scatterplotfilteroption}>
    <input
      type="checkbox"
      className={styles.checkbox}
      onClick={updateFilters}
    />
    {value}
  </div>
);

ScatterplotFilterOption.propTypes = {
  value: PropTypes.string.isRequired,
  updateFilters: PropTypes.func.isRequired,
};

export default ScatterplotFilterOption;

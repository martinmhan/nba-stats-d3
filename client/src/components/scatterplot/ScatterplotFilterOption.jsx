import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFilterOption.css';

export const ScatterplotFilterOption = ({ value, filters, updateFilters }) => (
  <div className={styles.scatterplotfilteroption}>
    <input
      type="checkbox"
      className={styles.checkbox}
      onClick={updateFilters}
    />
    {value}
  </div>
);

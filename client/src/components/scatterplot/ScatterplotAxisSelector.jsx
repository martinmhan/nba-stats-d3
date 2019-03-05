import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/scatterplot/ScatterplotFilter.css';

const ScatterplotAxisSelector = ({ name, values, updateStat }) => (
  <div className={styles.scatterplotfilter}>
    <div className={styles.scatterplotfiltername}>
      {name}
    </div>
    <select
      className={styles.scatterplotfilterselect}
      onChange={(e) => { updateStat(e.target.value.split(' ').map(a => a.toLowerCase()).join('_')); }}
    >
      {values.map((value, i) => (
        <option value={value} key={i}>{value}</option>
      ))}
    </select>
  </div>
);

ScatterplotAxisSelector.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateStat: PropTypes.func.isRequired,
};

export default ScatterplotAxisSelector;

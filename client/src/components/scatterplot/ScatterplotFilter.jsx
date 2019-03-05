import React from 'react';
import PropTypes from 'prop-types';
import ScatterplotFilterOption from './ScatterplotFilterOption';
import styles from '../../styles/scatterplot/ScatterplotFilter.css';

export const ScatterplotAxisSelector = ({ name, values, updateStat }) => (
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

export const ScatterplotFilter = ({ name, values, filters, updateFilters }) => (
  <div className={styles.scatterplotfilter}>
    <div className={styles.scatterplotfiltername}>
      {name}
    </div>
    <div className={styles.scatterplotoptionscontainer}>
      <ScatterplotFilterOption
        value="Toggle All"
        updateFilters={(e) => {
          const checkboxes = Array.prototype.slice.call(e.target.parentElement.parentElement.children) // grab all filter options
            .map(a => a.children[0]); // get checkbox element for each
          const toggleStatus = checkboxes[0].checked; // get checked boolean status for Toggle All button
          const newFiltersList = toggleStatus ? values : []; // determine whether to toggle all or no filters
          for (let i = 1; i < checkboxes.length; i += 1) {
            checkboxes[i].checked = toggleStatus;
          }
          updateFilters(newFiltersList);
        }}
      />
      {values.map((value, i) => (
        <ScatterplotFilterOption
          value={value}
          key={i}
          filters={filters}
          updateFilters={
            (e) => {
              if (e.target.checked) {
                const newFilter = e.target.parentElement.innerText;
                const newFiltersList = [...new Set([...filters, newFilter])];
                updateFilters(newFiltersList);
              } else {
                const filterToRemove = e.target.parentElement.innerText;
                const newFiltersList = filters.filter(a => a !== filterToRemove);
                updateFilters(newFiltersList);
              }
            }
          }
        />
      ))}
    </div>
  </div>
);

ScatterplotAxisSelector.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateStat: PropTypes.func.isRequired,
};

ScatterplotFilter.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateFilters: PropTypes.func.isRequired,
};

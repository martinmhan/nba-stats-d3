import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import styles from '../../styles/scatterplot/ScatterplotDot.css';

class ScatterplotDots extends Component {
  componentDidMount = () => { this.renderDots(); }

  componentDidUpdate = () => { this.renderDots(); }

  renderDots = () => {
    const {
      scatterplotData,
      xScale,
      yScale,
      rScale,
      colorScale,
      xStat,
      yStat,
    } = this.props;

    const t = d3.transition()
      .duration(750);

    const circles = d3.select('.circles')
      .selectAll('circle')
      .data(scatterplotData);

    circles.exit().transition(t)
      .attr('cy', yScale(0))
      .remove();

    circles.transition(t)
      .attr('cx', d => xScale(d[xStat]))
      .attr('cy', d => yScale(d[yStat]))
      .attr('r', d => rScale(d.games_played))
      .attr('fill', d => colorScale(d.team_name));

    circles.enter().append('circle')
      .attr('cx', d => xScale(d[xStat]))
      .attr('cy', yScale(0))
      .attr('r', 8)
      .attr('fill', 'grey')
      .transition(t)
      .attr('cy', d => yScale(d[yStat]))
      .attr('r', d => rScale(d.games_played))
      .attr('class', styles.scatterplotdot)
      .attr('fill', d => colorScale(d.team_name));
  };

  render = () => (
    <g className="circles" />
  );
}

ScatterplotDots.propTypes = {
  scatterplotData: PropTypes.arrayOf(PropTypes.object).isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  rScale: PropTypes.func.isRequired,
  colorScale: PropTypes.func.isRequired,
  xStat: PropTypes.string.isRequired,
  yStat: PropTypes.string.isRequired,
};

export default ScatterplotDots;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

class ScatterplotDots extends Component {
  componentDidMount = () => { this.renderDots(); }

  componentDidUpdate = () => { this.renderDots(); }

  renderDots = () => {
    const {
      scatterplotData,
      xScale,
      yScale,
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
      .attr('r', 8);

    circles.enter().append('circle')
      .attr('cx', d => xScale(d[xStat]))
      .attr('cy', yScale(0))
      .attr('r', 8)
      .attr('fill', 'grey')
      .transition(t)
      .attr('cy', d => yScale(d[yStat]));
  };

  render = () => (
    <g className="circles" />
  );
}

ScatterplotDots.propTypes = {
  scatterplotData: PropTypes.arrayOf(PropTypes.object).isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  xStat: PropTypes.string.isRequired,
  yStat: PropTypes.string.isRequired,
};

export default ScatterplotDots;

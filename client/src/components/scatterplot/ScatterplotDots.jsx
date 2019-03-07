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
      updateSelectedPlayer,
      togglePlayerInfoView,
      updateHoveredPlayer,
    } = this.props;

    const t = d3.transition()
      .duration(500);

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
      .on('click', (d) => {
        if (!this.props.playerInfoViewOpen) { togglePlayerInfoView(); }
        updateSelectedPlayer(d);
      })
      .on('mouseover', (d) => { updateHoveredPlayer(d); })
      .on('mouseout', () => { updateHoveredPlayer(null); })
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
  playerInfoViewOpen: PropTypes.bool.isRequired,
  updateSelectedPlayer: PropTypes.func.isRequired,
  togglePlayerInfoView: PropTypes.func.isRequired,
  updateHoveredPlayer: PropTypes.func.isRequired,
};

export default ScatterplotDots;

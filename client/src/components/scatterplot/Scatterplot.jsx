import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale-chromatic';
import ScatterplotDots from './ScatterplotDots';
import ScatterplotAxis from './ScatterplotAxis';
import styles from '../../styles/scatterplot/Scatterplot.css';

class Scatterplot extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      lPadding: 60,
      rPadding: 40,
      tPadding: 40,
      bPadding: 60,
      width: 0,
      height: 0,
    };
  }

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  };

  updateDimensions = () => {
    const width = Math.max(800, this.ref.current.clientWidth);
    const height = Math.max(600, this.ref.current.clientHeight);
    this.setState({ width, height });
  };

  render = () => {
    const { ref } = this;
    const { scatterplotData, xStat, yStat, teams } = this.props;
    const { lPadding, rPadding, tPadding, bPadding, width, height } = this.state;

    const xMin = data => d3.min(data, d => parseFloat(d[xStat]));
    const xMax = data => d3.max(data, d => parseFloat(d[xStat]));
    const yMin = data => d3.min(data, d => parseFloat(d[yStat]));
    const yMax = data => d3.max(data, d => parseFloat(d[yStat]));
    const rMin = data => d3.min(data, d => parseFloat(d.games_played));
    const rMax = data => d3.max(data, d => parseFloat(d.games_played));

    const xScale = d3.scaleLinear()
      .domain([xMin(scatterplotData), xMax(scatterplotData)])
      .range([lPadding, width - rPadding]);

    const yScale = d3.scaleLinear()
      .domain([yMin(scatterplotData), yMax(scatterplotData)])
      .range([height - bPadding, tPadding]);

    const rScale = d3.scaleLinear()
      .domain([rMin(scatterplotData), rMax(scatterplotData)])
      .range([3, 20]);

    const colorScale = d3.scaleOrdinal()
      .domain(teams)
      .range(teams.map((team, i) => d3Scale.interpolatePlasma(i / teams.length)));

    return (
      <svg ref={ref} className={styles.scatterplotsvg} width="100%" height="100%">
        <ScatterplotDots
          scatterplotData={scatterplotData}
          xStat={xStat}
          yStat={yStat}
          xScale={xScale}
          yScale={yScale}
          rScale={rScale}
          colorScale={colorScale}
        />
        <ScatterplotAxis // x axis
          translate={`translate(0, ${height - bPadding})`}
          scale={xScale}
          orient="bottom"
          stat={xStat}
          padding={bPadding}
          width={width}
          height={height}
        />
        <ScatterplotAxis // y axis
          translate={`translate(${lPadding}, 0)`}
          scale={yScale}
          orient="left"
          stat={yStat}
          padding={lPadding}
          width={width}
          height={height}
        />
      </svg>
    );
  };
}

Scatterplot.propTypes = {
  scatterplotData: PropTypes.arrayOf(PropTypes.object).isRequired,
  xStat: PropTypes.string.isRequired,
  yStat: PropTypes.string.isRequired,
};

export default Scatterplot;

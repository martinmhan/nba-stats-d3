import React, { Component } from 'react';
import * as d3 from 'd3';
import { ScatterplotDots } from './ScatterplotDots';
import { ScatterplotXYAxes } from './ScatterplotXYAxes';
import styles from '../../styles/scatterplot/Scatterplot.css';

export class Scatterplot extends Component {
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
    const { scatterplotData, xStat, yStat } = this.props;
    const { lPadding, rPadding, tPadding, bPadding, width, height } = this.state;

    const xMin = data => d3.min(data, d => parseFloat(d[xStat]));
    const xMax = data => d3.max(data, d => parseFloat(d[xStat]));
    const yMin = data => d3.min(data, d => parseFloat(d[yStat]));
    const yMax = data => d3.max(data, d => parseFloat(d[yStat]));

    const xScale = data => (
      d3.scaleLinear()
        .domain([xMin(data), xMax(data)])
        .range([lPadding, width - rPadding])
    );

    const yScale = data => (
      d3.scaleLinear()
        .domain([yMin(data), yMax(data)])
        .range([height - bPadding, tPadding])
    );

    return (
      <div className={styles.scatterplot}>
        <svg ref={ref} className={styles.scatterplotsvg} width="100%" height="100%">
          <ScatterplotDots
            scatterplotData={scatterplotData}
            xStat={xStat}
            yStat={yStat}
            xScale={xScale(scatterplotData)}
            yScale={yScale(scatterplotData)}
          />
          <ScatterplotXYAxes
            scatterplotData={scatterplotData}
            xStat={xStat}
            yStat={yStat}
            xScale={xScale(scatterplotData)}
            yScale={yScale(scatterplotData)}
            lPadding={lPadding}
            rPadding={rPadding}
            tPadding={tPadding}
            bPadding={bPadding}
            width={width}
            height={height}
          />
        </svg>
      </div>
    );
  };
}

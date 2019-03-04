import React, { Component } from 'react';
import * as d3 from 'd3';

export class ScatterplotAxis extends Component {
  componentDidMount = () => { this.renderAxis(); };

  componentDidUpdate = () => { this.renderAxis(); };

  renderAxis = () => {
    const node = this.refs.axis;
    const { orient, scale } = this.props;

    const axis =
      orient === 'bottom' ?
        d3.axisBottom(scale)
          .ticks(5)
          .tickFormat(d => d.toString())
      : orient === 'left' ?
        d3.axisLeft(scale)
          .ticks(5)
      : null;

    d3.select(node).call(axis);
  };

  render = () => {
    const { orient, translate, padding, width, height, stat } = this.props;
    const statFormatted = stat.split('_').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');

    return (
      <g className="scatterplotaxiscontainer">
        {
          orient === 'bottom' ?
            <text transform={`translate(${width / 2}, ${height - padding / 3})`}>{statFormatted}</text>
          : orient === 'left' ?
            <text
              transform={`rotate(-90)`}
              x={`${0 - height / 2}`}
              y={`${padding / 2}`}
            >{statFormatted}</text>
          : null
        }
        <g className="scatterplotaxis" ref="axis" transform={translate} />
      </g>
    );
  };
}

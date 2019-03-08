import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

class ScatterplotAxis extends Component {
  static propTypes = {
    orient: PropTypes.string.isRequired,
    scale: PropTypes.func.isRequired,
    translate: PropTypes.string.isRequired,
    padding: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    stat: PropTypes.string.isRequired,
  };

  componentDidMount = () => { this.renderAxis(); };

  componentDidUpdate = () => { this.renderAxis(); };

  setRef = (element) => { this.axis = element; }

  renderAxis = () => {
    const node = this.axis;
    const { orient, scale } = this.props;
    let axis;

    if (orient === 'bottom') {
      axis = d3.axisBottom(scale)
        .ticks(5)
        .tickFormat(d => d.toString());
    } else if (orient === 'left') {
      axis = d3.axisLeft(scale)
        .ticks(5);
    }

    const t = d3.transition()
      .duration(500);

    d3.select(node)
      .transition(t)
      .call(axis);
  };

  render = () => {
    const {
      orient,
      translate,
      padding,
      width,
      height,
      stat,
    } = this.props;

    const statFormatted = stat.split('_').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');

    const textSettings = {};
    if (orient === 'bottom') {
      textSettings.transform = `translate(${width / 2}, ${height - padding / 3})`;
    } else if (orient === 'left') {
      textSettings.transform = 'rotate(-90)';
      textSettings.x = `${0 - height / 2}`;
      textSettings.y = `${padding / 2}`;
    }

    return (
      <g className="scatterplotaxiscontainer">
        <text {...textSettings}>{statFormatted}</text>
        <g className="scatterplotaxis" ref={this.setRef} transform={translate} />
      </g>
    );
  };
}

export default ScatterplotAxis;

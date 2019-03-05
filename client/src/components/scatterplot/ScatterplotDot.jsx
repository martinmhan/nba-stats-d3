import React, { Component } from 'react';
import styles from '../../styles/scatterplot/ScatterplotDot.css';

export class ScatterplotDot extends Component {
  constructor(props) {
    super(props);
    this.dotRef = React.createRef();
    this.state = {
      hovered: false,
    };
  }

  handleMouseEnter = () => { this.setState({ hovered: true }); }

  handleMouseLeave = () => { this.setState({ hovered: false }); }

  render = () => {
    const { playerName, cx, cy, r } = this.props;

    return (
      <svg>
        { this.state.hovered
          ? <text
            className="playernamelabel"
            x={(parseInt(cx) - 75).toString()}
            y={(parseInt(cy) - 10).toString()}
            >{playerName}</text>
          : null
        }
        <circle
          ref={this.dotRef}
          className={styles.scatterplotdot}
          cx={cx}
          cy={cy}
          r={r}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      </svg>
    );
  };
}

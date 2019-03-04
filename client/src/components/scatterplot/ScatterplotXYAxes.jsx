import React from 'react';
import { ScatterplotAxis } from './ScatterplotAxis';

export const ScatterplotXYAxes = ({ xStat, yStat, xScale, yScale, lPadding, bPadding, width, height }) => {
  const xSettings = {
    translate: `translate(0, ${height - bPadding})`,
    scale: xScale,
    orient: 'bottom',
  };

  const ySettings = {
    translate: `translate(${lPadding}, 0)`,
    scale: yScale,
    orient: 'left',
  };

  return (
    <g className="scatterplotxyaxes">
      <ScatterplotAxis
        {...xSettings}
        stat={xStat}
        padding={bPadding}
        width={width}
        height={height}
      />
      <ScatterplotAxis
        {...ySettings}
        stat={yStat}
        padding={lPadding}
        width={width}
        height={height}
      />
    </g>
  );
};

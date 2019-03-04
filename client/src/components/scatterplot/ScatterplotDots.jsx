import React from 'react';
import { ScatterplotDot } from './ScatterplotDot';

export const ScatterplotDots = ({ scatterplotData, xScale, yScale, xStat, yStat }) => (
  <g>
    {scatterplotData.map((d, i) => (
      <ScatterplotDot
        playerName={d.full_name}
        cx={xScale(d[xStat]).toString()}
        cy={yScale(d[yStat]).toString()}
        r={8} // change to variable size?
        key={i}
      />
    ))}
  </g>
);

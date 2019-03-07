import { combineReducers } from 'redux';
import {
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
  playerInfoViewOpen,
  selectedPlayer,
  hoveredPlayer,
} from './ScatterplotReducers';

const rootReducer = combineReducers({
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
  playerInfoViewOpen,
  selectedPlayer,
  hoveredPlayer,
});

export default rootReducer;

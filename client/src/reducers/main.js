import { combineReducers } from 'redux';
import {
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
  selectedPlayer,
  hoveredPlayer,
} from './reducers';

const rootReducer = combineReducers({
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
  selectedPlayer,
  hoveredPlayer,
});

export default rootReducer;

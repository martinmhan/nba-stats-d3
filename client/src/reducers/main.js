import { combineReducers } from 'redux';
import {
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
} from './ScatterplotReducers';

const rootReducer = combineReducers({
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
});

export default rootReducer;

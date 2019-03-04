import { combineReducers } from 'redux';
import {
  xStat,
  yStat,
  positionFilters,
  teamFilters,
} from './ScatterplotReducers';

const rootReducer = combineReducers({
  xStat,
  yStat,
  positionFilters,
  teamFilters,
});

export default rootReducer;

import { combineReducers } from 'redux';
import {
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
  playerInfoViewOpen,
  selectedPlayer,
} from './ScatterplotReducers';

const rootReducer = combineReducers({
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  playerData,
  playerInfoViewOpen,
  selectedPlayer,
});

export default rootReducer;

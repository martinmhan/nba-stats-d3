import {
  UPDATE_X_STAT,
  UPDATE_Y_STAT,
  UPDATE_POSITION_FILTERS,
  UPDATE_TEAM_FILTERS,
  UPDATE_PLAYER_DATA,
} from './actionTypes';

export const updateScatterplotXStat = xStat => ({
  type: UPDATE_X_STAT,
  xStat,
});

export const updateScatterplotYStat = yStat => ({
  type: UPDATE_Y_STAT,
  yStat,
});

export const updateScatterplotPositionFilters = positionFilters => ({
  type: UPDATE_POSITION_FILTERS,
  positionFilters,
});

export const updateScatterplotTeamFilters = teamFilters => ({
  type: UPDATE_TEAM_FILTERS,
  teamFilters,
});

export const updatePlayerData = playerData => ({
  type: UPDATE_PLAYER_DATA,
  playerData,
});

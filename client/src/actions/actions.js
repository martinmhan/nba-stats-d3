import {
  UPDATE_X_STAT,
  UPDATE_Y_STAT,
  UPDATE_POSITION_FILTERS,
  UPDATE_TEAM_FILTERS,
  UPDATE_PLAYER_DATA,
  UPDATE_SELECTED_PLAYER,
  UPDATE_HOVERED_PLAYER,
} from './actionTypes';

export const updateXStat = xStat => ({
  type: UPDATE_X_STAT,
  xStat,
});

export const updateYStat = yStat => ({
  type: UPDATE_Y_STAT,
  yStat,
});

export const updatePositionFilters = positionFilters => ({
  type: UPDATE_POSITION_FILTERS,
  positionFilters,
});

export const updateTeamFilters = teamFilters => ({
  type: UPDATE_TEAM_FILTERS,
  teamFilters,
});

export const updatePlayerData = playerData => ({
  type: UPDATE_PLAYER_DATA,
  playerData,
});

export const updateSelectedPlayer = selectedPlayer => ({
  type: UPDATE_SELECTED_PLAYER,
  selectedPlayer,
});

export const updateHoveredPlayer = hoveredPlayer => ({
  type: UPDATE_HOVERED_PLAYER,
  hoveredPlayer,
});

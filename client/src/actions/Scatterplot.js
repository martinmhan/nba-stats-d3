import {
  UPDATE_X_STAT,
  UPDATE_Y_STAT,
  UPDATE_POSITION_FILTERS,
  UPDATE_TEAM_FILTERS,
  UPDATE_PLAYER_DATA,
  TOGGLE_PLAYER_INFO_VIEW,
  UPDATE_SELECTED_PLAYER,
  UPDATE_HOVERED_PLAYER,
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

export const togglePlayerInfoView = () => ({
  type: TOGGLE_PLAYER_INFO_VIEW,
});

export const updateSelectedPlayer = selectedPlayer => ({
  type: UPDATE_SELECTED_PLAYER,
  selectedPlayer,
});

export const updateHoveredPlayer = hoveredPlayer => ({
  type: UPDATE_HOVERED_PLAYER,
  hoveredPlayer,
});

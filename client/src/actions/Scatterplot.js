import {
  UPDATE_X_STAT,
  UPDATE_Y_STAT,
  UPDATE_POSITION_FILTERS,
  UPDATE_TEAM_FILTERS,
  UPDATE_PLAYER_DATA,
  TOGGLE_PLAYER_INFO_VIEW,
  UPDATE_SELECTED_PLAYER,
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

export const togglePlayerInfoView = playerInfoViewOpen => ({
  type: TOGGLE_PLAYER_INFO_VIEW,
  playerInfoViewOpen: !playerInfoViewOpen,
});

export const updateSelectedPlayer = player => ({
  type: UPDATE_SELECTED_PLAYER,
  selectedPlayer: player,
});

import {
  UPDATE_X_STAT,
  UPDATE_Y_STAT,
  UPDATE_POSITION_FILTERS,
  UPDATE_TEAM_FILTERS,
} from '../actions/actionTypes';

export const xStat = (state = 'games_played', action) => {
  switch (action.type) {
    case UPDATE_X_STAT:
      return action.xStat;
    default:
      return state;
  }
};

export const yStat = (state = 'games_played', action) => {
  switch (action.type) {
    case UPDATE_Y_STAT:
      return action.yStat;
    default:
      return state;
  }
};

export const allPositions = ['PG', 'SG', 'SF', 'PF', 'C'];

export const positionFilters = (state = allPositions, action) => {
  switch (action.type) {
    case UPDATE_POSITION_FILTERS:
      return action.positionFilters;
    default:
      return state;
  }
};

export const allTeams = ['Mavericks', 'Clippers', 'Nets', 'Kings', 'Spurs', 'Timberwolves', 'Cavaliers', 'Bucks', 'Hornets', 'Pelicans', 'Pistons', 'Celtics', 'Magic', 'Rockets', 'Pacers', 'Bulls', 'Wizards', 'Thunder', 'Jazz', 'Warriors', '76ers', 'Suns', 'Heat', 'Lakers', 'Trail Blazers', 'Grizzlies', 'Knicks', 'Nuggets', 'Raptors', 'Hawks'];

export const teamFilters = (state = allTeams, action) => {
  switch (action.type) {
    case UPDATE_TEAM_FILTERS:
      return action.teamFilters;
    default:
      return state;
  }
};

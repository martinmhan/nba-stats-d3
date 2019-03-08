import {
  UPDATE_X_STAT,
  UPDATE_Y_STAT,
  UPDATE_POSITION_FILTERS,
  UPDATE_TEAM_FILTERS,
  UPDATE_PLAYER_DATA,
  UPDATE_SELECTED_PLAYER,
  UPDATE_HOVERED_PLAYER,
} from '../actions/actionTypes';

// following 3 arrays aren't reducers, but initial states for reducers and/or used by React components
export const allPositions = ['PG', 'SG', 'SF', 'PF', 'C'];
export const allStats = ['Games Played', 'Minutes Per Game', 'Points Per Game', 'Off Rebounds Per Game', 'Def Rebounds Per Game', 'Rebounds Per Game', 'Assists Per Game', 'Steals Per Game', 'Blocks Per Game', 'Turnovers Per Game', 'Personal Fouls Per Game', 'Flagrant Fouls Per Game', 'Blocked Att Per Game', 'Field Goals Made Per Game', 'Field Goals Att Per Game', 'Three Points Made Per Game', 'Three Points Att Per Game', 'Free Throws Made Per Game', 'Free Throws Att Per Game', 'Two Points Made Per Game', 'Two Points Att Per Game', 'Efficiency Per Game', 'True Shooting Att Per Game', 'Points Off Turnovers Per Game', 'Points In Paint Made Per Game', 'Points In Paint Att Per Game', 'Points In Paint Per Game', 'Fouls Drawn Per Game', 'Offensive Fouls Per Game', 'Fast Break Pts Per Game', 'Fast Break Att Per Game', 'Fast Break Made Per Game', 'Second Chance Pts Per Game', 'Second Chance Att Per Game', 'Second Chance Made Per Game'];
export const allTeams = ['Mavericks', 'Clippers', 'Nets', 'Kings', 'Spurs', 'Timberwolves', 'Cavaliers', 'Bucks', 'Hornets', 'Pelicans', 'Pistons', 'Celtics', 'Magic', 'Rockets', 'Pacers', 'Bulls', 'Wizards', 'Thunder', 'Jazz', 'Warriors', '76ers', 'Suns', 'Heat', 'Lakers', 'Trail Blazers', 'Grizzlies', 'Knicks', 'Nuggets', 'Raptors', 'Hawks'];

// reducers below
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

export const positionFilters = (state = allPositions, action) => {
  switch (action.type) {
    case UPDATE_POSITION_FILTERS:
      return action.positionFilters;
    default:
      return state;
  }
};

export const teamFilters = (state = allTeams, action) => {
  switch (action.type) {
    case UPDATE_TEAM_FILTERS:
      return action.teamFilters;
    default:
      return state;
  }
};

export const playerData = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLAYER_DATA:
      return action.playerData;
    default:
      return state;
  }
};

export const selectedPlayer = (state = null, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_PLAYER:
      return action.selectedPlayer;
    default:
      return state;
  }
};

export const hoveredPlayer = (state = null, action) => {
  switch (action.type) {
    case UPDATE_HOVERED_PLAYER:
      return action.hoveredPlayer;
    default:
      return state;
  }
};

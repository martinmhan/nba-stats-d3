const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { API_KEY } = require('../api.config');

const teamIds = [
  '583ec825-fb46-11e1-82cb-f4ce4684ea4c', // warriors
  '583ecdfb-fb46-11e1-82cb-f4ce4684ea4c', // clippers
  '583ecae2-fb46-11e1-82cb-f4ce4684ea4c', // lakers
  '583ed0ac-fb46-11e1-82cb-f4ce4684ea4c', // kings
  '583ecfa8-fb46-11e1-82cb-f4ce4684ea4c', // suns
  '583ecd4f-fb46-11e1-82cb-f4ce4684ea4c', // spurs
  '583ecb3a-fb46-11e1-82cb-f4ce4684ea4c', // rockets
  '583ecf50-fb46-11e1-82cb-f4ce4684ea4c', // mavericks
  '583ecc9a-fb46-11e1-82cb-f4ce4684ea4c', // pelicans
  '583eca88-fb46-11e1-82cb-f4ce4684ea4c', // grizzlies
  '583ed102-fb46-11e1-82cb-f4ce4684ea4c', // nuggets
  '583ecfff-fb46-11e1-82cb-f4ce4684ea4c', // thunder
  '583ed056-fb46-11e1-82cb-f4ce4684ea4c', // blazers
  '583ece50-fb46-11e1-82cb-f4ce4684ea4c', // jazz
  '583eca2f-fb46-11e1-82cb-f4ce4684ea4c', // timberwolves
  '583ecea6-fb46-11e1-82cb-f4ce4684ea4c', // heat
  '583ec97e-fb46-11e1-82cb-f4ce4684ea4c', // hornets
  '583ec8d4-fb46-11e1-82cb-f4ce4684ea4c', // wizards
  '583ed157-fb46-11e1-82cb-f4ce4684ea4c', // magic
  '583ecb8f-fb46-11e1-82cb-f4ce4684ea4c', // hawks
  '583ecefd-fb46-11e1-82cb-f4ce4684ea4c', // bucks
  '583ec7cd-fb46-11e1-82cb-f4ce4684ea4c', // pacers
  '583ec928-fb46-11e1-82cb-f4ce4684ea4c', // pistons
  '583ec5fd-fb46-11e1-82cb-f4ce4684ea4c', // bulls
  '583ec773-fb46-11e1-82cb-f4ce4684ea4c', // cavaliers
  '583ecda6-fb46-11e1-82cb-f4ce4684ea4c', // raptors
  '583ec87d-fb46-11e1-82cb-f4ce4684ea4c', // 76ers
  '583eccfa-fb46-11e1-82cb-f4ce4684ea4c', // celtics
  '583ec9d6-fb46-11e1-82cb-f4ce4684ea4c', // nets
  '583ec70e-fb46-11e1-82cb-f4ce4684ea4c', // knicks
];

let sql = '';

// API only allows requests one team at a time and limits requests per second
// Use recursive function to get data for all teams
const getTeamData = async (i) => {
  if (i === teamIds.length) {
    fs.writeFile(path.join(__dirname, 'seed.sql'), sql, (err) => {
      if (err) { console.error(err); } else {
        console.log('Done writing seed.sql');
      }
    });

    return;
  }

  const url = `https://api.sportradar.us/nba/trial/v5/en/seasons/2018/REG/teams/${teamIds[i]}/statistics.json`;
  const { data } = await axios.get(url, { params: { api_key: API_KEY } });
  const { name, market, players } = data;

  let query = '';

  for (let j = 0; j < players.length; j += 1) {
    players[j].full_name = players[j].full_name.replace(/'/g, '');
    players[j].last_name = players[j].last_name.replace(/'/g, '');
    players[j].first_name = players[j].first_name ? players[j].first_name.replace(/'/g, '') : ''; // remove single quotes from player names
    const insert = `INSERT INTO player_data (api_id, team_name, team_market, full_name, first_name, last_name, position, primary_position, games_played, minutes_per_game, points_per_game, off_rebounds_per_game, def_rebounds_per_game, rebounds_per_game, assists_per_game, steals_per_game, blocks_per_game, turnovers_per_game, personal_fouls_per_game, flagrant_fouls_per_game, blocked_att_per_game, field_goals_made_per_game, field_goals_att_per_game, three_points_made_per_game, three_points_att_per_game, free_throws_made_per_game, free_throws_att_per_game, two_points_made_per_game, two_points_att_per_game, efficiency_per_game, true_shooting_att_per_game, points_off_turnovers_per_game, points_in_paint_made_per_game, points_in_paint_att_per_game, points_in_paint_per_game, fouls_drawn_per_game, offensive_fouls_per_game, fast_break_pts_per_game, fast_break_att_per_game, fast_break_made_per_game, second_chance_pts_per_game, second_chance_att_per_game, second_chance_made_per_game)\nVALUES ('${players[j].id}', '${name}', '${market}', '${players[j].full_name}', '${players[j].first_name}', '${players[j].last_name}', '${players[j].position}', '${players[j].primary_position}',  ${players[j].total.games_played},  ${players[j].average.minutes},  ${players[j].average.points},  ${players[j].average.off_rebounds},  ${players[j].average.def_rebounds},  ${players[j].average.rebounds},  ${players[j].average.assists},  ${players[j].average.steals},  ${players[j].average.blocks},  ${players[j].average.turnovers},  ${players[j].average.personal_fouls},  ${players[j].average.flagrant_fouls},  ${players[j].average.blocked_att},  ${players[j].average.field_goals_made},  ${players[j].average.field_goals_att},  ${players[j].average.three_points_made},  ${players[j].average.three_points_att},  ${players[j].average.free_throws_made},  ${players[j].average.free_throws_att},  ${players[j].average.two_points_made},  ${players[j].average.two_points_att},  ${players[j].average.efficiency},  ${players[j].average.true_shooting_att},  ${players[j].average.points_off_turnovers},  ${players[j].average.points_in_paint_made},  ${players[j].average.points_in_paint_att},  ${players[j].average.points_in_paint},  ${players[j].average.fouls_drawn},  ${players[j].average.offensive_fouls},  ${players[j].average.fast_break_pts},  ${players[j].average.fast_break_att},  ${players[j].average.fast_break_made},  ${players[j].average.second_chance_pts},  ${players[j].average.second_chance_att},  ${players[j].average.second_chance_made});\n`;
    query += insert;
  }

  sql += query;

  setTimeout(() => { getTeamData(i + 1); }, 1000);
};

getTeamData(0);

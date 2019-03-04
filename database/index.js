const { Client } = require('pg');
const config = require('./config');

const db = new Client(config);

db.connect();

module.exports = db;

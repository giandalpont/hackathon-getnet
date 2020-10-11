import knex from 'knex';

import conDB from '../config/main-db';

const { host, user, password, database } = conDB;

const db = knex({
  client: 'mysql',
  connection: {
    host,
    user,
    password,
    database,
  },
  useNullAsDefault: true,
});

export default db;

import path from 'path';

import conDB from './src/config/main-db';

const { host, user, password, database } = conDB;

module.exports = {
  client: 'mysql',
  connection: {
    host,
    user,
    password,
    database,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    tableName: 'migrations',
  },
  useNullAsDefault: true,
};

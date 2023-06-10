import { createDatabase } from './createDatabase.js';
import { createTables } from './setSchema.js';

export const setUpDatabase = async () => {
  // create and use database
  await createDatabase();

  // create tables with pk and fk
  await createTables();

  return 'DATABASE TABLES NOW USABLE';
};

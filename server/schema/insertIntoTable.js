import { pool } from '../config/database.js';

export const insertIntoTable = async (tableName, attribute, values) => {
  const query = `
  INSERT INTO ${tableName} (${[...attribute]})
  VALUES (${[...attribute]});
      `;
  await pool.query(query);
};

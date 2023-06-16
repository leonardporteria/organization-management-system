import { pool } from '../../config/database.js';

export const insertIntoTable = async (tableName, attributes, values) => {
  const valueString = values.map((val) => `"${val}"`).join(', ');

  const query = `
  INSERT INTO ${tableName} (${[...attributes]})
  VALUES (${valueString});
      `;
  await pool.query(query);
};

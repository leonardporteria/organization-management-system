import { pool } from '../../config/database.js';

export const insertIntoTable = async (tableName, attributes, values) => {
  const valueString = values
    .map((val) => {
      if (!val.trim()) return `null`;
      if (!isNaN(val) && val.length !== 9) return val;
      return `"${val}"`;
    })
    .join(', ');

  const query = `
  INSERT INTO ${tableName} (${[...attributes]})
  VALUES (${valueString});
      `;
  await pool.query(query);
};

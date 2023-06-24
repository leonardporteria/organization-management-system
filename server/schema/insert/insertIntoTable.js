import { pool } from '../../config/database.js';

export const insertIntoTable = async (tableName, attributes, values) => {
  const valueString = values
    .map((val) => {
      if (!isNaN(val) && val.length !== 9) return val;
      return `"${val}"`;
    })
    .join(', ');

  console.log('memberVALIES', valueString);

  const query = `
  INSERT INTO ${tableName} (${[...attributes]})
  VALUES (${valueString});
      `;
  await pool.query(query);
};

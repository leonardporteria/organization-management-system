import { pool } from '../../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

export const insertIntoTable = async (tableName, attributes, values) => {
  const valueString = values
    .map((val) => {
      if (!val.trim()) return `null`;
      if (!isNaN(val) && val.length !== 9) return val;
      return `"${val}"`;
    })
    .join(', ');

  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
  INSERT INTO ${tableName} (${[...attributes]})
  VALUES (${valueString});
      `;
  await pool.query(useQuery);
  await pool.query(query);
};

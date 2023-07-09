import { pool } from '../../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

export const selectFromTable = async (tableName) => {
  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
    SELECT * 
    FROM ${tableName}
      `;

  await pool.query(useQuery);
  const [rows] = await pool.query(query);
  return rows;
};

export const selectSpecificFromTable = async (tableName, condition) => {
  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
      SELECT * 
      FROM ${tableName}
      WHERE ${condition}
        `;

  await pool.query(useQuery);
  const [rows] = await pool.query(query);
  return rows;
};

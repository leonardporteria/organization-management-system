import { pool } from '../config/database.js';

export const selectFromTable = async (tableName) => {
  const query = `
    SELECT * 
    FROM ${tableName}
      `;
  const [rows] = await pool.query(query);
  return rows;
};

export const selectOneFromTable = async (tableName, condition) => {
  const query = `
      SELECT * 
      FROM ${tableName}
      WHERE ${condition}
        `;
  const [rows] = await pool.query(query);
  return rows;
};

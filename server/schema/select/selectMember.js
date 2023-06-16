import { pool } from '../../config/database.js';

export const getApplicationsToday = async (idToday) => {
  const query = `
    SELECT COUNT(member_id)  
    FROM member_information
    WHERE member_id LIKE '${idToday}____%'
      `;
  const [rows] = await pool.query(query);
  return rows;
};

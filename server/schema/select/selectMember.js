import { pool } from '../../config/database.js';

export const getApplicationsToday = async () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString().slice(-2);
  const currentDayOfYear = Math.ceil(
    (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000
  );

  const query = `
    SELECT COUNT(*)  
    FROM member_information
    WHERE member_id LIKE '${currentYear + currentDayOfYear}%'
      `;

  const [rows] = await pool.query(query);
  console.log('ROWS', rows);
  return rows;
};

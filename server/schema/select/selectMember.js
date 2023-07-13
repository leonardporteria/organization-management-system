import { pool } from '../../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

export const getApplicationsToday = async () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString().slice(-2);
  const currentDayOfYear = Math.ceil(
    (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000
  );

  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
    SELECT COUNT(*)  
    FROM member_information
    WHERE member_id LIKE '${currentYear + currentDayOfYear}%'
      `;

  await pool.query(useQuery);
  const [rows] = await pool.query(query);
  return rows;
};

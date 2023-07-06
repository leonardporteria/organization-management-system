import { pool } from '../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

// QUERIES
export const createDatabase = async () => {
  const createQuery = `create database if not exists ${process.env.MYSQL_DATABASE};`;
  const useQuery = `use ${process.env.MYSQL_DATABASE};`;

  await pool.query(createQuery);
  await pool.query(useQuery);

  return 'DATABASE CREATED; NOW IN USE';
};

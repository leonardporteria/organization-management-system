import { pool } from '../config/database.js';

// QUERIES
export const createDatabase = async () => {
  const createQuery = 'create database if not exists react_node;';
  const useQuery = 'use react_node;';

  await pool.query(createQuery);
  await pool.query(useQuery);

  return 'DATABASE CREATED; NOW IN USE';
};

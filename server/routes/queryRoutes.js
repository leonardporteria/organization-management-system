import express from 'express';
const queryRouter = express.Router();
import { pool } from '../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * ROOT PATH: /api
 */
// GET all query
queryRouter.get('/query', async (req, res) => {
  res.json({ message: 'GET all query' });
});

queryRouter.get('/query/status/:member_id/:club_id', async (req, res) => {
  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
    SELECT application_status
    FROM application_details
    WHERE member_id = "${req.params.member_id}" 
    AND club_id = "${req.params.club_id}"
    LIMIT 1;
      `;

  await pool.query(useQuery);
  const [rows] = await pool.query(query);
  res.json({
    message: 'GET one query',
    params: req.params.id,
    data: rows,
    query: query,
  });
  res.json({ message: 'GET all status', data: rows, query: query });
});

// GET one query by id
queryRouter.get('/query/:id', async (req, res) => {
  // PARAM 1
  if (req.params.id === '1') {
    const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
    const query = `
      SELECT civil_status, count(sex) as sexCounter 
      FROM member_information
      WHERE sex = 'm'
      GROUP BY civil_status 
        `;

    await pool.query(useQuery);
    const [rows] = await pool.query(query);
    res.json({
      message: 'GET one query',
      params: req.params.id,
      data: rows,
      query: query,
    });
  }
});

// POST new query
queryRouter.post('/query', async (req, res) => {
  res.json({
    message: 'POST new query',
  });
});

// UPDATE one query by id
queryRouter.delete('/query/:id', (req, res) => {
  res.json({ message: 'DELETE one query' });
});

// DELETE one query by id
queryRouter.patch('/query/:id', (req, res) => {
  res.json({ message: 'UPDATE one query' });
});

export default queryRouter;

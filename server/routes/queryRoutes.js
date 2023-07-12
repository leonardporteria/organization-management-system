import express from 'express';
const queryRouter = express.Router();
import { pool } from '../config/database.js';
import dotenv from 'dotenv';
dotenv.config();

/**
 * ROOT PATH: /api
 */
// GET all company
queryRouter.get('/query', async (req, res) => {
  res.json({ message: 'GET all query' });
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

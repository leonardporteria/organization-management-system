import express from 'express';
const companyRouter = express.Router();

// insert import
import { insertIntoTable } from '../schema/insertIntoTable.js';

// select import
import { selectFromTable } from '../schema/selectTable.js';

/**
 * ROOT PATH: /api
 */
// GET all company
companyRouter.get('/company', async (req, res) => {
  const rows = await selectFromTable('company');
  res.json({ message: 'GET all company', rows: rows });
});

// GET one company by id
companyRouter.get('/company/:id', (req, res) => {
  res.json({ message: 'GET one company' });
});
// POST new company
companyRouter.post('/company', (req, res) => {
  console.log(req.body);
  console.log('added new company');
  insertIntoTable();
  res.json({ message: 'POST new company' });
});
// UPDATE one company by id
companyRouter.delete('/company/:id', (req, res) => {
  res.json({ message: 'DELETE one company' });
});
// DELETE one company by id
companyRouter.patch('/company/:id', (req, res) => {
  res.json({ message: 'UPDATE one company' });
});

export default companyRouter;

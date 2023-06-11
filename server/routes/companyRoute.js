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
  const attributes = [
    'company_code',
    'company_name',
    'company_telephone',
    'company_email',
    'company_address',
  ];
  const values = [
    'C01-NR-03',
    'newCompany',
    '87000',
    'mycompany@email.com',
    'dyan lang st.',
  ];

  insertIntoTable('company', attributes, values);
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

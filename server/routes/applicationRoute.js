import express from 'express';
const applicationRouter = express.Router();

// utils import
import { generateMemberId, concatenateMemberId } from '../utils/idGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all applications
applicationRouter.get('/application', async (req, res) => {
  res.json({ message: 'GET all applications' });
});

// GET one book by id
applicationRouter.get('/application/:id', (req, res) => {
  res.json({ message: 'GET one application' });
});
// POST new application
applicationRouter.post('/application', async (req, res) => {
  res.json({ message: 'POST new application' });
});

// UPDATE one application by id
applicationRouter.delete('/application/:id', (req, res) => {
  res.json({ message: 'DELETE one application' });
});
// DELETE one application by id
applicationRouter.patch('/application/:id', (req, res) => {
  res.json({ message: 'UPDATE one application' });
});

export default applicationRouter;

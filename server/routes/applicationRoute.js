import express from 'express';
const applicationRouter = express.Router();

import { generateMemberId } from '../utils/idGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';

/**
 * ROOT PATH: /api
 */
// GET all applications
applicationRouter.get('/application', (req, res) => {
  res.json({ message: 'GET all applications' });
});

// GET one book by id
applicationRouter.get('/application/:id', (req, res) => {
  res.json({ message: 'GET one application' });
});
// POST new application
applicationRouter.post('/application', async (req, res) => {
  console.log(req.body);

  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateMemberId(uid.toString());

  // concatenate the id for multivalues

  res.json({ message: 'POST new application', test_id: member_id });
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

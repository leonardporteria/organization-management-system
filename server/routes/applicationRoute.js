import express from 'express';
const applicationRouter = express.Router();

// utils import
import {
  generateMemberId,
  concatenateMemberId,
} from '../utils/memberIdGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { selectFromTable } from '../schema/select/selectTable.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all applications
applicationRouter.get('/application', async (req, res) => {
  const rows = await selectFromTable('application_details');
  res.json({ message: 'GET all applications', application: rows });
});

// GET one book by id
applicationRouter.get('/application/:id', (req, res) => {
  res.json({ message: 'GET one application' });
});
// POST new application
applicationRouter.post('/application', async (req, res) => {
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateMemberId(uid.toString());
  req.body.member_information.member_id = member_id;

  // concatenate the id for multivalues
  const educationKeys = Object.keys(req.body.education);
  educationKeys.forEach((key, index) => {
    const educationId = concatenateMemberId(member_id, 'E', index.toString());
    req.body.education[key].education_id = educationId;
    req.body.education[key].education_level = key;
  });

  for (const key in req.body.contact_person) {
    const contactId = concatenateMemberId(member_id, 'C', key.toString());
    req.body.contact_person[key].contact_id = contactId;
  }

  for (const key in req.body.legal_dependents) {
    const dependentId = concatenateMemberId(member_id, 'D', key.toString());
    req.body.legal_dependents[key].dependent_id = dependentId;
  }

  res.json({
    message: 'POST new application',
    application_details: req.body.education,
  });
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

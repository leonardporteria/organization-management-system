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

  console.log(req.body.education);
  console.log(req.body.contact_person);
  console.log(req.body.legal_dependents);

  // Initialize an empty array to hold the objects
  const applicantDetails = [];

  // Generate unique IDs and distribute the values into objects
  const educationKeys = Object.keys(req.body.education);
  const contactKeys = Object.keys(req.body.contact_person);
  const dependentKeys = Object.keys(req.body.legal_dependents);

  // Loop through each contact key and create an object for each combination of values
  contactKeys.forEach((contactKey) => {
    const contact = req.body.contact_person[contactKey];

    dependentKeys.forEach((dependentKey) => {
      educationKeys.forEach((educationKey) => {
        const educationId = concatenateMemberId(
          member_id,
          'E',
          educationKey.toString()
        );
        const contactId = concatenateMemberId(
          member_id,
          'C',
          contactKey.toString()
        );
        const dependentId = concatenateMemberId(
          member_id,
          'D',
          dependentKey.toString()
        );

        const applicant = {
          applicant_code: applicantDetails.length + 1,
          member_id: member_id,
          club_id: 1,
          contact_id: contactId,
          education_id: educationId,
          dependent_id: dependentId,
          application_status: 'Pending',
        };

        applicantDetails.push(applicant);
      });
    });
  });

  console.log(applicantDetails);

  res.json({
    message: 'POST new application',
    application_details: applicantDetails,
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

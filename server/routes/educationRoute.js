import express from 'express';
const educationRouter = express.Router();

// utils import
import { generateMemberId, concatenateMemberId } from '../utils/idGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { selectFromTable } from '../schema/select/selectTable.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all education
educationRouter.get('/education', async (req, res) => {
  const rows = await selectFromTable('education');
  res.json({ message: 'GET all education', education: rows });
});

// GET one education by id
educationRouter.get('/education/:id', (req, res) => {
  res.json({ message: 'GET one education' });
});
// POST new education
educationRouter.post('/education', async (req, res) => {
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateMemberId(uid.toString());

  // concatenate the id for multivalues
  // education
  const educationKeys = Object.keys(req.body.education);
  educationKeys.forEach(async (key, index) => {
    const educationId = concatenateMemberId(member_id, 'E', index.toString());
    req.body.education[key].education_id = educationId;
    req.body.education[key].education_level = key;

    // QUERY TO DATABASE (EDUCATION TABLE)
    const { education_id, education_level, ...rest } = req.body.education;
    const educationInformation = { ...rest, education_id, education_level };

    const educationAttributes = Object.keys(educationInformation[key]);
    const educationValues = Object.values(educationInformation[key]);

    console.log('EDUCATION ID:', educationId);

    await insertIntoTable('education', educationAttributes, educationValues);
  });

  res.json({ message: 'POST new education', eduaction: req.body.education });
});
// UPDATE one education by id
educationRouter.delete('/education/:id', (req, res) => {
  res.json({ message: 'DELETE one education' });
});
// DELETE one education by id
educationRouter.patch('/education/:id', (req, res) => {
  res.json({ message: 'UPDATE one education' });
});

export default educationRouter;

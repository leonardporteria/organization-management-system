import express from 'express';
const companyRouter = express.Router();

// insert import
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

// select import
import { selectFromTable } from '../schema/select/selectTable.js';

/**
 * ROOT PATH: /api
 */
// GET all company
companyRouter.get('/company', async (req, res) => {
  const rows = await selectFromTable('member_information');
  res.json({ message: 'GET all company', rows: rows });
});

// GET one company by id
companyRouter.get('/company/:id', (req, res) => {
  res.json({ message: 'GET one company' });
});
// POST new company
companyRouter.post('/company', async (req, res) => {
  // // ID GENERATION
  // const applicantToday = await getApplicationsToday();
  // const [uid] = Object.values(applicantToday[0]);
  // const member_id = generateMemberId(uid.toString());
  // req.body.member_information.member_id = member_id;

  // // concatenate the id for multivalues
  // const educationKeys = Object.keys(req.body.education);
  // educationKeys.forEach((key, index) => {
  //   const educationId = concatenateMemberId(member_id, 'E', index.toString());
  //   req.body.education[key].education_id = educationId;
  //   req.body.education[key].education_level = key;
  // });

  // for (const key in req.body.contact_person) {
  //   const contactId = concatenateMemberId(member_id, 'C', key.toString());
  //   req.body.contact_person[key].contact_id = contactId;
  // }

  // for (const key in req.body.legal_dependents) {
  //   const dependentId = concatenateMemberId(member_id, 'D', key.toString());
  //   req.body.legal_dependents[key].dependent_id = dependentId;
  // }

  // // QUERY TO DATABASE
  // const {
  //   last_name,
  //   first_name,
  //   middle_name,
  //   suffix,
  //   house_number,
  //   street,
  //   barangay,
  //   city,
  //   province,
  //   zip_code,
  //   ...rest
  // } = req.body.member_information;
  // // Fullname Concatenation
  // const member_name = `${first_name}, ${middle_name}, ${last_name}, ${suffix}`;
  // // Address Concatenation
  // const address = `${house_number}, ${street}, ${barangay}, ${city}, ${province}, ${zip_code}`;

  // const memberInformation = { ...rest, address, member_name };

  // const memberAttributes = Object.keys(memberInformation);
  // let memberValues = Object.values(memberInformation);

  // console.log(memberValues);

  // insertIntoTable('company', memberAttributes, memberValues);

  res.json({ message: 'POST new company', company_id: company_id });
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

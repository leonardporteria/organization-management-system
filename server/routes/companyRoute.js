import express from 'express';
const companyRouter = express.Router();

// utils import;
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { selectFromTable } from '../schema/select/selectTable.js';
import {
  generateCompanyCode,
  concatenateCompanyCode,
} from '../utils/companyCodeGenerator.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all company
companyRouter.get('/company', async (req, res) => {
  const rows = await selectFromTable('member_information');
  res.json({ message: 'GET all company', data: rows });
});

// GET one company by id
companyRouter.get('/company/:id', (req, res) => {
  res.json({ message: 'GET one company' });
});
// POST new company
companyRouter.post('/company', async (req, res) => {
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateCompanyCode(uid.toString());

  // concatenate the id for multivalues
  // company
  const companyCode = concatenateCompanyCode(member_id, 'W', '0');
  req.body.company.company_code = companyCode;

  // QUERY TO DATABASE (COMPANY TABLE)
  const { company_code, ...rest } = req.body.company;
  const companyInformation = { ...rest, company_code };

  const companyAttributes = Object.keys(companyInformation);
  const companyValues = Object.values(companyInformation);

  console.log('COMPANY CODE:', companyCode);

  await insertIntoTable('company', companyAttributes, companyValues);

  res.json({
    message: 'POST new company',
    company: companyInformation,
  });
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

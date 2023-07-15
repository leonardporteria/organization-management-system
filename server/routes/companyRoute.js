import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { pool } from '../config/database.js';

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
  if (
    req.body.company.company_name === '' ||
    req.body.company.company_email === '' ||
    req.body.company.company_address === '' ||
    req.body.company.company_telephone === ''
  )
    res.json({
      message: 'NO COMPANY INFO',
    });

  // check if company already exists
  const useQuery = `use ${process.env.MYSQL_DATABASE};`;

  const checkCompanyQuery = `
    SELECT * 
    FROM company 
    WHERE company_name = "${req.body.company.company_name}"
    AND company_telephone = "${req.body.company.company_telephone}"
    AND company_email = "${req.body.company.company_email}"
    AND company_address = "${req.body.company.company_address}";

`;

  await pool.query(useQuery);
  const [rows] = await pool.query(checkCompanyQuery);

  if (rows[0]) {
    // console.log('company code: ', rows[0].company_code);
    // console.log(req.body);
    req.body.company.company_code = rows[0].company_code;

    res.json({
      message: 'SAME COMPANY CODE',
      data: rows,
    });
  } else {
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

    console.log('COMPANY:', companyInformation);

    await insertIntoTable('company', companyAttributes, companyValues);

    res.json({
      message: 'POST new company',
      company: companyInformation,
    });
  }
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

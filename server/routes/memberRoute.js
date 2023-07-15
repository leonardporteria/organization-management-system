import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { pool } from '../config/database.js';

const memberRouter = express.Router();

// utils import
import { generateMemberId } from '../utils/memberIdGenerator.js';
import {
  generateCompanyCode,
  concatenateCompanyCode,
} from '../utils/companyCodeGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { selectFromTable } from '../schema/select/selectTable.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all members
memberRouter.get('/member', async (req, res) => {
  const rows = await selectFromTable('member_information');
  res.json({ message: 'GET all members', data: rows });
});

// GET one member by id
memberRouter.get('/member/:id', (req, res) => {
  res.json({ message: 'GET one member' });
});
// POST new member
memberRouter.post('/member', async (req, res) => {
  console.log('INSERTING TO MEMBER TABLE');
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateMemberId(uid.toString());
  req.body.member_information.member_id = member_id;

  // COMPANY CODE GENERATION
  // set to null if no value
  if (
    req.body.company.company_name !== '' ||
    req.body.company.company_email !== '' ||
    req.body.company.company_address !== '' ||
    req.body.company.company_telephone !== ''
  ) {
    console.log('HAS COMPNAY');
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
      console.log();
      console.log('company code: ', rows[0].company_code);
      console.log(req.body);
      req.body.member_information.company_code = rows[0].company_code;
    } else {
      const company_id = generateCompanyCode(uid.toString());
      const companyCode = concatenateCompanyCode(company_id, 'W', '0');
      req.body.member_information.company_code = companyCode;
    }
  } else {
    req.body.member_information.company_code = null;
    req.body.member_information.work_title_or_position = null;
  }

  // QUERY TO DATABASE
  const {
    last_name,
    first_name,
    middle_name,
    suffix,
    house_number,
    street,
    barangay,
    city,
    province,
    zip_code,
    ...rest
  } = req.body.member_information;
  // Fullname Concatenation
  const member_name = `${first_name}, ${middle_name}, ${last_name}, ${suffix}`;
  // Address Concatenation
  const address = `${house_number}, ${street}, ${barangay}, ${city}, ${province}, ${zip_code}`;

  const memberInformation = { ...rest, address, member_name };

  const memberAttributes = Object.keys(memberInformation);
  const memberValues = Object.values(memberInformation);

  console.log(memberInformation);

  insertIntoTable('member_information', memberAttributes, memberValues);

  res.json({
    message: 'POST new member',
    member_id: member_id,
  });
});

// UPDATE one member by id
memberRouter.delete('/member/:id', (req, res) => {
  res.json({ message: 'DELETE one member' });
});
// DELETE one member by id
memberRouter.patch('/member/:id', (req, res) => {
  res.json({ message: 'UPDATE one member' });
});

export default memberRouter;

import express from 'express';
const memberRouter = express.Router();

// utils import
import { generateMemberId, concatenateMemberId } from '../utils/idGenerator.js';
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
  res.json({ message: 'GET all members', rows: rows });
});

// GET one member by id
memberRouter.get('/member/:id', (req, res) => {
  res.json({ message: 'GET one member' });
});
// POST new member
memberRouter.post('/member', async (req, res) => {
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
  let memberValues = Object.values(memberInformation);

  console.log(memberValues);

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

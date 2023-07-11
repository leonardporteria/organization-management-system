import express from 'express';
const contactsRouter = express.Router();

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
// GET all contacts
contactsRouter.get('/contact', async (req, res) => {
  const rows = await selectFromTable('contact_person');
  res.json({ message: 'GET all contacts', data: rows });
});

// GET one contact by id
contactsRouter.get('/contact/:id', (req, res) => {
  res.json({ message: 'GET one contact' });
});
// POST new contact
contactsRouter.post('/contact', async (req, res) => {
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateMemberId(uid.toString());

  // concatenate the id for multivalues
  // contact person
  for (const key in req.body.contact_person) {
    const contactId = concatenateMemberId(member_id, 'C', key.toString());
    req.body.contact_person[key].contact_id = contactId;

    // QUERY TO DATABASE (CONTACT TABLE)
    const { contact_id, ...rest } = req.body.contact_person;
    const contactInformation = { ...rest, contact_id };

    const contactAttributes = Object.keys(contactInformation[key]);
    const contactValues = Object.values(contactInformation[key]);

    console.log('CONTACT ID:', contactId);

    await insertIntoTable('contact_person', contactAttributes, contactValues);
  }

  res.json({
    message: 'POST new contact persons',
    contact_person: req.body.contact_person,
  });
});
// UPDATE one contact by id
contactsRouter.delete('/contact/:id', (req, res) => {
  res.json({ message: 'DELETE one contact' });
});
// DELETE one contact by id
contactsRouter.patch('/contact/:id', (req, res) => {
  res.json({ message: 'UPDATE one contact' });
});

export default contactsRouter;

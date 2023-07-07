import express from 'express';
const educationRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all education
educationRouter.get('/education', (req, res) => {
  res.json({ message: 'GET all education' });
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
  res.json({ message: 'POST new education' });
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

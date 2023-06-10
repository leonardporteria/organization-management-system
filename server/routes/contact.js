import express from 'express';
const contactsRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all contacts
contactsRouter.get('/contacts', (req, res) => {
  res.json({ message: 'GET all contacts' });
});

// GET one contact by id
contactsRouter.get('/contacts/:id', (req, res) => {
  res.json({ message: 'GET one contact' });
});
// POST new contact
contactsRouter.post('/contacts', (req, res) => {
  console.log(req.body);
  res.json({ message: 'POST new contact' });
});
// UPDATE one contact by id
contactsRouter.delete('/contacts/:id', (req, res) => {
  res.json({ message: 'DELETE one contact' });
});
// DELETE one contact by id
contactsRouter.patch('/contacts/:id', (req, res) => {
  res.json({ message: 'UPDATE one contact' });
});

export default contactsRouter;

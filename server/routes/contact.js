import express from 'express';
const contactsRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all contacts
contactsRouter.get('/contact', (req, res) => {
  res.json({ message: 'GET all contacts' });
});

// GET one contact by id
contactsRouter.get('/contact/:id', (req, res) => {
  res.json({ message: 'GET one contact' });
});
// POST new contact
contactsRouter.post('/contact', (req, res) => {
  res.json({ message: 'POST new contact' });
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

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
educationRouter.post('/education', (req, res) => {
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

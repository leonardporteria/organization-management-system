import express from 'express';
const legalDependentsRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all legalDependents
legalDependentsRouter.get('/legalDependents', (req, res) => {
  res.json({ message: 'GET all legalDependents' });
});

// GET one legalDependent by id
legalDependentsRouter.get('/legalDependents/:id', (req, res) => {
  res.json({ message: 'GET one legalDependent' });
});
// POST new legalDependent
legalDependentsRouter.post('/legalDependents', (req, res) => {
  console.log(req.body);
  res.json({ message: 'POST new legalDependent' });
});
// UPDATE one legalDependent by id
legalDependentsRouter.delete('/legalDependents/:id', (req, res) => {
  res.json({ message: 'DELETE one legalDependent' });
});
// DELETE one legalDependent by id
legalDependentsRouter.patch('/legalDependents/:id', (req, res) => {
  res.json({ message: 'UPDATE one legalDependent' });
});

export default legalDependentsRouter;

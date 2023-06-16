import express from 'express';
const legalDependentsRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all legalDependents
legalDependentsRouter.get('/legalDependent', (req, res) => {
  res.json({ message: 'GET all legalDependents' });
});

// GET one legalDependent by id
legalDependentsRouter.get('/legalDependent/:id', (req, res) => {
  res.json({ message: 'GET one legalDependent' });
});
// POST new legalDependent
legalDependentsRouter.post('/legalDependent', (req, res) => {
  console.log(req.body);
  res.json({ message: 'POST new legalDependent' });
});
// UPDATE one legalDependent by id
legalDependentsRouter.delete('/legalDependent/:id', (req, res) => {
  res.json({ message: 'DELETE one legalDependent' });
});
// DELETE one legalDependent by id
legalDependentsRouter.patch('/legalDependent/:id', (req, res) => {
  res.json({ message: 'UPDATE one legalDependent' });
});

export default legalDependentsRouter;

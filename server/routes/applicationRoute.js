import express from 'express';
const applicationRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all applications
applicationRouter.get('/applications', (req, res) => {
  res.json({ message: 'GET all applications' });
});

// GET one book by id
applicationRouter.get('/applications/:id', (req, res) => {
  res.json({ message: 'GET one application' });
});
// POST new application
applicationRouter.post('/applications', (req, res) => {
  console.log(req.body);
  res.json({ message: 'POST new application' });
});
// UPDATE one application by id
applicationRouter.delete('/applications/:id', (req, res) => {
  res.json({ message: 'DELETE one application' });
});
// DELETE one application by id
applicationRouter.patch('/applications/:id', (req, res) => {
  res.json({ message: 'UPDATE one application' });
});

export default applicationRouter;

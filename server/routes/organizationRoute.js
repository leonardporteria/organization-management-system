import express from 'express';
const organizationRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all organizations
organizationRouter.get('/organizations', (req, res) => {
  res.json({ message: 'GET all organizations' });
});

// GET one organization by id
organizationRouter.get('/organizations/:id', (req, res) => {
  res.json({ message: 'GET one organization' });
});
// POST new organization
organizationRouter.post('/organizations', (req, res) => {
  console.log(req.body);
  res.json({ message: 'POST new organization' });
});
// UPDATE one organization by id
organizationRouter.delete('/organizations/:id', (req, res) => {
  res.json({ message: 'DELETE one organization' });
});
// DELETE one organization by id
organizationRouter.patch('/organizations/:id', (req, res) => {
  res.json({ message: 'UPDATE one organization' });
});

export default organizationRouter;

import express from 'express';
const memberRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all members
memberRouter.get('/member', (req, res) => {
  res.json({ message: 'GET all members' });
});

// GET one member by id
memberRouter.get('/member/:id', (req, res) => {
  res.json({ message: 'GET one member' });
});
// POST new member
memberRouter.post('/member', (req, res) => {
  console.log(req.body);
  res.json({ message: 'POST new member' });
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

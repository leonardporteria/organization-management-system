import express from 'express';
const organizationRouter = express.Router();

// utils import
import {
  generateMemberId,
  concatenateMemberId,
} from '../utils/memberIdGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { selectFromTable } from '../schema/select/selectTable.js';
import { generateClubId } from '../utils/clubIdGenerator.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all organizations
organizationRouter.get('/organization', async (req, res) => {
  const rows = await selectFromTable('organization_club');
  res.json({ message: 'GET all organizations', organization: rows });
});

// GET one organization by id
organizationRouter.get('/organization/:id', (req, res) => {
  res.json({ message: 'GET one organization' });
});
// POST new organization
organizationRouter.post('/organization', async (req, res) => {
  // SHOULD NOT INSERT IF NOT AN ADMIN
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const clubId = generateClubId(uid.toString());
  req.body.organization_club.club_id = clubId;
  console.log(clubId);
  // organizaiton
  // QUERY TO DATABASE (ORGANIZATION TABLE)
  const { club_id, ...rest } = req.body.organization_club;
  const clubInformation = { ...rest, club_id };
  const clubAttributes = Object.keys(clubInformation);
  const clubValues = Object.values(clubInformation);
  console.log('CLUB ID:', clubId);
  // await insertIntoTable('organization_club', clubAttributes, clubValues);
  res.json({
    message: 'POST new organization',
    club: clubInformation,
  });
});
// UPDATE one organization by id
organizationRouter.delete('/organization/:id', (req, res) => {
  res.json({ message: 'DELETE one organization' });
});
// DELETE one organization by id
organizationRouter.patch('/organization/:id', (req, res) => {
  res.json({ message: 'UPDATE one organization' });
});

export default organizationRouter;

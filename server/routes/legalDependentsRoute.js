import express from 'express';
const legalDependentsRouter = express.Router();

// utils import
import { generateMemberId, concatenateMemberId } from '../utils/idGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { selectFromTable } from '../schema/select/selectTable.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all legalDependents
legalDependentsRouter.get('/legalDependent', async (req, res) => {
  const rows = await selectFromTable('legal_dependents');
  res.json({ message: 'GET all legal dependents', education: rows });
});

// GET one legalDependent by id
legalDependentsRouter.get('/legalDependent/:id', (req, res) => {
  res.json({ message: 'GET one legalDependent' });
});
// POST new legalDependent
legalDependentsRouter.post('/legalDependent', async (req, res) => {
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateMemberId(uid.toString());

  // concatenate the id for multivalues
  // legal dependent
  for (const key in req.body.legal_dependents) {
    const dependentId = concatenateMemberId(member_id, 'D', key.toString());
    req.body.legal_dependents[key].dependent_id = dependentId;

    // QUERY TO DATABASE (CONTACT TABLE)
    const { dependent_id, ...rest } = req.body.legal_dependents;
    const dependentInformation = { ...rest, dependent_id };

    const dependentAttributes = Object.keys(dependentInformation[key]);
    const dependentValues = Object.values(dependentInformation[key]);

    console.log('DEPENDENT ID:', dependentId);

    await insertIntoTable(
      'legal_dependents',
      dependentAttributes,
      dependentValues
    );
  }

  res.json({
    message: 'POST new legalDependent',
    legalDependent: req.body.legal_dependents,
  });
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

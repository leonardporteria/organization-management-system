import express from 'express';
import { pool } from '../config/database.js';
import { setStartingValues } from '../schema/insert/insertStartingValues.js';
import dotenv from 'dotenv';
dotenv.config();

const queryRouter = express.Router();

import { queryAnswers } from '../schema/queries.js';

import { generateClubId } from '../utils/clubIdGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all query
queryRouter.get('/query', async (req, res) => {
  res.json({ message: 'GET all query' });
});

// SETUP STARTING VALUES
// check membership status
queryRouter.get('/query/add/initialzie', async (req, res) => {
  try {
    await setStartingValues();
  } catch (e) {
    res.json({
      err: e,
    });
  }

  res.json({
    message: 'SET staring values',
  });
});

// UPDATE MEMBERSHIP STATUS
// check membership status
queryRouter.get('/query/status/:member_id/:club_id', async (req, res) => {
  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
    SELECT application_status
    FROM application_details
    WHERE member_id = "${req.params.member_id}" 
    AND club_id = "${req.params.club_id}"
    LIMIT 1;
      `;

  await pool.query(useQuery);
  const [rows] = await pool.query(query);
  res.json({
    message: 'GET one query',
    params: req.params.id,
    data: rows,
    query: query,
  });
});
// change membership status
queryRouter.post('/query/status/:member_id/:club_id', async (req, res) => {
  console.log(req.body.data);
  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
    UPDATE application_details
    SET application_status = "${req.body.data}"
    WHERE member_id = "${req.params.member_id}" 
    AND club_id = "${req.params.club_id}";
      `;

  await pool.query(useQuery);
  const [rows] = await pool.query(query);

  res.json({ message: 'POST one status', data: rows, query: query });
});

// ADD NEW ORGANIZATION
// change membership status
queryRouter.post('/query/add/organization', async (req, res) => {
  console.log(req.body);

  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const clubId = generateClubId(uid.toString());
  req.body.club_id = clubId;
  console.log(clubId);
  // organizaiton
  // QUERY TO DATABASE (ORGANIZATION TABLE)
  const { club_id, ...rest } = req.body;
  const clubInformation = { ...rest, club_id };
  const clubAttributes = Object.keys(clubInformation);
  const clubValues = Object.values(clubInformation);
  console.log('CLUB ID:', clubId);
  const rows = await insertIntoTable(
    'organization_club',
    clubAttributes,
    clubValues
  );

  res.json({ message: 'POST one new club', data: rows });
});

// CHANGE MEMBER ORGANIZATION
// change membership status
queryRouter.post('/query/update/organization', async (req, res) => {
  console.log(req.body);
  const useQuery = `USE ${process.env.MYSQL_DATABASE};`;
  const query = `
  INSERT INTO application_details (member_id, club_id, education_id, dependent_id, contact_id, application_status, date_of_application)
  SELECT member_id, '${req.body.club_id}', education_id, dependent_id, contact_id, 'Pending', CURDATE()
  FROM application_details
  WHERE member_id = '${req.body.member_id}';
      `;

  await pool.query(useQuery);
  const [rows] = await pool.query(query);

  res.json({ message: 'POST new application', data: rows });
});

// 15 QUERIES
queryRouter.get('/query/:difficulty/:number', async (req, res) => {
  const { difficulty, number } = req.params;

  // Find the corresponding queries based on difficulty and number
  const queries = queryAnswers[difficulty]?.filter(
    (query) => query.queryNumber === Number(number)
  );

  if (queries && queries.length > 0) {
    const useQuery = `USE ${process.env.MYSQL_DATABASE};`;

    // Execute each query and collect the results
    const [results] = await Promise.all(
      queries.map(async (query) => {
        await pool.query(useQuery);
        const [rows] = await pool.query(query.sqlScript);
        return rows;
      })
    );
    console.log(results);
    res.json({
      message: 'GET one query',
      params: req.params.id,
      data: results,
      queries: queries.map((query) => query.sqlScript),
    });
  } else {
    res.status(404).json({
      message: 'Query not found',
    });
  }
});

export default queryRouter;

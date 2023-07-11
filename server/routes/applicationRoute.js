import express from 'express';
const applicationRouter = express.Router();

// utils import
import {
  generateMemberId,
  concatenateMemberId,
} from '../utils/memberIdGenerator.js';
import { getApplicationsToday } from '../schema/select/selectMember.js';
import { selectFromTable } from '../schema/select/selectTable.js';

// query imports
import { insertIntoTable } from '../schema/insert/insertIntoTable.js';

/**
 * ROOT PATH: /api
 */
// GET all applications
applicationRouter.get('/application', async (req, res) => {
  const rows = await selectFromTable('application_details');
  res.json({ message: 'GET all applications', application: rows });
});

// GET one book by id
applicationRouter.get('/application/:id', (req, res) => {
  res.json({ message: 'GET one application' });
});
// POST new application
applicationRouter.post('/application', async (req, res) => {
  // ID GENERATION
  const applicantToday = await getApplicationsToday();
  const [uid] = Object.values(applicantToday[0]);
  const member_id = generateMemberId(uid.toString());
  req.body.member_information.member_id = member_id;

  // console.log(req.body.organization_club);
  // console.log(req.body.education);
  // console.log(req.body.contact_person);
  // console.log(req.body.legal_dependents);

  // Initialize an empty array to hold the objects
  const applicantDetails = [];

  // Generate unique IDs and distribute the values into objects
  const educationKeys = Object.keys(req.body.education);
  const contactKeys = Object.keys(req.body.contact_person);
  const dependentKeys = Object.keys(req.body.legal_dependents);

  contactKeys.forEach((contactKey) => {
    let hasEducationValue = 0;

    for (const key in req.body.education) {
      const obj = req.body.education[key];
      const hasValue = Object.values(obj).some((value) => value !== '');
      if (hasValue) {
        hasEducationValue++;
      }
    }

    console.log('contact length: ', contactKeys.length);
    console.log('dep length: ', dependentKeys.length);
    console.log('educ length: ', hasEducationValue);

    if (dependentKeys.length === 0 && hasEducationValue === 0) {
      // empty dependent and education
      console.log('CONTACT ONLY');
      const contactId = concatenateMemberId(
        member_id,
        'C',
        contactKey.toString()
      );

      const applicant = {
        applicant_code: applicantDetails.length + 1,
        member_id: member_id,
        club_id: req.body.organization_club.club_id,
        contact_id: contactId,
        dependent_id: null,
        education_id: null,
        application_status: 'Pending',
      };

      applicantDetails.push(applicant);
    } else if (hasEducationValue === 0) {
      console.log('CONTACT + DEPENDENT');
      educationKeys.forEach((educationKey, index) => {
        const educationValue = req.body.education[educationKey];
        console.log(educationValue);

        const contactId = concatenateMemberId(
          member_id,
          'C',
          contactKey.toString()
        );
        const educationId =
          educationValue.school_name !== '' &&
          educationValue.date_graduated !== '' &&
          educationValue.course_strand !== ''
            ? concatenateMemberId(member_id, 'E', index.toString())
            : null;

        const applicant = {
          applicant_code: applicantDetails.length + 1,
          member_id: member_id,
          club_id: req.body.organization_club.club_id,
          contact_id: contactId,
          dependent_id: null,
          education_id: educationId,
          application_status: 'Pending',
        };

        applicantDetails.push(applicant);
      });
    } else if (dependentKeys.length === 0) {
      console.log('CONTACT + EDUCACTION');

      educationKeys.forEach((educationKey, index) => {
        const educationValue = req.body.education[educationKey];
        console.log(educationValue);

        const contactId = concatenateMemberId(
          member_id,
          'C',
          contactKey.toString()
        );

        const educationId =
          educationValue.school_name !== '' &&
          educationValue.date_graduated !== '' &&
          educationValue.course_strand !== ''
            ? concatenateMemberId(member_id, 'E', index.toString())
            : null;

        const applicant = {
          applicant_code: applicantDetails.length + 1,
          member_id: member_id,
          club_id: req.body.organization_club.club_id,
          contact_id: contactId,
          dependent_id: null,
          education_id: educationId,
          application_status: 'Pending',
        };

        applicantDetails.push(applicant);
      });
    } else {
      // empty education
      console.log('DEPENDENT + CONTACT + EDUCATION');
      dependentKeys.forEach((dependentKey) => {
        educationKeys.forEach((educationKey, index) => {
          const educationValue = req.body.education[educationKey];
          console.log(educationValue);

          const contactId = concatenateMemberId(
            member_id,
            'C',
            contactKey.toString()
          );
          const dependentId = concatenateMemberId(
            member_id,
            'D',
            dependentKey.toString()
          );
          const educationId =
            educationValue.school_name !== '' &&
            educationValue.date_graduated !== '' &&
            educationValue.course_strand !== ''
              ? concatenateMemberId(member_id, 'E', index.toString())
              : null;

          const applicant = {
            applicant_code: applicantDetails.length + 1,
            member_id: member_id,
            club_id: req.body.organization_club.club_id,
            contact_id: contactId,
            dependent_id: dependentId,
            education_id: educationId,
            application_status: 'Pending',
          };

          applicantDetails.push(applicant);
        });
      });
    }
  });

  // remove repeated values

  console.log(applicantDetails);

  res.json({
    message: 'POST new application',
    application_details: applicantDetails,
  });
});

// UPDATE one application by id
applicationRouter.delete('/application/:id', (req, res) => {
  res.json({ message: 'DELETE one application' });
});
// DELETE one application by id
applicationRouter.patch('/application/:id', (req, res) => {
  res.json({ message: 'UPDATE one application' });
});

export default applicationRouter;

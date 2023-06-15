import { useState, useCallback } from 'react';

import OrganizationInformation from './subForms/organizationInfo/organizationInformation';
import PersonalInformation from './subForms/personalInfo/personalInformation';
import SponsorInformation from './subForms/sponsorInfo/sponsorInformation';
import EmployeeInformation from './subForms/employmentInfo/employmentInformation';
import EducaitonInformation from './subForms/educationInfo/educationInformation';
import LegalDependentInformation from './subForms/legalDepInfo/legalDependentsInformation';
import ContactInformation from './subForms/contactInfo/contactInformation';

import './ApplicationForm.scss';

const ApplicationForm = () => {
  const [applicantData, setApplicantData] = useState({
    application_status: {
      applicant_code: '',
      member_id: '',
      club_id: '',
      education_id: '',
      dependent_id: '',
      contact_id: '',
      applcation_status: 'Pending',
      date_of_application: '',
    },
    member_information: {
      member_id: '',
      member_name: '',
      place_of_birth: '',
      date_of_birth: '',
      address: '',
      age: '',
      sex: '',
      heigh_in_cm: '',
      weight_in_kg: '',
      bmi: '',
      civil_status: '',
      nationality: '',
      religion: '',
      blood_type: '',
      telephone_number: '',
      cellphone_number: '',
      email: '',
      sponsor_name: '',
      sponsor_membership_id: '',
      work_title_or_position: '',
      company_code: '',
    },
    company: {
      company_code: '',
      company_name: '',
      company_telephone: '',
      company_email: '',
      company_address: '',
    },
    organization_club: {
      club_id: '',
      club_region: '',
      club_name: '',
      club_president: '',
      club_president_member_id: '',
    },
    // MULTIVALUES
    education: [
      {
        education_id: '',
        education_level: '',
        school_name: '',
        date_graduated: '',
        course_strand: '',
      },
    ],
    legal_dependents: [
      {
        dependent_id: '',
        dependent_name: '',
        dependent_date_of_birth: '',
        dependent_contact_number: '',
        dependent_relationship: '',
      },
    ],
    contact_person: [
      {
        contact_id: '',
        contact_name: '',
        contact_cellphone_number: '',
        contact_address: '',
        contact_relationship: '',
      },
    ],
  });

  const handleOnInputChange = useCallback((value) => {
    console.log(value);
    setApplicantData((prevData) => ({
      ...prevData,
      application_status: {
        ...prevData.application_status,
        date_of_application: value.date_of_application,
      },

      organization_club: {
        ...prevData.organization_club,
        club_region: value.club_region,
        club_name: value.club_name,
        club_president: value.club_president,
      },
    }));
  });

  const handleSubmit = () => {
    console.log('submit');

    console.log(applicantData);
  };

  return (
    <>
      <div className='Header'>
        <h1>
          Join our Socio-Civing Organization!
          <br /> Fill up the form below
        </h1>
      </div>

      <div className='Form'>
        <OrganizationInformation onInputChange={handleOnInputChange} />
        <PersonalInformation />
        <EmployeeInformation />
        <EducaitonInformation />
        <LegalDependentInformation />
        <ContactInformation />
        <SponsorInformation />

        <div className='Form__button' onClick={handleSubmit}>
          <h1 className='Form__button__submit'>SUBMIT APPLICAITON</h1>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;

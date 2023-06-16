import { useState, useCallback } from 'react';

import OrganizationInformation from './subForms/organizationInfo/organizationInformation';
import PersonalInformation from './subForms/personalInfo/personalInformation';
import SponsorInformation from './subForms/sponsorInfo/sponsorInformation';
import EmployeeInformation from './subForms/employmentInfo/employmentInformation';
import EducationInformation from './subForms/educationInfo/educationInformation';
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
      // name
      last_name: '',
      first_name: '',
      middle_name: '',
      suffix: '',
      // ===
      place_of_birth: '',
      date_of_birth: '',
      // address
      house_number: '',
      street: '',
      barangay: '',
      city: '',
      province: '',
      zip_code: '',
      // ===
      sex: '',
      heigh_in_cm: '',
      weight_in_kg: '',
      civil_status: '',
      nationality: '',
      religion: '',
      blood_type: '',
      telephone_number: '',
      cellphone_number: '',
      email: '',
      // derived
      age: '',
      bmi: '',
      // ===
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
    education: {
      elementary: {
        education_id: '',
        education_level: '',
        school_name: '',
        date_graduated: '',
        course_strand: '',
      },
      junior_hs: {
        education_id: '',
        education_level: '',
        school_name: '',
        date_graduated: '',
        course_strand: '',
      },
      senior_hs: {
        education_id: '',
        education_level: '',
        school_name: '',
        date_graduated: '',
        course_strand: '',
      },
      college: {
        education_id: '',
        education_level: '',
        school_name: '',
        date_graduated: '',
        course_strand: '',
      },
      post_grad: {
        education_id: '',
        education_level: '',
        school_name: '',
        date_graduated: '',
        course_strand: '',
      },
    },

    legal_dependents: {},

    contact_person: {},
  });

  // ORGANIZATION CALLBACK
  const handleOrganizationInput = useCallback((value) => {
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

  // PERSONAL DETAILS CALLBACK
  const handlePersonalInput = useCallback((value) => {
    setApplicantData((prevData) => ({
      ...prevData,
      member_information: { ...prevData.member_information, ...value },
    }));
  });

  // EMPLOYMENT (COMPANY) DETAILS CALLBACK
  const handleEmploymentInput = useCallback((value) => {
    setApplicantData((prevData) => ({
      ...prevData,
      member_information: {
        ...prevData.member_information,
        work_title_or_position: value.work_title_or_position,
      },

      company: {
        ...prevData.company,
        company_name: value.company_name,
        company_telephone: value.company_telephone,
        company_email: value.company_email,
        company_address: value.company_address,
      },
    }));
  });

  // SPONSOR DETAILS CALLBACK
  const handleSponsorInput = useCallback((value) => {
    setApplicantData((prevData) => ({
      ...prevData,
      member_information: { ...prevData.member_information, ...value },
    }));
  });

  // MULTIVALUES
  // EDUCATION DETAILS CALLBACK
  const handleEducationInput = useCallback((value) => {
    setApplicantData((prevData) => ({
      ...prevData,
      education: { ...prevData.education, ...value },
    }));
  });

  // LEGAL DEPENDENTS DETAILS CALLBACK
  const handleDependentInput = useCallback((value) => {
    setApplicantData((prevData) => ({
      ...prevData,
      legal_dependents: { ...prevData.legal_dependents, ...value },
    }));
  });

  // CONTACT DETAILS CALLBACK
  const handleContactInput = useCallback((value) => {
    setApplicantData((prevData) => ({
      ...prevData,
      contact_person: { ...prevData.contact_person, ...value },
    }));
  });

  // ON SUBMIT
  const handleFormSubmit = () => {
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
        <OrganizationInformation onInputChange={handleOrganizationInput} />
        <PersonalInformation onInputChange={handlePersonalInput} />
        <EmployeeInformation onInputChange={handleEmploymentInput} />
        <EducationInformation onInputChange={handleEducationInput} />
        <LegalDependentInformation onInputChange={handleDependentInput} />
        <ContactInformation onInputChange={handleContactInput} />
        <SponsorInformation onInputChange={handleSponsorInput} />

        <div className='Form__button' onClick={handleFormSubmit}>
          <h1 className='Form__button__submit'>SUBMIT APPLICAITON</h1>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;

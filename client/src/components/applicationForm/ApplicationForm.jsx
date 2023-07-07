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
  const [applicantData, setApplicantData] = useState({});

  // SINGLEVALUES
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

  // API POST REQUEST HELPER
  const postAPI = async (path) => {
    try {
      const response = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicantData),
      });

      return await response.json();
    } catch (error) {
      console.error(`Error in ${path}:`, error);
      return null;
    }
  };

  // ON SUBMIT
  const [fetchResponse, setFetchResponse] = useState(null);
  const handleFormSubmit = async () => {
    console.log('SUBMIT APPLICATION FORM');

    // API URLs
    const baseURL = 'http://localhost:5173/api';
    const applicationURL = baseURL + '/application';
    const memberURL = baseURL + '/member';
    const organizationURL = baseURL + '/organization';
    const companyURL = baseURL + '/company';
    const contactURL = baseURL + '/contact';
    const educationURL = baseURL + '/education';
    const dependentURL = baseURL + '/legalDependent';

    // CONTACT PERSON PATH [WORKING]
    const contactResponse = await postAPI(contactURL);
    console.log('Contact POST REQUEST Response: ', contactResponse);

    // EDUCATION PATH [WORKING]
    const educationResponse = await postAPI(educationURL);
    console.log('Education POST REQUEST Response: ', educationResponse);

    // LEGAL DEPENDENTS PATH [WORKING]
    const dependentResponse = await postAPI(dependentURL);
    console.log('Dependent POST REQUEST Response: ', dependentResponse);

    // COMPANY PATH
    const companyResponse = await postAPI(companyURL);
    console.log('Company POST REQUEST Response: ', companyResponse);

    // ORGANIZATION CLUB PATH
    const organizaitonResponse = await postAPI(organizationURL);
    console.log('Organizaiton POST REQUEST Response: ', organizaitonResponse);

    // MEMBER INFORMATION PATH [WORKING]
    const memberResponse = await postAPI(memberURL);
    console.log('Member POST REQUEST Response: ', memberResponse);

    // APPLICATION DETAILS PATH
    const applicationResponse = await postAPI(applicationURL);
    console.log('Application POST REQUEST Response: ', applicationResponse);
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

      {fetchResponse && <div>{JSON.stringify(fetchResponse)}</div>}
    </>
  );
};

export default ApplicationForm;

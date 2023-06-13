import { useState } from 'react';

import OrganizationInformation from './subForms/organizationInfo/organizationInformation';
import PersonalInformation from './subForms/personalInfo/personalInformation';
import SponsorInformation from './subForms/sponsorInfo/sponsorInformation';
import EmployeeInformation from './subForms/employmentInfo/employmentInformation';
import EducaitonInformation from './subForms/educationInfo/educationInformation';
import LegalDependentInformation from './subForms/legalDepInfo/legalDependentsInformation';
import ContactInformation from './subForms/contactInfo/contactInformation';

import './ApplicationForm.scss';

const ApplicationForm = () => {
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    console.log('submit');
    const url = 'http://localhost:5173/api/company';
    const data = {
      company_code: 'C01-NR-05',
      company_name: 'newCompany',
      company_telephone: '87000',
      company_email: 'mycompany@email.com',
      company_address: 'dyan lang st.',
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if required
      },
      body: JSON.stringify(data), // Convert data to JSON string
    })
      .then((response) => response.json()) // Parse response data as JSON
      .then((result) => {
        // Handle the result
        setResponse(result);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  };

  return (
    <div className='Form'>
      <div className='Form__Header'>
        <h1>
          Join Our Socio-Civing Organization!
          <br /> Fill up the form below
        </h1>
      </div>

      <OrganizationInformation />
      <PersonalInformation />
      <EmployeeInformation />
      <EducaitonInformation />
      <LegalDependentInformation />
      <ContactInformation />
      <SponsorInformation />

      <div className='Form__button' onClick={handleSubmit}>
        <h1 className='Form__button__submit'>Submit Application</h1>
      </div>
      {response && <div>{JSON.stringify(response)}</div>}
    </div>
  );
};

export default ApplicationForm;

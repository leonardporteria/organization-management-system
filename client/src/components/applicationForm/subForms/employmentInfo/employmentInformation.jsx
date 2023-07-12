import { useState, useEffect } from 'react';

import './employmentInformation.scss';

const EmployeeInformation = ({ onInputChange }) => {
  const [employmentData, setEmploymentData] = useState({
    work_title_or_position: '',
    company_telephone: '',
    company_email: '',
    company_address: '',
    company_name: '',
  });

  const handleEmploymentData = (event, name) => {
    setEmploymentData((prevEmploymentData) => ({
      ...prevEmploymentData,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    // console.log(employmentData);
    onInputChange(employmentData);
  }, [employmentData]);

  return (
    <div className='Form__Employment'>
      {/* EMPLOYMENT DETAILS */}

      <h1 className='Form__Employment__title'>EMPLOYMENT INFORMATION</h1>

      <div className='Form__Employment__container'>
        <label>
          <p>Name of Office:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEmploymentData(e, 'company_name');
            }}
          />
        </label>
        <label>
          <p>Title and Position:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEmploymentData(e, 'work_title_or_position');
            }}
          />
        </label>
      </div>

      <div className='Form__Employment__container'>
        <label>
          <p>Workplace Telephone Number:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEmploymentData(e, 'company_telephone');
            }}
          />
        </label>
        <label>
          <p>Workplace Email:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEmploymentData(e, 'company_email');
            }}
          />
        </label>
      </div>

      <div className='Form__Employment__container'>
        <label>
          <p>Company Address:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEmploymentData(e, 'company_address');
            }}
          />
        </label>
      </div>

      <div className='Form__Employment__line'></div>
    </div>
  );
};

export default EmployeeInformation;

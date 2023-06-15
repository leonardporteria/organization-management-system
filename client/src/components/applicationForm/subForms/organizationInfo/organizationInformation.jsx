import { useState, useEffect } from 'react';

import './organizationInformation.scss';

const OrganizationInformation = ({ onInputChange }) => {
  const [clubData, setClubData] = useState({
    club_region: '',
    club_name: '',
    club_president: '',
    date_of_application: '',
  });

  const handleClubData = (event, name) => {
    setClubData((prevClub) => ({
      ...prevClub,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    console.log(clubData);
    onInputChange(clubData);
  }, [clubData]);

  return (
    <div className='Form__Organization'>
      {/* ORGANIZATION DETAILS */}
      <h1 className='Form__Organization__title'>ORGANIZATION INFORMATION</h1>

      <div className='Form__Organization__container'>
        <label>
          <p className='required'>Organization Region</p>
          <input
            type='text'
            onBlur={(e) => {
              handleClubData(e, 'club_region');
            }}
          />
        </label>
        <label>
          <p>Club Name</p>
          <input
            type='text'
            onBlur={(e) => {
              handleClubData(e, 'club_name');
            }}
          />
        </label>
        <label>
          <p>Club President</p>
          <input
            type='text'
            onBlur={(e) => {
              handleClubData(e, 'club_president');
            }}
          />
        </label>
        <label>
          <p>Date of Application</p>
          <input
            type='date'
            onBlur={(e) => {
              handleClubData(e, 'date_of_application');
            }}
          />
        </label>
      </div>

      <div className='Form__Organization__line'></div>
    </div>
  );
};

export default OrganizationInformation;

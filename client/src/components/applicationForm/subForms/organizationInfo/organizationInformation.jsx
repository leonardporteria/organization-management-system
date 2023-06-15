import { useState, useEffect } from 'react';

import './organizationInformation.scss';

const OrganizationInformation = ({ onInputChange }) => {
  const [clubData, setClubData] = useState({
    club_region: '',
    club_name: '',
    club_president: '',
    date_of_application: '',
  });

  const handleClubRegion = (event) => {
    setClubData((prevClub) => ({
      ...prevClub,
      club_region: event.target.value,
    }));
  };

  const handleClubName = (event) => {
    setClubData((prevClub) => ({
      ...prevClub,
      club_name: event.target.value,
    }));
  };

  const handleClubPresident = (event) => {
    setClubData((prevClub) => ({
      ...prevClub,
      club_president: event.target.value,
    }));
  };

  const handleDateOfApplication = (event) => {
    setClubData((prevClub) => ({
      ...prevClub,
      date_of_application: event.target.value,
    }));
  };

  useEffect(() => {
    onInputChange(clubData);
  }, [clubData]);

  return (
    <div className='Form__Organization'>
      {/* ORGANIZATION DETAILS */}
      <h1 className='Form__Organization__title'>ORGANIZATION INFORMATION</h1>

      <div className='Form__Organization__container'>
        <label>
          <p>Organization Region:</p>
          <input type='text' onBlur={handleClubRegion} />
        </label>
        <label>
          <p>Club Name:</p>
          <input type='text' onBlur={handleClubName} />
        </label>
        <label>
          <p>Club President:</p>
          <input type='text' onBlur={handleClubPresident} />
        </label>
        <label>
          <p>Date of Application:</p>
          <input type='date' onBlur={handleDateOfApplication} />
        </label>
      </div>

      <div className='Form__Organization__line'></div>
    </div>
  );
};

export default OrganizationInformation;

import { useState, useEffect } from 'react';

import './sponsorInformation.scss';

const SponsorInformation = ({ onInputChange }) => {
  const [sponsorData, setSponsordata] = useState({
    sponsor_name: '',
    sponsor_membership_id: '',
  });

  const handleSponsorData = (event, name) => {
    setSponsordata((prevSponsorData) => ({
      ...prevSponsorData,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    // console.log(sponsorData);
    onInputChange(sponsorData);
  }, [sponsorData]);

  return (
    <div className='Form__Sponsor'>
      {/* SPONSOR DETAILS */}
      <h1 className='Form__Sponsor__title'>SPONSOR INFORMATION</h1>

      <div className='Form__Sponsor__container'>
        <label>
          <p>Sponsor Name:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleSponsorData(e, 'sponsor_name');
            }}
          />
        </label>
        <label>
          <p>Membership Number:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleSponsorData(e, 'sponsor_membership_id');
            }}
          />
        </label>
      </div>

      <div className='Form__Sponsor__line'></div>
    </div>
  );
};

export default SponsorInformation;

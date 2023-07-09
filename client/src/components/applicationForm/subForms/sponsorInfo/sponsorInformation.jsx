import { useState, useEffect } from 'react';

import './sponsorInformation.scss';

const SponsorInformation = ({ onInputChange }) => {
  const [availableMember, setAvailableMember] = useState([]);
  const [sponsorData, setSponsordata] = useState({
    sponsor_membership_id: '',
    sponsor_name: '',
  });

  const getAvailableMemberIds = async () => {
    const baseURL = 'http://localhost:5173/api';
    const memberURL = baseURL + '/member';

    try {
      const response = await fetch(memberURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();

      const memberData = responseData.members.map((member) => ({
        member_id: member.member_id,
        member_name: member.member_name,
      }));

      setAvailableMember((prevMemberData) => memberData);

      console.log(availableMember);
    } catch (error) {
      console.error(`Error in ${memberURL}:`, error);
    }
  };

  // check if the input sponsor member id exists
  const [memberExists, setMemberExists] = useState(false);
  const [sponsorMemberName, setSponsorMemberName] = useState('');
  const handleMemberNumberChange = (event) => {
    const inputMemberId = event.target.value;
    const memberExists = availableMember.some(
      (member) => member.member_id === inputMemberId
    );
    setMemberExists(() => memberExists);
    console.log('Member exists:', memberExists);

    handleSponsorInfo(memberExists, event);
  };

  // set the member name and id of the sponsor
  const handleSponsorInfo = (memberExists, event) => {
    console.log('onblur', memberExists);
    if (memberExists) {
      const inputMemberId = event.target.value;
      const matchedMember = availableMember.find(
        (member) => member.member_id === inputMemberId
      );

      console.log(matchedMember);

      setSponsordata((prevSponsorData) => ({
        ...prevSponsorData,
        sponsor_membership_id: matchedMember.member_id,
        sponsor_name: matchedMember.member_name,
      }));

      setSponsorMemberName(matchedMember.member_name);

      console.log(sponsorData);
      return;
    }
    setSponsorMemberName('');
    setSponsordata((prevSponsorData) => ({
      ...prevSponsorData,
      sponsor_membership_id: '',
      sponsor_name: '',
    }));
  };

  useEffect(() => {
    // console.log(sponsorData);
    getAvailableMemberIds();
    onInputChange(sponsorData);
  }, [sponsorData]);

  return (
    <div className='Form__Sponsor'>
      {/* SPONSOR DETAILS */}
      <h1 className='Form__Sponsor__title'>SPONSOR INFORMATION</h1>

      <div className='Form__Sponsor__container'>
        <label>
          <p>Sponsor Name:</p>
          <input type='text' defaultValue={sponsorMemberName} disabled={true} />
        </label>
        <label>
          <p>Membership Number:</p>
          <input
            type='text'
            onChange={(e) => {
              handleMemberNumberChange(e);
            }}
          />
        </label>
      </div>

      <div className='Form__Sponsor__line'></div>
    </div>
  );
};

export default SponsorInformation;

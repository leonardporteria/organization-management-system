import { useEffect, useState } from 'react';

import './AdminDashboard.scss';

const AdminDashboard = () => {
  const [applicationData, setApplicationData] = useState([]);
  const [memberData, setMemberData] = useState([]);
  const [organizationData, setOrganizationData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [dependentData, setDependentData] = useState([]);

  const getDataFromDatabase = async (path) => {
    const URL = 'http://localhost:5173/api' + path;

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();

      return responseData.data;
    } catch (error) {
      console.error(`Error in ${URL}:`, error);
    }
  };

  // CHANGE APPLICANT'S MEMBERSHIP STATUS
  const [changeMemberName, setChangeMemberName] = useState('');
  const [changeMemberID, setChangeMemberID] = useState('');
  const handleMemberIDChange = (event) => {
    const inputMemberId = event.target.value;
    const memberExists = memberData.some(
      (member) => member.member_id === inputMemberId
    );
    if (!memberExists) {
      setChangeMemberName('');
      return;
    }
    const matchedMember = memberData.find(
      (member) => member.member_id === inputMemberId
    );
    setChangeMemberName(matchedMember.member_name);
    setChangeMemberID(inputMemberId);
    setChangeMemberStatus('');
  };

  const [changeClubName, setChangeClubName] = useState('');
  const [changeClubID, setChangeClubID] = useState('');
  const handleClubIDChange = (event) => {
    const inputClubId = event.target.value;
    const clubExists = organizationData.some(
      (club) => club.club_id === inputClubId
    );
    if (!clubExists) {
      setChangeClubName('');
      return;
    }
    const matchedClub = organizationData.find(
      (club) => club.club_id === inputClubId
    );
    setChangeClubName(matchedClub.club_name);
    setChangeClubID(inputClubId);
    setChangeMemberStatus('');
  };

  const [selectedMemberStatus, setSelectedMemberStatus] = useState('');
  const handleMemberStatusChange = (e) => {
    const memberStatus = e.target.value;
    setSelectedMemberStatus(memberStatus);
  };

  const [changeMemberStatus, setChangeMemberStatus] = useState('');
  const handleFindMemberStatus = async () => {
    const memberStatus = await getDataFromDatabase(
      `/query/status/${changeMemberID}/${changeClubID}`
    );
    setChangeMemberStatus(memberStatus[0].application_status);
  };

  const handleChangeMemberStatus = async (path, data) => {
    console.log(path);
    console.log(data);
    const URL = 'http://localhost:5173/api' + path;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data }),
      });

      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error(`Error in ${path}:`, error);
      return null;
    }
  };

  // ADD NEW ORGANIZATION
  const [addMemberName, setAddMemberName] = useState('');
  const [addMemberID, setAddMemberID] = useState('');
  const handleMemberIDAdd = (event) => {
    const inputMemberId = event.target.value;
    const memberExists = memberData.some(
      (member) => member.member_id === inputMemberId
    );
    if (!memberExists) {
      setAddMemberName('');
      return;
    }
    const matchedMember = memberData.find(
      (member) => member.member_id === inputMemberId
    );
    setAddMemberName(matchedMember.member_name);
    setAddMemberID(inputMemberId);
  };

  const [addClubRegion, setAddClubRegion] = useState('');
  const [addClubName, setAddClubName] = useState('');
  const handleClubRegionChange = (e) => {
    setAddClubRegion(() => e.target.value);
  };
  const handleClubNameChange = (e) => {
    setAddClubName(() => e.target.value);
  };

  const handleAddNewOrganization = async (path, data) => {
    // console.log(data);
    const URL = 'http://localhost:5173/api' + path;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error(`Error in ${path}:`, error);
      return null;
    }
  };

  // APPLY TO A NEW CLUB
  const [updateMemberName, setUpdateMemberName] = useState('');
  const [updateMemberID, setUpdateMemberID] = useState('');
  const handleMemberIDUpdate = (event) => {
    const inputMemberId = event.target.value;
    const memberExists = memberData.some(
      (member) => member.member_id === inputMemberId
    );
    if (!memberExists) {
      setUpdateMemberName('');
      return;
    }
    const matchedMember = memberData.find(
      (member) => member.member_id === inputMemberId
    );
    setUpdateMemberName(matchedMember.member_name);
    setUpdateMemberID(inputMemberId);
  };

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedClub, setSelectedClub] = useState('');
  const [selectedClubID, setSelectedClubID] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedClub('');
    setSelectedClubID('');
  };

  const handleClubChange = (event) => {
    const selectedClubId = event.target.value;
    setSelectedClub(selectedClubId);

    const club = organizationData.find(
      (data) => data.club_id === selectedClubId
    );

    setSelectedClubID(club ? club.club_id : '');
  };

  const filteredClubs = organizationData.filter(
    (data) => data.club_region === selectedRegion
  );

  const handleUpdateMemberOrganization = async (path, data) => {
    const URL = 'http://localhost:5173/api' + path;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error(`Error in ${path}:`, error);
      return null;
    }
  };

  const handleAddStartingValues = async () => {
    const URL = 'http://localhost:5173/api/query/add/initialzie';

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error(`Error in ${path}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          applicationData,
          memberData,
          organizationData,
          companyData,
          contactData,
          educationData,
          dependentData,
        ] = await Promise.all([
          getDataFromDatabase('/application'),
          getDataFromDatabase('/member'),
          getDataFromDatabase('/organization'),
          getDataFromDatabase('/company'),
          getDataFromDatabase('/contact'),
          getDataFromDatabase('/education'),
          getDataFromDatabase('/legalDependent'),
        ]);

        setApplicationData(applicationData);
        setMemberData(memberData);
        setOrganizationData(organizationData);
        setCompanyData(companyData);
        setContactData(contactData);
        setEducationData(educationData);
        setDependentData(dependentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='Admin__Header'>
        <h1>
          Welcome to Socio-Civic Organization <br /> Admin Dashboard
        </h1>
      </div>

      <div className='Admin__Section Admin__Starting'>
        <h1>Add Starting Values</h1>

        <div
          className='Admin__Button Admin__Starting__Button'
          onClick={handleAddStartingValues}
        >
          <h1>Add Starting Values</h1>
        </div>
      </div>

      <div className='Admin__Section Admin__Update'>
        <h1>Update Applicant's Membership Status</h1>
        <div className='Admin__Form Admin__Update__Form'>
          <label>
            <p>Enter Member ID:</p>
            <input
              type='text'
              onChange={(e) => {
                handleMemberIDChange(e);
              }}
            />
          </label>
          <label className='auto-fill'>
            <p>Member Name:</p>
            <input
              type='text'
              defaultValue={changeMemberName}
              disabled={true}
            />
          </label>
          <label>
            <p>Enter Club ID</p>
            <input
              type='text'
              onChange={(e) => {
                handleClubIDChange(e);
              }}
            />
          </label>
          <label className='auto-fill'>
            <p>Club Name:</p>
            <input type='text' defaultValue={changeClubName} disabled={true} />
          </label>

          <label className='auto-fill'>
            <p>Current Membership Status:</p>
            <input
              type='text'
              defaultValue={changeMemberStatus}
              disabled={true}
            />
          </label>
          <label>
            <p>New Membership Status:</p>
            <select
              value={selectedMemberStatus}
              onChange={(e) => {
                handleMemberStatusChange(e);
              }}
            >
              <option value=''>Select Application Status</option>
              <option value='Active'>Active</option>
              <option value='Cancelled'>Cancelled</option>
              <option value='Pending'>Pending</option>
              <option value='Expired'>Expired</option>
              <option value='Suspended'>Suspended</option>
              <option value='Defaulted'>Defaulted</option>
              <option value='Revoked'>Revoked</option>
            </select>
          </label>
        </div>

        <div className='Admin__Update__Buttons'>
          <div
            className='Admin__Button Admin__Update__Buttons__Check'
            onClick={handleFindMemberStatus}
          >
            <h1>Check</h1>
          </div>
          <div
            className='Admin__Button Admin__Update__Buttons__Confirm'
            onClick={() => {
              handleChangeMemberStatus(
                `/query/status/${changeMemberID}/${changeClubID}`,
                selectedMemberStatus
              );
            }}
          >
            <h1>Confirm</h1>
          </div>
        </div>
      </div>

      <div className='Admin__Section Admin__Add'>
        <h1>Add a new Organization</h1>
        <div className='Admin__Form Admin__Add__Form'>
          <label>
            <p>Club Region:</p>
            <input type='text' onChange={handleClubRegionChange} />
          </label>
          <label>
            <p>Club Name:</p>
            <input type='text' onChange={handleClubNameChange} />
          </label>
          <label>
            <p>Enter Faciliator Member ID:</p>
            <input
              type='text'
              onChange={(e) => {
                handleMemberIDAdd(e);
              }}
            />
          </label>
          <label className='auto-fill'>
            <p>Member Name:</p>
            <input type='text' defaultValue={addMemberName} disabled={true} />
          </label>
        </div>

        <div
          className='Admin__Button Admin__Add__Button'
          onClick={() => {
            handleAddNewOrganization(`/query/add/organization`, {
              club_president_member_id: addMemberID,
              club_president: addMemberName,
              club_region: addClubRegion,
              club_name: addClubName,
            });
          }}
        >
          <h1>Add New Club</h1>
        </div>
      </div>

      <div className='Admin__Section Admin__Change'>
        <h1>Change Applicant's Organization</h1>
        <div className='Admin__Form Admin__Change__Form'>
          <label>
            <p>Enter Member ID:</p>
            <input type='text' onChange={handleMemberIDUpdate} />
          </label>
          <label className='auto-fill'>
            <p>Member Name:</p>
            <input
              type='text'
              defaultValue={updateMemberName}
              disabled={true}
            />
          </label>
          <label>
            <p>Select Region</p>
            <select value={selectedRegion} onChange={handleRegionChange}>
              <option value=''>Select Region</option>
              {Array.from(
                new Set(organizationData.map((data) => data.club_region))
              ).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </label>

          <label>
            <p>Select Club:</p>
            <select value={selectedClub} onChange={handleClubChange}>
              <option value=''>Select Club</option>
              {filteredClubs.map((club) => {
                return (
                  <option key={club.club_id} value={club.club_id}>
                    {club.club_name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>

        <div
          className='Admin__Button Admin__Change__Button'
          onClick={() => {
            handleUpdateMemberOrganization(`/query/update/organization`, {
              member_id: updateMemberID,
              club_id: selectedClubID,
            });
          }}
        >
          <h1>Confirm</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

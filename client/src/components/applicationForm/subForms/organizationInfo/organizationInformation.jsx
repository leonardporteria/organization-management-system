import { useState, useEffect } from 'react';

import './organizationInformation.scss';

const OrganizationInformation = ({ onInputChange }) => {
  const [clubData, setClubData] = useState({
    club_region: '',
    club_name: '',
    club_president: '',
    date_of_application: '',
  });

  const [availableClubs, setAvailableClubs] = useState({});
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedClub, setSelectedClub] = useState('');
  const [availableClubNames, setAvailableClubNames] = useState([]);
  const [isDateInitialized, setIsDateInitialized] = useState(false);

  const handleClubData = (event, name) => {
    setClubData((prevClubData) => ({
      ...prevClubData,
      [name]: event.target.value,
    }));
  };

  // Function to get the current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString();
    let day = currentDate.getDate().toString();

    // Add leading zero for single-digit month/day
    if (month.length === 1) {
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  // FETCH AVAILABLE CLUBS PER REGION
  const getAvailableClub = async () => {
    const baseURL = 'http://localhost:5173/api';
    const organizationURL = baseURL + '/organization';

    try {
      const response = await fetch(organizationURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();

      const availableRegions = responseData.organization.reduce((acc, club) => {
        const { club_region, club_name } = club;
        if (!acc[club_region]) {
          acc[club_region] = [];
        }
        acc[club_region].push(club_name);
        return acc;
      }, {});

      console.log(availableRegions);
      setAvailableClubs(() => availableRegions);
    } catch (error) {
      console.error(`Error in ${organizationURL}:`, error);
    }
  };

  // Function to handle the change in selected region
  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setAvailableClubNames(availableClubs[region] || []);
  };
  const handleClubChange = (e) => {
    const club = e.target.value;
    setSelectedClub(club);
  };

  useEffect(() => {
    console.log(clubData);
    if (!isDateInitialized) {
      setClubData((prevClubData) => ({
        ...prevClubData,
        date_of_application: getCurrentDate(),
      }));
      setIsDateInitialized(true);
    }
    getAvailableClub();
    onInputChange(clubData);
  }, [clubData, isDateInitialized]);

  return (
    <div className='Form__Organization'>
      {/* ORGANIZATION DETAILS */}
      <h1 className='Form__Organization__title'>ORGANIZATION INFORMATION</h1>

      <div className='Form__Organization__container'>
        <label>
          <p className='required'>Organization Region</p>
          <select
            value={selectedRegion}
            onChange={(e) => {
              console.log(e.target.value);
              handleClubData(e, 'club_region');
              handleRegionChange(e);
            }}
          >
            <option value=''>Select Region</option>
            {Object.keys(availableClubs).map((region) => (
              <option key={region} value={region} type='text'>
                {region}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Club Name</p>
          <select
            value={selectedClub}
            onChange={(e) => {
              handleClubData(e, 'club_name');
              handleClubChange(e);
            }}
          >
            <option value=''>Select Club</option>
            {availableClubNames.map((club) => (
              <option key={club} value={club}>
                {club}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Club President</p>
          <input
            type='text'
            onBlur={(e) => {
              handleClubData(e, 'club_president');
            }}
            disabled={true}
          />
        </label>
        <label>
          <p>Date of Application</p>
          <input type='date' defaultValue={clubData.date_of_application} />
        </label>
      </div>

      <div className='Form__Organization__line'></div>
    </div>
  );
};

export default OrganizationInformation;

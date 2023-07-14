import { useEffect, useState } from 'react';

import './Dashboard.scss';

const Dashboard = () => {
  const queryProblems = {
    easy: [
      {
        queryNumber: 1,
        queryProblem:
          "List the members' names and age of the applicants from 15 to 25 years old who live in Metro Manila.",
      },
      {
        queryNumber: 2,
        queryProblem:
          "Display the members' names and addresses of members who are sponsored by Liam Jose and currently residing in Metro Manila. ",
      },
      {
        queryNumber: 3,
        queryProblem: "Display the president's name of each club.",
      },
      {
        queryNumber: 4,
        queryProblem: 'Display the names of members who have blood type O.',
      },
      {
        queryNumber: 5,
        queryProblem:
          'Display the names of members and company code of those who are employed.',
      },
    ],
    medium: [
      {
        queryNumber: 1,
        queryProblem:
          'Count how many members are sponsored by a sponsor(member). Include the name of the sponsor.',
      },
      {
        queryNumber: 2,
        queryProblem:
          'List the names of the members and their corresponding company name in which they are employed.',
      },
      {
        queryNumber: 3,
        queryProblem:
          'List the names, civil status, club name of applicants who are single and married only from Sunday Uplifters Club.',
      },
      {
        queryNumber: 4,
        queryProblem:
          'List the names of those members who applied before 2020.',
      },
      {
        queryNumber: 5,
        queryProblem:
          "Display the members' names, title and position, and company address of those members who are employed in Makati.",
      },
      {
        queryNumber: 6,
        queryProblem:
          'Count the members who are currently working in a company within Metro Manila.',
      },
      {
        queryNumber: 7,
        queryProblem:
          "Display the members' names and name of the elementary school where they attended.",
      },
      {
        queryNumber: 8,
        queryProblem:
          'List the names of male members with a spouse as their legal dependents.',
      },
      {
        queryNumber: 9,
        queryProblem:
          'List the names of the members with a sponsor. Include the name of the sponsor.',
      },
    ],
    hard: [
      {
        queryNumber: 1,
        queryProblem: 'Count how many members are currently under per club.',
      },
      {
        queryNumber: 2,
        queryProblem:
          'List the member id of the members and their dependent count. Include only those who have one or more than one legal dependent.',
      },
      {
        queryNumber: 3,
        queryProblem:
          'Count separately the male and female members who are employed in the same company. Display the sex and company name.',
      },
      {
        queryNumber: 4,
        queryProblem:
          'Display and count how many members are employed at Accenture Philippines and Tower Communications.',
      },
      {
        queryNumber: 5,
        queryProblem:
          'Count how many club members are there in the regions of CALABARZON and NCR.',
      },
      {
        queryNumber: 6,
        queryProblem: 'Count how many members are there per club by region.',
      },
    ],
  };

  const [applicationData, setApplicationData] = useState([]);
  const [memberData, setMemberData] = useState([]);
  const [organizationData, setOrganizationData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [dependentData, setDependentData] = useState([]);

  const [queryResult, setQueryResult] = useState([]);

  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedProblem, setSelectedProblem] = useState('1');

  const [responseData, setResponseData] = useState({});

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
    setSelectedProblem('1');
  };

  const handleProblemChange = (event) => {
    setSelectedProblem(event.target.value);
  };

  const problems = queryProblems[selectedDifficulty];

  const getDataFromDatabase = async (path, stateVariable) => {
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

  const getResultFromQuery = async (params) => {
    const URL = 'http://localhost:5173/api/query/' + params;
    console.log('FETCH URL: ', URL);

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      setResponseData(responseData);

      return responseData.data;
    } catch (error) {
      console.error(`Error in ${URL}:`, error);
    }
  };

  const handleQueryClick = async (params) => {
    setQueryResult(await getResultFromQuery(params));
    console.log(queryResult);
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

    console.log('Admin Dashboard');
  }, []);
  return (
    <>
      <div className='Dashboard__Header'>
        <h1>
          Welcome to Socio-Civing Organization <br /> Dashboard Tables
        </h1>
      </div>

      <div className='Dashboard__Section Dashboard__Menu'>
        <h1>Query Selection</h1>
        <div className=' Dashboard__Query'>
          <label>
            <p>Difficulty:</p>
            <select
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </label>

          <label>
            <p> Query Problem:</p>
            <select value={selectedProblem} onChange={handleProblemChange}>
              {problems.map((problem, index) => (
                <option key={index} value={problem.queryNumber}>
                  {problem.queryProblem}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          className='Dashboard__Button Dashboard__Query'
          onClick={() => {
            handleQueryClick(`${selectedDifficulty}/${selectedProblem}`);
          }}
        >
          <h1>Query</h1>
        </div>

        <h1>Problem</h1>
        <p>{problems[selectedProblem - 1].queryProblem}</p>

        <h1>Result</h1>

        <div className='Dashboard__Menu__Table'>
          <table>
            <thead>
              <tr>
                {queryResult.length > 0 &&
                  Object.keys(queryResult[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {queryResult.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1>Query Used</h1>
        <pre>
          <p>{responseData.queries}</p>
        </pre>
      </div>

      <div className='Dashboard__Section Dashboard__Tables'>
        <h1>Member Information</h1>
        <div className='Dashboard__Tables__Application'>
          <div className='Dashboard__Tables__Application__Table'>
            <table>
              <thead>
                <tr>
                  <th>Member ID</th>
                  <th>Member Name</th>
                  <th>Place of Birth</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>Sex</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Civil Status</th>
                  <th>Nationality</th>
                  <th>Religion</th>
                  <th>Blood Type</th>
                  <th>Telephone Number</th>
                  <th>Cellphone Number</th>
                  <th>Email</th>
                  <th>Sponsor Name</th>
                  <th>Sponsor Membership ID</th>
                  <th>Work Title or Position</th>
                  <th>Company Code</th>
                </tr>
              </thead>
              <tbody>
                {memberData.map((object, index) => (
                  <tr key={index}>
                    <td>{object.member_id}</td>
                    <td>{object.member_name}</td>
                    <td>{object.place_of_birth}</td>
                    <td>{object.date_of_birth}</td>
                    <td>{object.address}</td>
                    <td>{object.sex}</td>
                    <td>{object.height_in_cm}</td>
                    <td>{object.weight_in_kg}</td>
                    <td>{object.civil_status}</td>
                    <td>{object.nationality}</td>
                    <td>{object.religion}</td>
                    <td>{object.blood_type}</td>
                    <td>{object.telephone_number}</td>
                    <td>{object.cellphone_number}</td>
                    <td>{object.email}</td>
                    <td>{object.sponsor_name}</td>
                    <td>{object.sponsor_membership_id}</td>
                    <td>{object.work_title_or_position}</td>
                    <td>{object.company_code}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='Dashboard__Section Dashboard__Tables'>
        <h1>Application Details</h1>
        <div className='Dashboard__Tables__Application'>
          <div className='Dashboard__Tables__Application__Table'>
            <table>
              <thead>
                <tr>
                  <th>Application Code</th>
                  <th>Member ID</th>
                  <th>Club ID</th>
                  <th>Contact ID</th>
                  <th>Dependent ID</th>
                  <th>Education ID</th>
                  <th>Date of Application</th>
                  <th>Application Status</th>
                </tr>
              </thead>
              <tbody>
                {applicationData.map((object, index) => (
                  <tr key={index}>
                    <td>{object.applicant_code}</td>
                    <td>{object.club_id}</td>
                    <td>{object.contact_id}</td>
                    <td>{object.dependent_id}</td>
                    <td>{object.education_id}</td>
                    <td>{object.member_id}</td>
                    <td>{object.date_of_application}</td>
                    <td>{object.application_status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

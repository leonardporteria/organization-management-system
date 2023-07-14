import { useEffect, useState } from 'react';

import './Dashboard.scss';

const Dashboard = () => {
  const queryProblems = {
    easy: [
      {
        queryNumber: 1,
        queryProblem:
          'List the names of the applicants who live in Metro Manila and ages from 15 to 25 years old. ',
      },
      {
        queryNumber: 2,
        queryProblem:
          'Display the name  and address of members who are sponsored by Liam Jose and currently residing in Metro Manila. ',
      },
      {
        queryNumber: 3,
        queryProblem: 'Display the president name of each club.',
      },
      {
        queryNumber: 4,
        queryProblem: 'Display the names of members who have blood type O.',
      },
      {
        queryNumber: 5,
        queryProblem: 'Display the names of members who are employed.',
      },
    ],
    medium: [
      {
        queryNumber: 1,
        queryProblem:
          'Count how many members are sponsored by a sponsor(member).',
      },
      {
        queryNumber: 2,
        queryProblem:
          'List the names of the members and the corresponding company name in which they are employed.',
      },
      {
        queryNumber: 3,
        queryProblem:
          'List the names, civil status, club name, of applicants who are single and married only.',
      },
      {
        queryNumber: 4,
        queryProblem:
          'List the names of  those applicants who applied before 2020.',
      },
      {
        queryNumber: 5,
        queryProblem:
          'Display the name, title and position, and company address of those applicants employed in Makati.',
      },
      {
        queryNumber: 6,
        queryProblem:
          'Count the members who are currently working in a company within Metro Manila.',
      },
      {
        queryNumber: 7,
        queryProblem:
          'Display the member name, and school name of the elementary school a member went to.',
      },
      {
        queryNumber: 8,
        queryProblem:
          'List the name of male members who has a spouse as their legal dependents.',
      },
      {
        queryNumber: 9,
        queryProblem:
          'List the names of the members who has sponsor and their corresponding sponsor.',
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
          'list member id, and dependent count who have legal dependents that are more than 1',
      },
      {
        queryNumber: 3,
        queryProblem:
          'Count separately the male and female members who are employed in the same company.',
      },
      {
        queryNumber: 4,
        queryProblem:
          'Display how many members are employed at Accenture Philippines and Tower Communications. Include the names and the corresponding company where they are employed.',
      },
      {
        queryNumber: 5,
        queryProblem:
          'Count how many club members are there in the regions of CALABARZON and NCR.',
      },
      {
        queryNumber: 6,
        queryProblem: 'COUNT how many members are there per club by region',
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
  const [selectedProblem, setSelectedProblem] = useState('');

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
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

      return responseData.data;
    } catch (error) {
      console.error(`Error in ${URL}:`, error);
    }
  };

  const handleQueryClick = async (params) => {
    console.log(params);
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
        <h1>Menu</h1>
        <div>
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
              <option>Select Query Question</option>
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
      </div>

      <div className='Dashboard__Section Dashboard__Tables'>
        <h1>Applicaiton Details</h1>
        <div className='Dashboard__Tables__Applicaiton'>
          <div className='Dashboard__Tables__Applicaiton__Table'>
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

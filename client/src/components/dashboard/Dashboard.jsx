import { useEffect, useState } from 'react';

import './Dashboard.scss';

const Dashboard = () => {
  const [applicationData, setApplicationData] = useState([]);
  const [memberData, setMemberData] = useState([]);
  const [organizationData, setOrganizationData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [dependentData, setDependentData] = useState([]);

  const [queryResult, setQueryResult] = useState([]);

  const queryProblems = [
    { queryNumber: 1, queryProblem: '' },
    { queryNumber: 2, queryProblem: '' },
    { queryNumber: 3, queryProblem: '' },
    { queryNumber: 4, queryProblem: '' },
    { queryNumber: 5, queryProblem: '' },
    { queryNumber: 6, queryProblem: '' },
    { queryNumber: 7, queryProblem: '' },
    { queryNumber: 8, queryProblem: '' },
    { queryNumber: 9, queryProblem: '' },
    { queryNumber: 10, queryProblem: '' },
    { queryNumber: 11, queryProblem: '' },
    { queryNumber: 12, queryProblem: '' },
    { queryNumber: 13, queryProblem: '' },
    { queryNumber: 14, queryProblem: '' },
    { queryNumber: 15, queryProblem: '' },
    { queryNumber: 16, queryProblem: '' },
    { queryNumber: 17, queryProblem: '' },
    { queryNumber: 18, queryProblem: '' },
    { queryNumber: 19, queryProblem: '' },
    { queryNumber: 20, queryProblem: '' },
  ];

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
        <div
          className='Dashboard__Button Dashboard__Query'
          onClick={() => {
            handleQueryClick(1);
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

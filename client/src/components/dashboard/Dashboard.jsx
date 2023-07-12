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

  const test = () => {
    console.log(applicationData);
    console.log(memberData);
    console.log(organizationData);
    console.log(companyData);
    console.log(contactData);
    console.log(educationData);
    console.log(dependentData);
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

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
      <div className='Admin__Header'>
        <h1>
          Welcome to Socio-Civing Organization <br /> Admin Dashboard
        </h1>
      </div>

      <div className='Admin__Section Admin__Starting'>
        <h1>Add Starting Values</h1>

        <div className='Admin__Button Admin__Starting__Button' onClick={test}>
          <h1>Add Starting Values</h1>
        </div>
      </div>

      <div className='Admin__Section Admin__Add'>
        <h1>Add a new Organization</h1>
        <div className='Admin__Form Admin__Add__Form'>
          <label>
            <p>Club Region:</p>
            <input type='text' />
          </label>
          <label>
            <p>Club Name:</p>
            <input type='text' />
          </label>
          <label>
            <p>Club President ID:</p>
            <input type='text' />
          </label>
          <label>
            <p>Club President Name:</p>
            <input type='text' />
          </label>
        </div>

        <div className='Admin__Button Admin__Add__Button'>
          <h1>Add New Club</h1>
        </div>
      </div>

      <div className='Admin__Section Admin__Update'>
        <h1>Update Applicant's Membership Status</h1>
        <div className='Admin__Form Admin__Update__Form'>
          <label>
            <p>Enter Member ID:</p>
            <input type='text' />
          </label>
          <label>
            <p>Member Name:</p>
            <input type='text' />
          </label>
          <label>
            <p>Club Region:</p>
            <input type='text' />
          </label>
          <label>
            <p>Club Name:</p>
            <input type='text' />
          </label>

          <label>
            <p>Date of Application:</p>
            <input type='text' />
          </label>
          <label>
            <p>Membership Status:</p>
            <input type='text' />
          </label>
        </div>

        <div className='Admin__Button Admin__Update__Button'>
          <h1>Confirm</h1>
        </div>
      </div>

      <div className='Admin__Section Admin__Change'>
        <h1>Change Applicant's Organization</h1>
        <div className='Admin__Form Admin__Change__Form'>
          <label>
            <p>Enter Member ID:</p>
            <input type='text' />
          </label>
          <label>
            <p>Member Name:</p>
            <input type='text' />
          </label>
          <label>
            <p>Current Club Region:</p>
            <input type='text' />
          </label>
          <label>
            <p>Current Club Name:</p>
            <input type='text' />
          </label>
          <label>
            <p>New Club Region:</p>
            <input type='text' />
          </label>
          <label>
            <p>New Club Name:</p>
            <input type='text' />
          </label>
          <label>
            <p>Date of Application:</p>
            <input type='date' />
          </label>
        </div>

        <div className='Admin__Button Admin__Change__Button'>
          <h1>Confirm</h1>
        </div>
      </div>

      <div className='Admin__Section Admin__Tables'>
        <h1>Database Tables</h1>

        <h1>Applicaiton Details</h1>
        <div className='Admin__Tables__Applicaiton'>
          <div className='Admin__Tables__Applicaiton__Table'>
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

export default AdminDashboard;

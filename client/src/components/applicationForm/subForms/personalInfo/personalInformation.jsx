import { useState, useEffect } from 'react';

import './personalInformation.scss';

const PersonalInformation = ({ onInputChange }) => {
  const [personalData, setPersonalData] = useState({
    // name
    last_name: '',
    first_name: '',
    middle_name: '',
    suffix: '',
    // ===
    place_of_birth: '',
    date_of_birth: '',
    heigh_in_cm: '',
    weight_in_kg: '',
    sex: '',
    // address
    house_number: '',
    street: '',
    barangay: '',
    city: '',
    province: '',
    zip_code: '',
    // ===
    civil_status: '',
    nationality: '',
    religion: '',
    blood_type: '',
    // contact details
    telephone_number: '',
    cellphone_number: '',
    email: '',
    house_number: '',
    street: '',
    barangay: '',
    city: '',
    province: '',
    zip_code: '',
  });

  const handlePersonalData = (event, name) => {
    setPersonalData((prevPersonalData) => ({
      ...prevPersonalData,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    console.log(personalData);
    onInputChange(personalData);
  }, [personalData]);

  return (
    <div className='Form__Personal'>
      {/* PERSONAL DETAILS */}
      <h1 className='Form__Personal__title'>PERSONAL INFORMATION</h1>

      <div className='Form__Personal__name'>
        <label>
          <p>Last Name:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'last_name');
            }}
          />
        </label>
        <label>
          <p>First Name:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'first_name');
            }}
          />
        </label>
        <label>
          <p>Middle Name:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'middle_name');
            }}
          />
        </label>
        <label>
          <p>Suffix:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'suffix');
            }}
          />
        </label>
      </div>

      <div className='Form__Personal__details'>
        <label>
          <p>Place of Birth:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'place_of_birth');
            }}
          />
        </label>
        <label>
          <p>Date of Birth:</p>
          <input
            type='date'
            onBlur={(e) => {
              handlePersonalData(e, 'date_of_birth');
            }}
          />
        </label>
        <label>
          <p>Civil Status:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'civil_status');
            }}
          />
        </label>
      </div>

      <div className='Form__Personal__details'>
        <label>
          <p>Height in cm:</p>
          <input
            type='number'
            onBlur={(e) => {
              handlePersonalData(e, 'heigh_in_cm');
            }}
          />
        </label>
        <label>
          <p>Weight in kg:</p>
          <input
            type='number'
            onBlur={(e) => {
              handlePersonalData(e, 'weight_in_kg');
            }}
          />
        </label>
        <label>
          <p>Sex</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'sex');
            }}
          />
        </label>
      </div>

      <div className='Form__Personal__details'>
        <label>
          <p>Nationality:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'nationality');
            }}
          />
        </label>
        <label>
          <p>Religion:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'religion');
            }}
          />
        </label>
        <label>
          <p>Blood Type:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'blood_type');
            }}
          />
        </label>
      </div>

      {/* CONTACT DETAILS */}
      <h1 className='Form__Personal__title_c'>CONTACT INFORMATION</h1>
      <div className='Form__Personal__contact'>
        <label>
          <p>Cellphone Number:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'cellphone_number');
            }}
          />
        </label>
        <label>
          <p>Telephone Number:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'telephone_number');
            }}
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'email');
            }}
          />
        </label>
      </div>

      <div className='Form__Personal__contact'>
        <label>
          <p>House Number:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'house_number');
            }}
          />
        </label>
        <label>
          <p>Street Name:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'street');
            }}
          />
        </label>
        <label>
          <p>Barangay:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'barangay');
            }}
          />
        </label>
      </div>

      <div className='Form__Personal__contact'>
        <label>
          <p>City/Municipality:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'city');
            }}
          />
        </label>
        <label>
          <p>Province:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'province');
            }}
          />
        </label>
        <label>
          <p>Zip Code:</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'zip_code');
            }}
          />
        </label>
      </div>

      <div className='Form__Personal__line'></div>
    </div>
  );
};

export default PersonalInformation;

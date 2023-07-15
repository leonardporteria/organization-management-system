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
    height_in_cm: '',
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
    telephone_number: null,
    cellphone_number: '',
    email: '',
  });

  const [selectedCivilStatus, setSelectedCivilStatus] = useState('');
  const [selectedSex, setSelectedSex] = useState('');

  const handleCivilStatusChange = (e) => {
    const civilStatus = e.target.value;
    setSelectedCivilStatus(civilStatus);
  };

  const handleSexChange = (e) => {
    const sex = e.target.value;
    setSelectedSex(sex);
  };

  const handlePersonalData = (event, name) => {
    setPersonalData((prevPersonalData) => ({
      ...prevPersonalData,
      [name]: event.target.value,
    }));
  };

  useEffect(() => {
    // console.log(personalData);
    onInputChange(personalData);
  }, [personalData]);

  return (
    <div className='Form__Personal'>
      {/* PERSONAL DETAILS */}
      <h1 className='Form__Personal__title'>PERSONAL INFORMATION</h1>

      <h1 className='Form__Personal__title_c'>Name</h1>
      <div className='Form__Personal__name'>
        <label>
          <p className='required'>Last Name</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'last_name');
            }}
          />
        </label>
        <label>
          <p className='required'>First Name</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'first_name');
            }}
          />
        </label>
        <label>
          <p>Middle Name</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'middle_name');
            }}
          />
        </label>
        <label>
          <p>Suffix</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'suffix');
            }}
          />
        </label>
      </div>

      <h1 className='Form__Personal__title_c'>Biographical Data</h1>
      <div className='Form__Personal__details'>
        <label>
          <p className='required'>Place of Birth</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'place_of_birth');
            }}
          />
        </label>
        <label>
          <p className='required'>Date of Birth</p>
          <input
            type='date'
            onBlur={(e) => {
              handlePersonalData(e, 'date_of_birth');
            }}
          />
        </label>
        <label>
          <p className='required'>Civil Status</p>
          <select
            value={selectedCivilStatus}
            onChange={(e) => {
              handlePersonalData(e, 'civil_status');
              handleCivilStatusChange(e);
            }}
          >
            <option value=''>Select Civil Status</option>
            <option value='SIN'>Single</option>
            <option value='MAR'>Married</option>
            <option value='WID'>Widowed</option>
            <option value='SEP'>Separated</option>
          </select>
        </label>
      </div>

      <div className='Form__Personal__details'>
        <label>
          <p className='required'>Height in cm</p>
          <input
            type='number'
            onBlur={(e) => {
              handlePersonalData(e, 'height_in_cm');
            }}
          />
        </label>
        <label>
          <p className='required'>Weight in kg</p>
          <input
            type='number'
            onBlur={(e) => {
              handlePersonalData(e, 'weight_in_kg');
            }}
          />
        </label>
        <label>
          <p className='required'>Sex</p>
          <select
            value={selectedSex}
            onChange={(e) => {
              handlePersonalData(e, 'sex');
              handleSexChange(e);
            }}
          >
            <option value=''>Select Sex</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
        </label>
      </div>

      <div className='Form__Personal__details'>
        <label>
          <p className='required'>Nationality</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'nationality');
            }}
          />
        </label>
        <label>
          <p className='required'>Religion</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'religion');
            }}
          />
        </label>
        <label>
          <p className='required'>Blood Type</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'blood_type');
            }}
          />
        </label>
      </div>

      {/* CONTACT DETAILS */}
      <h1 className='Form__Personal__title_c'>Contact Information</h1>
      <div className='Form__Personal__contact'>
        <label>
          <p className='required'>Cellphone Number</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'cellphone_number');
            }}
          />
        </label>
        <label>
          <p>Telephone Number</p>
          <input
            type='text'
            defaultValue={'null'}
            onBlur={(e) => {
              handlePersonalData(e, 'telephone_number');
            }}
          />
        </label>
        <label>
          <p className='required'>Email</p>
          <input
            type='email'
            onBlur={(e) => {
              handlePersonalData(e, 'email');
            }}
          />
        </label>
      </div>

      <h1 className='Form__Personal__title_c'>Address</h1>
      <div className='Form__Personal__contact'>
        <label>
          <p>House Number</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'house_number');
            }}
          />
        </label>
        <label>
          <p className='required'>Street Name</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'street');
            }}
          />
        </label>
        <label>
          <p className='required'>Barangay</p>
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
          <p className='required'>City/Municipality</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'city');
            }}
          />
        </label>
        <label>
          <p className='required'>Province</p>
          <input
            type='text'
            onBlur={(e) => {
              handlePersonalData(e, 'province');
            }}
          />
        </label>
        <label>
          <p className='required'>Zip Code</p>
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

import './personalInformation.scss';

const PersonalInformation = () => {
  return (
    <div className='Form__Personal'>
      {/* PERSONAL DETAILS */}
      <h1 className='Form__Personal__title'>PERSONAL INFORMATION</h1>

      <div className='Form__Personal__details'>
        <label>
          <p>Last Name:</p>
          <input type='text' />
        </label>
        <label>
          <p>First Name:</p>
          <input type='text' />
        </label>
        <label>
          <p>Middle Name:</p>
          <input type='text' />
        </label>
        <label>
          <p>Suffix:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Personal__details'>
        <label>
          <p>Place of Birth:</p>
          <input type='text' />
        </label>
        <label>
          <p>Date of Birth:</p>
          <input type='date' />
        </label>
        <label>
          <p>Height in cm:</p>
          <input type='number' />
        </label>
        <label>
          <p>Weight in kg:</p>
          <input type='number' />
        </label>
      </div>

      <div className='Form__Personal__details'>
        <label>
          <p>Nationality:</p>
          <input type='text' />
        </label>
        <label>
          <p>Religion:</p>
          <input type='text' />
        </label>
        <label>
          <p>Blood Type:</p>
          <input type='text' />
        </label>
        <label>
          <p>Civil Status:</p>
          <input type='text' />
        </label>
      </div>

      {/* CONTACT DETAILS */}
      <h1 className='Form__Personal__title_c'>CONTACT INFORMATION</h1>
      <div className='Form__Personal__contact'>
        <label>
          <p>House Number:</p>
          <input type='text' />
        </label>
        <label>
          <p>Street Name:</p>
          <input type='text' />
        </label>
        <label>
          <p>Barangay:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Personal__contact'>
        <label>
          <p>City/Municipality:</p>
          <input type='text' />
        </label>
        <label>
          <p>Province:</p>
          <input type='text' />
        </label>
        <label>
          <p>Zip Code:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Personal__contact'>
        <label>
          <p>Cellphone Number:</p>
          <input type='text' />
        </label>
        <label>
          <p>Telephone Number:</p>
          <input type='text' />
        </label>
        <label>
          <p>Email:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Personal__line'></div>
    </div>
  );
};

export default PersonalInformation;

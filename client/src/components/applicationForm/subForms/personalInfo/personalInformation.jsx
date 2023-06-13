const PersonalInformation = () => {
  return (
    <div className='Form_Personal'>
      {/* PERSONAL DETAILS */}
      <h1>PERSONAL INFORMATION</h1>

      <div>
        <label>
          Last Name:
          <input type='text' />
        </label>
        <label>
          First Name:
          <input type='text' />
        </label>
        <label>
          Middle Name:
          <input type='text' />
        </label>
        <label>
          Suffix:
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          Place of Birth:
          <input type='text' />
        </label>
        <label>
          Date of Birth:
          <input type='date' />
        </label>
      </div>

      <div>
        <label>
          Height in cm:
          <input type='number' />
        </label>
        <label>
          Weight in kg:
          <input type='number' />
        </label>
      </div>

      <div>
        <label>
          Nationality:
          <input type='text' />
        </label>
        <label>
          Religion:
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          Blood Type:
          <input type='text' />
        </label>
        <label>
          Civil Status:
          <input type='text' />
        </label>
      </div>

      {/* CONTACT DETAILS */}
      <h1>CONTACT INFORMATION</h1>
      <div>
        <label>
          House Number:
          <input type='text' />
        </label>
        <label>
          Street Name:
          <input type='text' />
        </label>
        <label>
          Barangay:
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          City/Municipality:
          <input type='text' />
        </label>
        <label>
          Province:
          <input type='text' />
        </label>
        <label>
          Zip Code:
          <input type='text' />
        </label>
      </div>

      <div>
        <label className='flex flex-col w-full'>
          Cellphone Number:
          <input type='text' />
        </label>
        <label>
          Telephone Number:
          <input type='text' />
        </label>
        <label>
          Email:
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default PersonalInformation;

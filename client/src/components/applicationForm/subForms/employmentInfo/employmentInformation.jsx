const EmployeeInformation = () => {
  return (
    <div className='Form__Employment'>
      {/* EMPLOYMENT DETAILS */}

      <h1>EMPLOYMENT INFORMATION</h1>

      <div>
        <label>
          <p>Name of Office:</p>
          <input type='text' />
        </label>
        <label>
          <p>Title and Position:</p>
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          <p>Workplace Telephone Number:</p>
          <input type='text' />
        </label>
        <label>
          <p>Workplace Email:</p>
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          <p>Company Address:</p>
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default EmployeeInformation;

const EmployeeInformation = () => {
  return (
    <div className='Form__Employment'>
      {/* EMPLOYMENT DETAILS */}

      <h1>EMPLOYMENT INFORMATION</h1>

      <div>
        <label>
          Name of Office:
          <input type='text' />
        </label>
        <label>
          Title and Position:
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          Workplace Telephone Number:
          <input type='text' />
        </label>
        <label>
          Workplace Email:
          <input type='text' />
        </label>
      </div>

      <div>
        <label>
          Company Address:
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default EmployeeInformation;

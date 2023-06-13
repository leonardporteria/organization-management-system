const OrganizationInformation = () => {
  return (
    <div className='Form_Organization'>
      {/* ORGANIZATION DETAILS */}
      <h1>ORGANIZATION INFORMATION</h1>

      <div>
        <label>
          Organization Region:
          <input type='text' />
        </label>
        <label>
          Club Name:
          <input type='text' />
        </label>
        <label>
          Club President:
          <input type='text' />
        </label>
        <label>
          Date of Application:
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default OrganizationInformation;

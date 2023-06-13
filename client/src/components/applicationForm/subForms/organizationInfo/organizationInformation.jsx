import './organizationInformation.scss';

const OrganizationInformation = () => {
  return (
    <div className='Form__Organization'>
      {/* ORGANIZATION DETAILS */}
      <h1 className='Form__Organization__title'>ORGANIZATION INFORMATION</h1>

      <div className='Form__Organization__container'>
        <label>
          <p>Organization Region:</p>
          <input type='text' />
        </label>
        <label>
          <p>Club Name:</p>
          <input type='text' />
        </label>
        <label>
          <p>Club President:</p>
          <input type='text' />
        </label>
        <label>
          <p>Date of Application:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Organization__line'></div>
    </div>
  );
};

export default OrganizationInformation;

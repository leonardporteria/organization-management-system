import './sponsorInformation.scss';

const SponsorInformation = () => {
  return (
    <div className='Form__Sponsor'>
      {/* SPONSOR DETAILS */}
      <h1 className='Form__Sponsor__title'>SPONSOR INFORMATION</h1>

      <div className='Form__Sponsor__container'>
        <label>
          <p>Sponsor Name:</p>
          <input type='text' />
        </label>
        <label>
          <p>Membership Number:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Sponsor__line'></div>
    </div>
  );
};

export default SponsorInformation;

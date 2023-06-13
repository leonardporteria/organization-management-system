const SponsorInformation = () => {
  return (
    <div className='Form__Sponsor'>
      {/* SPONSOR DETAILS */}
      <h1>SPONSOR INFORMATION</h1>

      <div>
        <label>
          <p>Sponsor Name:</p>
          <input type='text' />
        </label>
        <label>
          <p>Membership Number:</p>
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default SponsorInformation;

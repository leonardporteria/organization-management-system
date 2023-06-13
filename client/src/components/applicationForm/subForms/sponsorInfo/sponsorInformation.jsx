const SponsorInformation = () => {
  return (
    <div className='Form__Sponsor'>
      {/* SPONSOR DETAILS */}
      <h1>SPONSOR INFORMATION</h1>

      <div>
        <label>
          Sponsor Name:
          <input type='text' />
        </label>
        <label>
          Membership Number:
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default SponsorInformation;

const ContactInformation = () => {
  return (
    <div className='Form__Contact'>
      {/* CONTACT PERSON DETAILS */}
      {/* MUST BE ATLEAST TWO, BUT CAN HAVE MORE */}

      <h1>CONTACT PERSON INFORMATION</h1>

      <div>
        <label>
          Relationship:
          <input type='text' />
        </label>
        <label>
          Name:
          <input type='text' />
        </label>
        <label>
          Address:
          <input type='text' />
        </label>
        <label>
          Cellphone Number:
          <input type='text' />
        </label>
      </div>

      <div>
        <label className='flex flex-col w-full'>
          Relationship:
          <input type='text' />
        </label>
        <label>
          Name:
          <input type='text' />
        </label>
        <label>
          Address:
          <input type='text' />
        </label>
        <label>
          Cellphone Number:
          <input type='text' />
        </label>
      </div>
    </div>
  );
};

export default ContactInformation;

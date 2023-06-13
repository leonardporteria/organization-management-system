import { useState } from 'react';

const ContactInEmergencyForm = () => {
  return (
    <div>
      <label>
        <p>Relationship:</p>
        <input type='text' />
      </label>
      <label>
        <p>Name:</p>
        <input type='text' />
      </label>
      <label>
        <p>Address:</p>
        <input type='text' />
      </label>
      <label>
        <p>Cellphone Number:</p>
        <input type='text' />
      </label>
    </div>
  );
};

const ContactInformation = () => {
  const [contactCounter, setContactCounter] = useState(2);

  const incrementNumber = () => {
    setContactCounter((contactCounter) => contactCounter + 1);
  };

  return (
    <div className='Form__Contact'>
      {/* CONTACT PERSON DETAILS */}
      {/* MUST BE ATLEAST TWO, BUT CAN HAVE MORE */}

      <h1>CONTACT PERSON INFORMATION</h1>

      {contactCounter > 0 &&
        Array.from({ length: contactCounter }).map((_, index) => (
          <ContactInEmergencyForm key={index} />
        ))}

      <div onClick={incrementNumber}>
        <h1>ADD NEW FIELD</h1>
      </div>
    </div>
  );
};

export default ContactInformation;

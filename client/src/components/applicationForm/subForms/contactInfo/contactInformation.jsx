import { useState } from 'react';

import './contactInformation.scss';

const ContactInEmergencyForm = () => {
  return (
    <div className='Form__Contact__container'>
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

  const decrementNumber = () => {
    if (contactCounter <= 2) return;
    setContactCounter((contactCounter) => contactCounter - 1);
  };

  return (
    <div className='Form__Contact'>
      {/* CONTACT PERSON DETAILS */}
      {/* MUST BE ATLEAST TWO, BUT CAN HAVE MORE */}

      <h1 className='Form__Contact__title'>CONTACT PERSON INFORMATION</h1>

      {contactCounter > 0 &&
        Array.from({ length: contactCounter }).map((_, index) => (
          <ContactInEmergencyForm key={index} />
        ))}

      <div className='Form__Contact__btn'>
        <div className='Form__Contact__btn__add' onClick={incrementNumber}>
          <h1>ADD NEW FIELD</h1>
        </div>
        <div className='Form__Contact__btn__remove' onClick={decrementNumber}>
          <h1>REMOVE ONE FIELD</h1>
        </div>
      </div>

      <div className='Form__Contact__line'></div>
    </div>
  );
};

export default ContactInformation;

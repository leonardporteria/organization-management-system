import { useState } from 'react';
import './legalDependentsInformation.scss';

const LegalDependentForm = () => {
  return (
    <div className='Form__Dependent__container'>
      <label>
        <p>Relationship:</p>
        <input type='text' />
      </label>
      <label>
        <p>Name:</p>
        <input type='text' />
      </label>
      <label>
        <p>Date of Birth:</p>
        <input type='text' />
      </label>
      <label>
        <p>Cellphone Number:</p>
        <input type='text' />
      </label>
    </div>
  );
};

const LegalDependentInformation = () => {
  const [dependentCounter, setDependentCounter] = useState(1);

  const incrementNumber = () => {
    setDependentCounter((dependentCounter) => dependentCounter + 1);
  };
  const decrementNumber = () => {
    if (dependentCounter <= 1) return;
    setDependentCounter((dependentCounter) => dependentCounter - 1);
  };

  return (
    <div className='Form__Dependent'>
      {/* LEGAL DEPENDENTS DETAILS */}

      <h1 className='Form__Dependent__title'>LEGAL DEPENDENTS INFORMATION</h1>

      {dependentCounter > 0 &&
        Array.from({ length: dependentCounter }).map((_, index) => (
          <LegalDependentForm key={index} />
        ))}

      <div className='Form__Dependent__btn'>
        <div className='Form__Dependent__btn__add' onClick={incrementNumber}>
          <h1>ADD NEW FIELD</h1>
        </div>
        <div className='Form__Dependent__btn__remove' onClick={decrementNumber}>
          <h1>REMOVE ONE FIELD</h1>
        </div>
      </div>

      <div className='Form__Dependent__line'></div>
    </div>
  );
};

export default LegalDependentInformation;

import { useState } from 'react';

const LegalDependentForm = () => {
  return (
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
        Date of Birth:
        <input type='text' />
      </label>
      <label>
        Cellphone Number:
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

  return (
    <div className='Form__Dependent'>
      {/* LEGAL DEPENDENTS DETAILS */}

      <h1>LEGAL DEPENDENTS INFORMATION</h1>

      {dependentCounter > 0 &&
        Array.from({ length: dependentCounter }).map((_, index) => (
          <LegalDependentForm key={index} />
        ))}

      <div onClick={incrementNumber}>
        <h1>ADD NEW FIELD</h1>
      </div>
    </div>
  );
};

export default LegalDependentInformation;

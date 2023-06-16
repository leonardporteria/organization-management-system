import { useState, useEffect } from 'react';

import './legalDependentsInformation.scss';

const LegalDependentForm = ({ index, handleDependentData }) => {
  return (
    <div className='Form__Dependent__container'>
      <label>
        <p>Relationship:</p>
        <input
          type='text'
          onBlur={(e) => {
            handleDependentData(e, index, 'dependent_relationship');
          }}
        />
      </label>
      <label>
        <p>Name:</p>
        <input
          type='text'
          onBlur={(e) => {
            handleDependentData(e, index, 'dependent_name');
          }}
        />
      </label>
      <label>
        <p>Date of Birth:</p>
        <input
          type='date'
          onBlur={(e) => {
            handleDependentData(e, index, 'dependent_date_of_birth');
          }}
        />
      </label>
      <label>
        <p>Cellphone Number:</p>
        <input
          type='text'
          onBlur={(e) => {
            handleDependentData(e, index, 'dependent_contact_number');
          }}
        />
      </label>
    </div>
  );
};

const LegalDependentInformation = ({ onInputChange }) => {
  const [dependentCounter, setDependentCounter] = useState(1);

  const incrementNumber = () => {
    setDependentCounter((dependentCounter) => dependentCounter + 1);
  };
  const decrementNumber = () => {
    if (dependentCounter <= 1) return;
    setDependentCounter((dependentCounter) => dependentCounter - 1);
  };

  const [dependentData, setDependentData] = useState({});

  const handleDependentData = (event, index, name) => {
    setDependentData((prevDependentData) => ({
      ...prevDependentData,
      [index]: {
        ...prevDependentData[index],
        [name]: event.target.value,
      },
    }));
  };

  useEffect(() => {
    //console.log(dependentData);
    onInputChange(dependentData);
  }, [dependentData]);

  return (
    <div className='Form__Dependent'>
      {/* LEGAL DEPENDENTS DETAILS */}

      <h1 className='Form__Dependent__title'>LEGAL DEPENDENTS INFORMATION</h1>

      {dependentCounter > 0 &&
        Array.from({ length: dependentCounter }).map((_, index) => (
          <LegalDependentForm
            index={index}
            key={index}
            handleDependentData={handleDependentData}
          />
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

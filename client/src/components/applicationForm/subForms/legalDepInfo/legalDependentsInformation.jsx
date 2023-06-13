import { useState } from 'react';

const LegalDependentForm = () => {
  return (
    <div className='flex w-full justify-between gap-4 '>
      <label className='flex flex-col w-full'>
        Relationship:
        <input type='text' className='bg-neutral-900 p-2' />
      </label>
      <label className='flex flex-col w-full'>
        Name:
        <input type='text' className='bg-neutral-900 p-2' />
      </label>
      <label className='flex flex-col w-full'>
        Date of Birth:
        <input type='text' className='bg-neutral-900 p-2' />
      </label>
      <label className='flex flex-col w-full'>
        Cellphone Number:
        <input type='text' className='bg-neutral-900 p-2' />
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
    <div className='w-full '>
      {/* LEGAL DEPENDENTS DETAILS */}
      <div className='w-full px-8 flex flex-col gap-4 items-center'>
        <h1 className='text-2xl font-bold text-center p-4'>
          LEGAL DEPENDENTS INFORMATION
        </h1>

        {dependentCounter > 0 &&
          Array.from({ length: dependentCounter }).map((_, index) => (
            <LegalDependentForm key={index} />
          ))}

        <div
          onClick={incrementNumber}
          className='w-40 h-12 bg-green-800 flex justify-center items-center cursor-pointer'
        >
          <h1>ADD NEW FIELD</h1>
        </div>
      </div>
    </div>
  );
};

export default LegalDependentInformation;

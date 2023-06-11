const EmployeeInformation = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {/* EMPLOYMENT DETAILS */}
      <div className='w-full px-8'>
        <h1 className='text-2xl font-bold text-center p-4'>
          EMPLOYMENT INFORMATION
        </h1>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Name of Office:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Title and Position:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Workplace Telephone Number:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Workplace Email:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Company Address:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInformation;

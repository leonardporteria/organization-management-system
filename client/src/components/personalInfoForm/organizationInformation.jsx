const OrganizationInformation = () => {
  return (
    <div className='w-full'>
      {/* ORGANIZATION DETAILS */}
      <div className='w-full px-8'>
        <h1 className='text-2xl font-bold text-center p-4'>
          ORGANIZATION INFORMATION
        </h1>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Organization Region:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Club Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Club President:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Date of Application:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrganizationInformation;

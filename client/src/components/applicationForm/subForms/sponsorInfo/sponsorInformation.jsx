const SponsorInformation = () => {
  return (
    <div className='w-full'>
      {/* SPONSOR DETAILS */}
      <div className='w-full px-8'>
        <h1 className='text-2xl font-bold text-center p-4'>
          SPONSOR INFORMATION
        </h1>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Sponsor Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Membership Number:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SponsorInformation;

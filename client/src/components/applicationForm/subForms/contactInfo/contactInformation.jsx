const ContactInformation = () => {
  return (
    <div className='w-full'>
      {/* CONTACT PERSON DETAILS */}
      {/* MUST BE ATLEAST TWO, BUT CAN HAVE MORE */}
      <div className='w-full px-8'>
        <h1 className='text-2xl font-bold text-center p-4'>
          CONTACT PERSON INFORMATION
        </h1>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Relationship:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Address:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Cellphone Number:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Relationship:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Address:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Cellphone Number:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;

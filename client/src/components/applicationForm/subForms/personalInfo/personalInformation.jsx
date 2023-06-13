const PersonalInformation = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {/* PERSONAL DETAILS */}
      <div className='w-full px-8'>
        <h1 className='text-2xl font-bold text-center p-4'>
          PERSONAL INFORMATION
        </h1>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Last Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            First Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Middle Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Suffix:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Place of Birth:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Date of Birth:
            <input type='date' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Height in cm:
            <input type='number' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Weight in kg:
            <input type='number' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Nationality:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Religion:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Blood Type:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Civil Status:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        {/* CONTACT DETAILS */}
        <h1 className='text-2xl font-bold text-center p-4'>
          CONTACT INFORMATION
        </h1>
        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            House Number:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Street Name:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Barangay:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            City/Municipality:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Province:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Zip Code:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Cellphone Number:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Telephone Number:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Email:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

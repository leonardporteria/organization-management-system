const EducaitonInformation = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {/* EMPLOYMENT DETAILS */}
      <div className='w-full px-8'>
        <h1 className='text-2xl font-bold text-center p-4'>
          EDUCATION INFORMATION
        </h1>

        <h1>Elementary Education Attainment</h1>
        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Name of School:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Date Graduated:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Course/Strand:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <h1>Junior High School Education Attainment</h1>
        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Name of School:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Date Graduated:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Course/Strand:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <h1>Senior High School Education Attainment</h1>
        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Name of School:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Date Graduated:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Course/Strand:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <h1>College Education Attainment</h1>
        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Name of School:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Date Graduated:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Course/Strand:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>

        <h1>Post Graduate Education Attainment</h1>
        <div className='flex justify-between gap-4 '>
          <label className='flex flex-col w-full'>
            Name of School:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Date Graduated:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
          <label className='flex flex-col w-full'>
            Course/Strand:
            <input type='text' className='bg-neutral-900 p-2' />
          </label>
        </div>
      </div>
    </div>
  );
};

export default EducaitonInformation;

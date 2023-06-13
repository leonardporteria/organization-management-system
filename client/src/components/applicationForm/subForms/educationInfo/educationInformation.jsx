import './educationInformation.scss';

const EducaitonInformation = () => {
  return (
    <div className='Form__Education'>
      {/* EMPLOYMENT DETAILS */}
      <h1 className='Form__Education__title'>EDUCATION INFORMATION</h1>

      <div className='Form__Education__container'>
        <h1>Elementary Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input type='text' />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input type='text' />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>Junior High School Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input type='text' />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input type='text' />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>Senior High School Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input type='text' />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input type='text' />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>College Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input type='text' />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input type='text' />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>Post Graduate Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input type='text' />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input type='text' />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input type='text' />
        </label>
      </div>

      <div className='Form__Education__line'></div>
    </div>
  );
};

export default EducaitonInformation;

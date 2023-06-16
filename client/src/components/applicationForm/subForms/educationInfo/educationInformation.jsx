import { useState, useEffect } from 'react';

import './educationInformation.scss';

const EducationInformation = ({ onInputChange }) => {
  const [educationData, setEducationData] = useState({
    elementary: {
      education_id: '',
      education_level: '',
      school_name: '',
      date_graduated: '',
      course_strand: '',
    },
    junior_hs: {
      education_id: '',
      education_level: '',
      school_name: '',
      date_graduated: '',
      course_strand: '',
    },
    senior_hs: {
      education_id: '',
      education_level: '',
      school_name: '',
      date_graduated: '',
      course_strand: '',
    },
    college: {
      education_id: '',
      education_level: '',
      school_name: '',
      date_graduated: '',
      course_strand: '',
    },
    post_grad: {
      education_id: '',
      education_level: '',
      school_name: '',
      date_graduated: '',
      course_strand: '',
    },
  });

  const handleEducationData = (event, level, name) => {
    setEducationData((prevEducationData) => ({
      ...prevEducationData,
      [level]: {
        ...prevEducationData[level],
        [name]: event.target.value,
      },
    }));
  };

  useEffect(() => {
    // console.log(educationData);
    onInputChange(educationData);
  }, [educationData]);

  return (
    <div className='Form__Education'>
      {/* EMPLOYMENT DETAILS */}
      <h1 className='Form__Education__title'>EDUCATION INFORMATION</h1>

      <div className='Form__Education__container'>
        <h1>Elementary Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'elementary', 'school_name');
            }}
          />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input
            type='date'
            onBlur={(e) => {
              handleEducationData(e, 'elementary', 'date_graduated');
            }}
          />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'elementary', 'course_strand');
            }}
          />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>Junior High School Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'junior_hs', 'school_name');
            }}
          />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input
            type='date'
            onBlur={(e) => {
              handleEducationData(e, 'junior_hs', 'date_graduated');
            }}
          />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'junior_hs', 'course_strand');
            }}
          />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>Senior High School Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'senior_hs', 'school_name');
            }}
          />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input
            type='date'
            onBlur={(e) => {
              handleEducationData(e, 'senior_hs', 'date_graduated');
            }}
          />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'senior_hs', 'course_strand');
            }}
          />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>College Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'college', 'school_name');
            }}
          />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input
            type='date'
            onBlur={(e) => {
              handleEducationData(e, 'college', 'date_graduated');
            }}
          />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'college', 'course_strand');
            }}
          />
        </label>
      </div>

      <div className='Form__Education__container'>
        <h1>Post Graduate Education Attainment</h1>
        <label>
          <p>Name of School:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'post_grad', 'school_name');
            }}
          />
        </label>
        <label>
          <p>Date Graduated:</p>
          <input
            type='date'
            onBlur={(e) => {
              handleEducationData(e, 'post_grad', 'date_graduated');
            }}
          />
        </label>
        <label>
          <p>Course/Strand:</p>
          <input
            type='text'
            onBlur={(e) => {
              handleEducationData(e, 'post_grad', 'course_strand');
            }}
          />
        </label>
      </div>

      <div className='Form__Education__line'></div>
    </div>
  );
};

export default EducationInformation;

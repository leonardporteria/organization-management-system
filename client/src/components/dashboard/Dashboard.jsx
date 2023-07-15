import { useState } from 'react';

import './Dashboard.scss';

const Dashboard = () => {
  const queryProblems = {
    easy: [
      {
        queryNumber: 1,
        queryProblem:
          "List the members' names and age of the applicants from 15 to 25 years old who live in Metro Manila.",
      },
      {
        queryNumber: 2,
        queryProblem:
          "Display the members' names and addresses of members who are sponsored by Liam Jose and currently residing in Metro Manila. ",
      },
      {
        queryNumber: 3,
        queryProblem: "Display the president's name of each club.",
      },
      {
        queryNumber: 4,
        queryProblem: 'Display the names of members who have blood type O.',
      },
      {
        queryNumber: 5,
        queryProblem:
          'Display the names of members and company code of those who are employed.',
      },
    ],
    medium: [
      {
        queryNumber: 1,
        queryProblem:
          'Count how many members are sponsored by a sponsor(member). Include the name of the sponsor.',
      },
      {
        queryNumber: 2,
        queryProblem:
          'List the names of the members and their corresponding company name in which they are employed.',
      },
      {
        queryNumber: 3,
        queryProblem:
          'List the names, civil status, club name of applicants who are single and married only from Sunday Uplifters Club.',
      },
      {
        queryNumber: 4,
        queryProblem:
          'List the names of those members who applied before 2020.',
      },
      {
        queryNumber: 5,
        queryProblem:
          "Display the members' names, title and position, and company address of those members who are employed in Makati.",
      },
      {
        queryNumber: 6,
        queryProblem:
          'Count the members who are currently working in a company within Metro Manila.',
      },
      {
        queryNumber: 7,
        queryProblem:
          "Display the members' names and name of the elementary school where they attended.",
      },
      {
        queryNumber: 8,
        queryProblem:
          'List the names of male members with a spouse as their legal dependents.',
      },
      {
        queryNumber: 9,
        queryProblem:
          'List the names of the members with a sponsor. Include the name of the sponsor.',
      },
    ],
    hard: [
      {
        queryNumber: 1,
        queryProblem: 'Count how many members are currently under per club.',
      },
      {
        queryNumber: 2,
        queryProblem:
          'List the member id of the members and their dependent count. Include only those who have one or more than one legal dependent.',
      },
      {
        queryNumber: 3,
        queryProblem:
          'Count separately the male and female members who are employed in the same company. Display the sex and company name.',
      },
      {
        queryNumber: 4,
        queryProblem:
          'Display and count how many members are employed at Accenture Philippines and Tower Communications.',
      },
      {
        queryNumber: 5,
        queryProblem:
          'Count how many club members are there in the regions of CALABARZON and NCR.',
      },
      {
        queryNumber: 6,
        queryProblem: 'Count how many members are there per club by region.',
      },
    ],
  };

  const [queryResult, setQueryResult] = useState([]);

  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedProblem, setSelectedProblem] = useState('1');

  const [responseData, setResponseData] = useState({});

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
    setSelectedProblem('1');
  };

  const handleProblemChange = (event) => {
    setSelectedProblem(event.target.value);
  };

  const problems = queryProblems[selectedDifficulty];

  const getResultFromQuery = async (params) => {
    const URL = 'http://localhost:5173/api/query/' + params;
    console.log('FETCH URL: ', URL);

    try {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      setResponseData(responseData);

      return responseData.data;
    } catch (error) {
      console.error(`Error in ${URL}:`, error);
    }
  };

  const handleQueryClick = async (params) => {
    setQueryResult(await getResultFromQuery(params));
    console.log(queryResult);
  };

  return (
    <>
      <div className='Dashboard__Header'>
        <h1>
          Welcome to Socio-Civic Organization <br /> Dashboard Tables
        </h1>
      </div>

      <div className='Dashboard__Section Dashboard__Menu'>
        <h1>Query Selection</h1>
        <div className=' Dashboard__Query'>
          <label>
            <p>Difficulty:</p>
            <select
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </label>

          <label>
            <p> Query Problem:</p>
            <select value={selectedProblem} onChange={handleProblemChange}>
              {problems.map((problem, index) => (
                <option key={index} value={problem.queryNumber}>
                  {problem.queryProblem}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          className='Dashboard__Button Dashboard__Query'
          onClick={() => {
            handleQueryClick(`${selectedDifficulty}/${selectedProblem}`);
          }}
        >
          <h1>Query</h1>
        </div>

        <h1>Problem</h1>
        <p>{problems[selectedProblem - 1].queryProblem}</p>

        <h1>Result</h1>

        <div className='Dashboard__Menu__Table'>
          <table>
            <thead>
              <tr>
                {queryResult.length > 0 &&
                  Object.keys(queryResult[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {queryResult.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1>Query Used</h1>
        <pre>
          <p>{responseData.queries}</p>
        </pre>
      </div>
    </>
  );
};

export default Dashboard;

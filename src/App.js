import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';
import JobBoard from './components/JobBoard';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

    useEffect(() => setJobs(data), []);

  return (
    <div className="App">
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map(job =>(
            <JobBoard job={job} key={job.id} />
          ))
        )
      }
    </div>
  );
}

ReactDOM.render(<App />,
  document.querySelector('#root'));
export default App;

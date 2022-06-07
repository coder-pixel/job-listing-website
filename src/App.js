import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import AddPost from './Components/AddPost';
import CategoryPage from './Components/CategoryPage';
import Header from './Components/Header';
import Home from './Components/Home';

import { jobsData } from "./jobs";


function App() {
  const [jobType, setJobType] = useState("")
  const [searchVal, setSearchVal] = useState("")
  const [getResults, setGetResults] = useState(false)
  const [jobs, setJobs] = useState([])



  // getting local storage
  useEffect(() => {
    const getJobsTemp = localStorage.getItem("jobs")
    const jobsLoaded = JSON.parse(getJobsTemp);
    if (jobsLoaded) {
      setJobs(jobsLoaded)
    }
  }, [])



  // setting local storage
  // useEffect(() => {
  //   const newJobs = [...jobObject, ...jobs]
  //   console.log(newJobs)
  //   // if(jobObject) 
  //   setJobs(newJobs)
  //   const jobsJson = JSON.stringify(jobs)
  //   localStorage.setItem("jobs", jobsJson)
  // }, [jobs])

  useEffect(() => {
    const jobsJson = JSON.stringify(jobsData)
    localStorage.setItem("jobs", jobsJson)
  }, [])


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home searchVal={searchVal} setSearchVal={setSearchVal} getResults={getResults} setGetResults={setGetResults} jobs={jobs} setJobType={setJobType} />} />
        <Route path='/category/:categoryName' element={<CategoryPage jobType={jobType} setJobType={setJobType} />} />
        <Route path='/addpost' element={<AddPost jobs={jobs} setJobs={setJobs} />} />
      </Routes>


      {console.log("------------")}
    </div>
  );
}

export default App;

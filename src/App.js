import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import AddPost from './Components/AddPost';
import CategoryPage from './Components/CategoryPage';
import Header from './Components/Header';
import Home from './Components/Home';
import { SiteContext } from './ContextProvider';



function App() {


  const {
    jobType,
    setJobType,
    searchVal,
    setSearchVal,
    getResults,
    setGetResults,
    jobs, setJobs
  } = useContext(SiteContext)



  // setting local storage
  // useEffect(() => {
  //   const newJobs = [...jobObject, ...jobs]
  //   console.log(newJobs)
  //   // if(jobObject) 
  //   setJobs(newJobs)
  //   const jobsJson = JSON.stringify(jobs)
  //   localStorage.setItem("jobs", jobsJson)
  // }, [jobs])


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/category/:categoryName' element={<CategoryPage />} />
        <Route path='/addpost' element={<AddPost jobs={jobs} setJobs={setJobs} />} />
      </Routes>


      {console.log("------------")}
    </div>
  );
}

export default App;

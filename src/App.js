import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import CategoryPage from './Components/CategoryPage';
import Header from './Components/Header';
import Home from './Components/Home';

import { jobs } from "./jobs";


function App() {
  const [jobType, setJobType] = useState("")
  const [searchVal, setSearchVal] = useState("")
  const [getResults, setGetResults] = useState(false)

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path='/' element={<Home searchVal={searchVal} setSearchVal={setSearchVal} getResults={getResults} setGetResults={setGetResults} jobs={jobs} setJobType={setJobType} />} />
        <Route path='/category/:categoryName' element={<CategoryPage jobType={jobType} setJobType={setJobType} />} />
      </Routes>


      {console.log("------------")}
    </div>
  );
}

export default App;

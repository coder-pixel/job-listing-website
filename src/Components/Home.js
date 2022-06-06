import React from 'react'
import Searchbar from './Searchbar'

import JobCard from './JobCard';
import Sidebar from './Sidebar';
import Section from '../Section';

const Home = ({ searchVal, setSearchVal, getResults, setGetResults, jobs, jobType, setJobType }) => {
    return (
        <div className='home'>
            <div className="heroSection">
                <h1>Hiring Someone is now more easy than ever!</h1>
                <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                <div className="heroSection_Searchbar">
                    <Searchbar searchVal={searchVal} setSearchVal={setSearchVal} setGetResults={setGetResults} />
                </div>
            </div>

            <Section searchVal={searchVal} getResults={getResults} jobs={jobs} jobType={jobType} setJobType={setJobType} />
        </div>
    )
}

export default Home
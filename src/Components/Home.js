import React, { useContext } from 'react'

import Searchbar from './Searchbar'
import Section from '../Section';
import { SiteContext } from '../ContextProvider';

const Home = () => {
    const { jobs } = useContext(SiteContext)

    console.log(jobs)
    return (
        <div className='home'>
            <div className="heroSection">
                <h1>Hiring Someone is now more easy than ever!</h1>
                <p>Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry.</p>
                <div className="heroSection_Searchbar">
                    <Searchbar />
                </div>
            </div>

            <Section jobs={jobs} />
        </div>
    )
}

export default Home
import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import JobCard from './Components/JobCard'
import Sidebar from './Components/Sidebar'
import "./Section.css"
import { SiteContext } from './ContextProvider'

const Section = ({ jobs }) => {
    const { searchVal, getResults, currCategory, setJobType, jobType, currLocation, setCurrLocation } = useContext(SiteContext)

    const location = useLocation()
    setCurrLocation(location.pathname)
    console.log(currLocation)


    // const [newJobsArr, setNewJobsArr] = useState([])

    // const searchedFunc = () => {
    //     if(getResults) {
    //         console.log(jobs)
    //         // let newArr = jobs.filter(job => console.log(job.category))
    //         let newArr = jobs.filter(job => job.category.toLowerCase().includes(searchVal.toLowerCase()))

    //         setNewJobsArr(newArr) 
    //     }else{
    //         setNewJobsArr(jobs) 
    //     }
    // }

    // useEffect(() => {
    //     searchedFunc()
    // }, [getResults])

    return (
        <div className="section">
            {currLocation == "/" ?
                (
                    searchVal && getResults ?
                        (
                            <h2>Results: {searchVal}</h2>
                        )
                        :
                        (
                            <h2>All posts</h2>
                        )

                )
                :
                (
                    <h2 title='Category'>Category: {currCategory}</h2>
                )
            }


            <div className="filterDiv">
                {jobType ?
                    (
                        <>
                            <p onClick={() => setJobType("")}>
                                {jobType}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 25 7 L 25 25 L 7 25 Z M 11.6875 10.3125 L 10.28125 11.71875 L 14.5625 16 L 10.21875 20.34375 L 11.625 21.75 L 15.96875 17.40625 L 20.28125 21.71875 L 21.6875 20.3125 L 17.375 16 L 21.625 11.75 L 20.21875 10.34375 L 15.96875 14.59375 Z" /></svg>
                            </p>
                            <button onClick={() => setJobType("")}>Clear Filters</button>
                        </>
                    )
                    :
                    (
                        null
                    )
                }
            </div>

            <div className="sectionLeft">
                <div className="sectionLeftJobs">
                    {jobs.length > 0 ?
                        (
                            getResults ?
                                (
                                    jobs.filter(job => job.category.toLowerCase().includes(searchVal.toLowerCase()))
                                        .map(job => {
                                            return (
                                                <JobCard job={job} key={job.id} />
                                            )
                                        })
                                )
                                :
                                (
                                    jobs.map(job => {
                                        return (
                                            <JobCard job={job} key={job.id} />
                                        )
                                    })
                                )
                        )
                        :
                        (
                            <h2 className='noDataToShow'>Nothing to show...</h2>
                        )
                    }
                </div>

                <Sidebar />
            </div>
        </div>
    )
}

export default Section
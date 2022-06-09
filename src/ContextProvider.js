import React, { createContext, useEffect, useState } from 'react'
import { jobsData } from "./jobs";

export const SiteContext = createContext()

const ContextProvider = ({ children }) => {
    // const va = "sauvik"

    const [jobType, setJobType] = useState("")
    const [searchVal, setSearchVal] = useState("")
    const [getResults, setGetResults] = useState(false)
    const [jobs, setJobs] = useState(jobsData)
    const [currCategory, setCurrCategory] = useState("")
    const [currLocation, setCurrLocation] = useState()

    // const jobsSetter = () => {
    //     if(currLocation == "/ctegory"){
    //         setJobs()
    //     }
    // }

    useEffect(() => {
        if (currLocation == "/") {
            setCurrCategory("")
        }
    }, [currLocation])


    // // getting local storage
    // useEffect(() => {
    //     const getJobsTemp = localStorage.getItem("jobs")
    //     const jobsLoaded = JSON.parse(getJobsTemp);
    //     // setJobs(jobsLoaded)
    //     if (jobsLoaded && jobsLoaded.length > 0) {
    //         console.log("jobsLoaded")
    //         setJobs(jobsLoaded)
    //     } else {
    //         console.log("jobsData")
    //         setJobs(jobsData)
    //     }
    // }, [])

    // console.log(jobs)

    // // setting local storage
    // useEffect(() => {
    //     const jobsJson = JSON.stringify(jobs)
    //     localStorage.setItem("jobs", jobsJson)
    // }, [jobs])

    return (
        <SiteContext.Provider value={{
            jobType,
            setJobType,
            searchVal,
            setSearchVal,
            getResults,
            setGetResults,
            jobs,
            setJobs,
            currCategory,
            setCurrCategory,
            currLocation,
            setCurrLocation
        }}>
            {children}
        </SiteContext.Provider>
    )
}

export default ContextProvider
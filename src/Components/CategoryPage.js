import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./CategoryPage.css"
import JobCard from './JobCard'

// import { jobsData as jobs } from "../jobs"
import Loading from './Loading'
import Section from '../Section'
import { SiteContext } from '../ContextProvider'

const CategoryPage = () => {
    // console.log(jobs)
    // const location = useLocation()
    // console.log(location.pathname)

    const { jobs, jobType, setJobType, currCategory, setCurrCategory } = useContext(SiteContext)

    const match = useParams();
    console.log(match);

    const [loading, setLoading] = useState(true)
    // const [currCategory, setCurrCategory] = useState("")
    const [currCategoryJobs, setCurrCategoryJobs] = useState([])

    // const settingCategory = () => {
    //     console.log(match.categoryName)
    //     // let categoryArr = match.pathname.split("/")
    //     // let category = categoryArr[2]
    //     // console.log(category)
    //     setCurrCategory(match.categoryName);
    // }

    const settingCurrCategoryJobs = () => {
        // console.log(currCategory)
        setCurrCategory(match.categoryName)
        let newJobs = jobs.filter(job => job.category == match.categoryName)
        newJobs = jobType ? newJobs.filter(job => job.jobType == jobType) : newJobs;

        setCurrCategoryJobs(newJobs)

        // setTimeout(() => {
        //     setLoading(false)
        // }, 2000)
        setLoading(false)
    }

    useEffect(() => {
        // settingCategory()
        settingCurrCategoryJobs()
    }, [match.categoryName, jobType])

    return (
        <>
            {currCategoryJobs && loading ?
                (
                    <div className="categoryLoading">
                        <Loading />
                    </div>
                )
                :
                (
                    <div className='categoryPage'>
                        <Section jobs={currCategoryJobs} />

                        {/* <div className="categoryContent">
                            <h2>{match.categoryName}</h2>
                            <div className="categoryJobcards">
                                {console.log(currCategoryJobs)}
                                {
                                    currCategoryJobs.map(job => {
                                        return <JobCard job={job} />
                                    })}
                            </div>
                        </div>
                        <Sidebar jobs={jobs} /> */}
                    </div>
                )
            }
        </>

    )
}

export default CategoryPage
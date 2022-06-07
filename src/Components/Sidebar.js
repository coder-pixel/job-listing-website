import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { jobsData as jobs } from "../jobs"
import Loading from './Loading'
import Searchbar from './Searchbar'

const Sidebar = ({ currCategory, setJobType, jobType }) => {
    const jobTypes = ["FullTime", "PartTime", "Hourly"]
    console.log(currCategory)

    const [loading, setLoading] = useState(true)
    const [categoryArr, setCategoryArr] = useState([])

    const [showCategoryDiv, setShowCategoryDiv] = useState(false);  // for small devices, below 600px

    const categorySetter = () => {
        // let newArr = jobs.map(job => {
        //     if(!categoryArr.includes(job.category)){
        //         setCategoryArr([...categoryArr, job.category])
        //     }
        // })
        let newArr = [... new Set(jobs.map(job => job.category))]
        console.log(newArr)
        setCategoryArr(newArr)
        setLoading(false)
    }

    useEffect(() => {
        categorySetter()
    }, [])


    var x = window.matchMedia("(max-width: 600px)")


    const ranFunc = (x) => {
        if (x.matches) { // If media query matches
            document.querySelector(".sectionLeft").style.flexDirection = "column-reverse";
        } else {
            document.querySelector(".sectionLeft").style.flexDirection = "row";
        }
    }
    x.addListener(ranFunc)
    useEffect(() => {
        ranFunc(x)
    }, [x])


    return (
        <div className='sidebar'>
            {/* <div className="sidebarChild">
                <Searchbar />
            </div> */}
            {currCategory ?
                (
                    <div className="sidebarChild jobNature">
                        <h2 className="sidebarChild_heading">Job Nature</h2>
                        <ul className="sidebarChild_content">
                            {jobTypes.map(type => {
                                return (
                                    <li onClick={() => setJobType(type)} className={type == jobType ? "selected" : null}>
                                        {type}
                                    </li>
                                )
                            })}
                            {/* <li onClick={() => setJobType("FullTime")}>Full time</li>
                            <li onClick={() => setJobType("PartTime")}>Part time</li>
                            <li onClick={() => setJobType("Hourly")}>Hourly</li> */}
                        </ul>
                    </div>
                )
                :
                (
                    null
                )
            }
            <div id="allCategories" className={`${showCategoryDiv ? "showCategoryDiv" : null} sidebarChild categories`}>
                <h2 onClick={() => setShowCategoryDiv(!showCategoryDiv)} className="sidebarChild_heading">
                    {showCategoryDiv ?
                        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 5 15 L 5 17 L 27 17 L 27 15 Z" /></svg>)
                        :
                        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z" /></svg>)
                    }
                    Categories
                </h2>
                {
                    loading ?
                        (
                            <Loading />
                        )
                        :
                        (
                            <>
                                <ul className="sidebarChild_content">
                                    {categoryArr.map(category => {
                                        return (
                                            <Link to={`/category/${category}`}>
                                                <li className={category == currCategory ? "selected" : null}>
                                                    {category}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z" /></svg>
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </>
                        )
                }
            </div>
            {/* <div className="sidebarChild location">
                <h2 className="sidebarChild_heading">Location</h2>
            </div> */}
        </div>
    )
}

export default Sidebar
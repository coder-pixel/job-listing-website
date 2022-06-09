import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./AddPost.css"

const AddPost = ({ jobs, setJobs }) => {
    // console.log(jobs)
    // const [jobObject, setJobObject] = useState()

    const [nameVal, setNameVal] = useState("")
    const [categoryVal, setCategoryVal] = useState("")
    const [regionVal, setRegionVal] = useState("")
    const [minPayVal, setMinPayVal] = useState("")
    const [contactNum, setContactNum] = useState("")
    const [jobTypeVal, setJobTypeVal] = useState("")

    const [error, setError] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    // const handleError = () => {

    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")

        let err = false;
        if (!nameVal || !categoryVal || !regionVal || !minPayVal || !contactNum) {
            // setError(true)
            err = true;
            console.log("error: true")
        } else {
            // setError(false)
            err = false;
            console.log("error: false")
        }
        setError(err)

        console.log(error)

        setJobsArr(err)
    }

    // useEffect(() => {

    // }, [!error, submitted])

    const setJobsArr = (err) => {
        if (!err) {
            setSubmitted(true)

            let newJobObj = {
                id: Math.floor(Math.random() * 1000),
                name: nameVal,
                category: categoryVal,
                locality: regionVal,
                minimalPay: minPayVal,
                jobType: jobTypeVal,
                contact: contactNum,
            }

            console.log(newJobObj)
            // setJobObject(newJobObj)
            setJobs([newJobObj, ...jobs])

            // console.log(jobObject)

            setNameVal("")
            setCategoryVal("")
            setRegionVal("")
            setMinPayVal("")
            setContactNum("")
            setJobTypeVal("")
            setError(false)
            // setSubmitted(false)
        }
    }


    // setting local storage
    // useEffect(() => {
    //     //   const newJobs = [...jobObject, ...jobs]
    //     //   console.log(newJobs)
    //     //   // if(jobObject) 
    //     //   setJobs(newJobs)
    //     const jobsJson = JSON.stringify(jobs)
    //     localStorage.setItem("jobs", jobsJson)
    // }, [jobs])

    const fields = [
        {
            txtName: "Name",
            type: "text",
            inpValue: nameVal,
            inpValueFunc: setNameVal
        },
        {
            txtName: "Job Title",
            type: "text",
            inpValue: categoryVal,
            inpValueFunc: setCategoryVal
        },
        {
            txtName: "Region",
            type: "text",
            inpValue: regionVal,
            inpValueFunc: setRegionVal
        },
        {
            txtName: "Minimum Pay",
            type: "number",
            inpValue: minPayVal,
            inpValueFunc: setMinPayVal
        },
        {
            txtName: "Contact No.",
            type: "number",
            inpValue: contactNum,
            inpValueFunc: setContactNum
        },
    ]


    return (
        <div className='addPost'>
            <form onSubmit={handleSubmit} className="addPostForm">

                {fields.map(field => {
                    return (
                        <div className="addPostField">
                            <div className="aa">
                                <label for={`addPost_${field.inpValue}`}>{field.txtName}</label>
                                {error && !nameVal ? <span className='errorMsg'>*required</span> : null}
                            </div>
                            <input type={field.type} id='addPost_name'
                                value={field.inpValue}
                                onChange={(e) => field.inpValueFunc(e.target.value)}
                            />
                        </div>
                    )
                })}

                <div className="addPostField">
                    <span>Work Type</span>
                    <div className="jobTypesDiv">
                        <div onClick={() => setJobTypeVal("FullTime")} className={jobTypeVal == "FullTime" ? "selected" : null}>Full Time</div>
                        <div onClick={() => setJobTypeVal("PartTime")} className={jobTypeVal == "PartTime" ? "selected" : null}>Part Time</div>
                        <div onClick={() => setJobTypeVal("Hourly")} className={jobTypeVal == "Hourly" ? "selected" : null}>Hourly</div>
                    </div>
                </div>


                {/* <div className="addPostField addPost_name">
                    <div className="aa">
                        <label for="addPost_name">Name</label>
                        {error && !nameVal ? <span className='errorMsg'>*required</span> : null}
                    </div>
                    <input type="text" id='addPost_name'
                        value={nameVal}
                        onChange={(e) => setNameVal(e.target.value)}
                    />
                </div> */}
                {/* <div className="addPostField addPost_category">
                    <div className="aa">
                        <label for="addPost_category">Job Title</label>
                        {error && !categoryVal ? <span className='errorMsg'>*required</span> : null}
                    </div>
                    <input type="text" id='addPost_category'
                        value={categoryVal}
                        onChange={(e) => setCategoryVal(e.target.value)}
                    />
                </div>
                <div className="addPostField addPost_locality">
                    <div className="aa">
                        <label for="addPost_locality">Region</label>
                        {error && !regionVal ? <span className='errorMsg'>*required</span> : null}
                    </div>
                    <input type="text" id='addPost_locality'
                        value={regionVal}
                        onChange={(e) => setRegionVal(e.target.value)}
                    />
                </div>
                <div className="addPostField addPost_mimimalPay">
                    <div className="aa">
                        <label for="addPost_mimimalPay">Mimimum Pay</label>
                        {error && !minPayVal ? <span className='errorMsg'>*required</span> : null}
                    </div>
                    <input type="number" id='addPost_mimimalPay'
                        value={minPayVal}
                        onChange={(e) => setMinPayVal(e.target.value)}
                    />
                </div>
                <div className="addPostField addPost_contact">
                    <div className="aa">
                        <label for="addPost_contact">Contact No</label>
                        {error && !contactNum ? <span className='errorMsg'>*required</span> : null}
                    </div>
                    <input type="number" id='addPost_contact'
                        value={contactNum}
                        onChange={(e) => setContactNum(e.target.value)}
                    />
                </div> */}

                <button type="submit">Add</button>
                {/* <div className="addPostField addPost_jobType">
                    <label for="addPost_mimimalPay">Your JobType</label>
                    <input type="radio" id='addPost_mimimalPay' />
                    <label for="addPost_mimimalPay">Your JobType</label>
                    <input type="radio" id='addPost_mimimalPay' />
                    <label for="addPost_mimimalPay">Your JobType</label>
                    <input type="radio" id='addPost_mimimalPay' />
                </div> */}

                {!error && submitted ? <span className='successMsg'>Your Job is successfully posted, <Link to="/">See here</Link> </span> : null}
            </form>
        </div>
    )
}

export default AddPost
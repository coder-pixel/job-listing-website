import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./AddPost.css"

const AddPost = ({ jobObject, setJobObject }) => {
    const [nameVal, setNameVal] = useState("")
    const [categoryVal, setCategoryVal] = useState("")
    const [regionVal, setRegionVal] = useState("")
    const [minPayVal, setMinPayVal] = useState()
    const [contactNum, setContactNum] = useState()
    // const [jobTypeVal, setJobTypeVal] = useState("")

    const [error, setError] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")

        if (!nameVal || !categoryVal || !regionVal || !minPayVal || contactNum) setError(true)
        else { setError(false) }

        if (!error) {
            let newJobObj = {
                id: Math.floor(Math.random() * 1000),
                name: nameVal,
                category: categoryVal,
                locality: regionVal,
                minimalPay: minPayVal,
                jobType: "PartTime",
                contact: contactNum,
            }

            console.log(newJobObj)
            setJobObject({...newJobObj})

            console.log(jobObject)

            setNameVal("")
            setCategoryVal("")
            setRegionVal("")
            setMinPayVal("")
            setContactNum("")
            setError(false)
        }
    }


    return (
        <div className='addPost'>
            <form onSubmit={handleSubmit} className="addPostForm">
                <div className="addPostField addPost_name">
                    <div className="aa">
                        <label for="addPost_name">Name</label>
                        {error && !nameVal ? <span className='errorMsg'>*required</span> : null}
                    </div>
                    <input type="text" id='addPost_name'
                        value={nameVal}
                        onChange={(e) => setNameVal(e.target.value)}
                    />
                    {/* {showErrMsg && error == "name" ? <span className='errorMsg'>This field is required</span> : null} */}
                </div>
                <div className="addPostField addPost_category">
                    <div className="aa">
                        <label for="addPost_category">Job Title</label>
                        {error && !categoryVal ? <span className='errorMsg'>*required</span> : null}
                    </div>
                    <input type="text" id='addPost_category'
                        value={categoryVal}
                        onChange={(e) => setCategoryVal(e.target.value)}
                    />
                    {/* {showErrMsg && error == "category" ? <span className='errorMsg'>This field is required</span> : null} */}
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
                    {/* {showErrMsg && error == "region" ? <span className='errorMsg'>This field is required</span> : null} */}
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
                    {/* {showErrMsg && error == "pay" ? <span className='errorMsg'>This field is required</span> : null} */}
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
                    {/* {showErrMsg && error == "pay" ? <span className='errorMsg'>This field is required</span> : null} */}
                </div>

                <button type="submit">Add</button>
                {/* <div className="addPostField addPost_jobType">
                    <label for="addPost_mimimalPay">Your JobType</label>
                    <input type="radio" id='addPost_mimimalPay' />
                    <label for="addPost_mimimalPay">Your JobType</label>
                    <input type="radio" id='addPost_mimimalPay' />
                    <label for="addPost_mimimalPay">Your JobType</label>
                    <input type="radio" id='addPost_mimimalPay' />
                </div> */}

                {submitted ? <span className='successMsg'>Your Job is successfully posted, <Link to="/">See here</Link></span> : null}
            </form>
        </div>
    )
}

export default AddPost
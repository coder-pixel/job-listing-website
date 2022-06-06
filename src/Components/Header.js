import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className="logoDiv">
                {/* <img src="images/logo.svg" alt="" /> */}
                <Link to="/">
                    jobsLogo
                </Link>
            </div>
            <ul className="navbar">
                {/* <li className='category_parent'>Categories</li> */}
                {/* <li>About</li> */}
                {/* <li>Contact</li> */}
                <li>
                    <button className="createPost">Add job</button>
                </li>
            </ul>
        </div>
    )
}

export default Header
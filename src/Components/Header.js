
import React from 'react'
import logo from '../assets/bmuse_logo.png'
import search from '../assets/search.png'
const Header = (props) => {

    return (
        <div className="row">
            <div className="col-6 text-start">
                <img src={logo} alt="logo" />
            </div>
            <div className="col-6 text-end">
                <img src={search} alt="search" />
            </div>
        </div>
    )
}

export default Header
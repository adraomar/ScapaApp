import React from 'react'
import logo from "../../assets/bootstrap-logo.svg"
const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="!#">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top me-3"/>
                            Scapa APP
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            {/* header start here */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <img src="/assets/logo.svg" height="40rem" alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/"> KALPAMRIT FOUNDATION TRUST</Link>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mission">Mission</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/wildlife">Wildlife</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/environment">Environment</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* header end here */}
        </div>
    )
}

export default Header


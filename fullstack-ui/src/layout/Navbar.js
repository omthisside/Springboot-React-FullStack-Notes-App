import React from 'react';
import logo from '../logo.svg';
import createicon from '../createicon.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo}  className='app-logo' alt="logo" />
                        Notes Board
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="btn btn-outline-light" to="/addNote">
                        <img src={createicon}  className='createicon' alt="createicon" />
                        Create Note
                    </Link>
                </div>
            </nav>
        </div>
    )
}

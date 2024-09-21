import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Santosh Vishwakarma</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item dropdown hover-dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#EVSUB">E-Voting System Using Blockchain</a></li>
                        <li><a className="dropdown-item" href="#NGG">Number Guessing Game</a></li>
                        <li><a className="dropdown-item" href="#HCW">Hyper Car Website</a></li>
                        <li><a className="dropdown-item" href="#GC">Geometry Calculator</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown hover-dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Certification
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Python</a></li>
                        <li><a className="dropdown-item" href="#">Data Science with Python</a></li>
                        <li><a className="dropdown-item" href="#">Data Structures in C</a></li>
                        <li><a className="dropdown-item" href="#">Tableau</a></li>
                        <li><a className="dropdown-item" href="#">HTML, CSS, & JavaScript</a></li>
                        <li><a className="dropdown-item" href="#">JAVA Programming</a></li>
                        <li><a className="dropdown-item" href="#">Blockchain Basics</a></li>
                    </ul>
                </li>

            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

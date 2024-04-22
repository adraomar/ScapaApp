import React from 'react'
import logo from "../../assets/bootstrap-logo.svg"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="!#">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top me-3" />
                        Scapa APP
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="!#">Categoria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#">Pictogramas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="!#">Rutinas</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-outline-dark" type="submit"><i className="bi bi-box-arrow-right me-1"></i>Salir</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import brand from "../../media/brand.png";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={brand} height="36"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOptions" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarOptions" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ofertas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre nosotros</a>
                        </li>
                    </ul>
                    <button className="btn btn-dark"><BsBoxArrowInRight /> Login</button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
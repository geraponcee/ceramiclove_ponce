import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import brand from "../media/brand.png";
import CartWidget from "./CartWidget";
import "../css/navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5 bg-body">
            <div className="container-fluid">
                <Link to={"/"}>
                    <div className="navbar-brand"><img src={brand} height="36"/></div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarOptions" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarOptions" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/"}><div className="nav-link active" aria-current="page" >Inicio</div></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to={"/category/1"}><li><div className="dropdown-item alist" >Bowls</div></li></Link>
                                <Link to={"/category/2"}><li><div className="dropdown-item" >Compoteras</div></li></Link>
                                <Link to={"/category/3"}><li><div className="dropdown-item" >Tazas</div></li></Link>
                                <Link to={"/category/4"}><li><div className="dropdown-item" >Platos</div></li></Link>
                            </ul>
                        </li>
                    </ul>
                    <Link to="/cart/"><div id="iconcart" className="btn btn-link position-relative"><CartWidget /></div></Link>
                    <button className="btn btn-dark"><BsBoxArrowInRight /> Login</button>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
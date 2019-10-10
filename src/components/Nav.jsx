import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white text-primary mb-5  fixed-top mb-4">
            <div class="container">


                <div className="collapse navbar-collapse " id="navbarSupportedContent">

                    <ul className="navbar-nav ml-auto navlink">
                        <li className="nav-item text-black-50 active navlink">
                            <NavLink className="nav-link  text-info mr-3 text-center " to="/">Home
                                <span class="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-black-50 mr-3 text-center text-info " to="/form1">Form1</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
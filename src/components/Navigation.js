import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <div className="left">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="right">
                <Link to="/help">
                    Help
                </Link>
                {/**  <a href="#">Help</a>  */}
            </div>
        </nav>
    )
}

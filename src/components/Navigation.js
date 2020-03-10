import React from 'react';
import logo from '../img/logo.png';

export default function Navigation() {
    return (
        <nav>
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="right">
                <a href="#">Help</a>
            </div>
        </nav>
    )
}

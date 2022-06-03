import React from "react";
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import './style/Header.css'

const Header = () => {

    return (
        <div className="Header">
            <div className="header-container">
                <div className="logo">
                    <Logo />
                </div>
                <div className="navbar">
                    <Navbar />
                </div>
            </div>


        </div>
    )

}

export default Header
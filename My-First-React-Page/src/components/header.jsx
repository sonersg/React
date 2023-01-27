
import React from "react";
import logo from "./react-logo.png";

export default function Header(){
    return (
        <header>
            <nav className="navbar">
                <img src={logo} className="logo"/>
                <ul className="nav-items">
                    <li>Projects</li>
                    <li>Articles</li>
                    <li>Web Designs</li>
                    <li>Photos</li>
                    <li>Games</li>
                </ul>
            </nav>
        </header>
    )
}

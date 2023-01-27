
import React from "react";
import logo from "./react-logo.png";

export default function Header(props){

    function changeMode(){
        props.setdarkMode(!props.darkMode)
        
    }
    function h3style() {
        return {
            backgroundColor: props.darkMode ? "white" : "black"
        }
    }
    return (
        <nav className={props.darkMode ? "dark-nav" : "light-nav"}>
            <img 
            alt="" 
            src={logo} 
            width="40px"
            onClick={changeMode}
            style={h3style()}/>
            <h3>ReactFacts</h3>
            <h4 className={props.darkMode ? "nav-h4-dark" : "nav-h4-light"}>Soner Güçlü</h4>
        </nav>
    )
}

import React from "react";

export default function Main(props){
    return (
        <main className={props.darkMode ? "main-dark" : "main-light"}>
            <h1
            className={props.darkMode ? "main-h1-dark" : "main-h1-light"}
            >Fun facts about React</h1>
            <ul>
                <li
                className={props.darkMode ? "main-ul-li-dark" : "main-ul-li-light"}
                >Was first released in 2013</li>
                <li
                className={props.darkMode ? "main-ul-li-dark" : "main-ul-li-light"}
                >Was originally created by Jordan Walke</li>
                <li
                className={props.darkMode ? "main-ul-li-dark" : "main-ul-li-light"}
                >Has well over 100K stars on GitHub</li>
                <li
                className={props.darkMode ? "main-ul-li-dark" : "main-ul-li-light"}
                >Is maintained by Facebook</li>
                <li
                className={props.darkMode ? "main-ul-li-dark" : "main-ul-li-light"}
                >Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

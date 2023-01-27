import React from "react";

export default function Footer(props){
    return (
        <div className={props.darkMode ? "footer-dark" : "footer-light"}>
            <small>Soner Güçlü 31.8.2022</small>
        </div>
    )
}

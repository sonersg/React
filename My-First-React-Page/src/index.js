import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import "./style.css";

function Page(){

    return (
        <div>
            <Header />                    
            <Main />                    
            <Footer />                    
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));


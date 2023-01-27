
import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./style.css";

export default function App(){
  const [darkMode, setdarkMode] = React.useState(true)

  return (
    <div>
      <Header 
      darkMode={darkMode}
      setdarkMode={setdarkMode} />
      <Main 
      darkMode={darkMode}
      setdarkMode={setdarkMode} />
      <Footer 
      darkMode={darkMode}
      setdarkMode={setdarkMode} />
    </div>
  )
}

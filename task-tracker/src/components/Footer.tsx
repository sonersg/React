import { NavLink, Routes, Route } from "react-router-dom";
import About from "./About";

function Footer() {
    return (
        <div>
            <h4>Copyright &copy; 2023</h4>

            <NavLink to="/about">About</NavLink>

            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default Footer;

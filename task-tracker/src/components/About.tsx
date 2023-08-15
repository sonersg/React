import { NavLink, useLocation } from "react-router-dom";

function About() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <p>Soner SG</p>
            <p>Sat, 12th of August, 2023</p>
            <NavLink to="/">Go back home</NavLink>
            <hr />
            <div>Current Path: {currentPath}</div>
        </div>
    );
}

export default About;

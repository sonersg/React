/*
function TemporaryName(){// Pascal Case
    return (
        <div>
            <img src="react-logo.png" width="90px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
//              function name is as an HTML element
ReactDOM.render(<TemporaryName />, document.getElementById("root"));
*/






function Reasons(){

    return (
        <div>
            <header>
                <nav>
                    <h1>Soner</h1>
                    <ul>
                        <li>Projects</li>
                        <li>Articles</li>
                        <li>Web Designs</li>
                        <li>Photos</li>
                        <li>Games</li>
                    </ul>
                </nav>
            </header>
            
            <main>
                <img src="react-logo.png" width="90px" />
                <h1>My reasons to learn React</h1>
                <ol>
                    <li>easier way to design better web pages</li>
                    <li>job opportunities</li>
                    <li>less code</li>
                    <li>no need html much</li>
                    <li>seems cool</li>
                </ol>
            </main>

            <footer>
                <small> 2022 Güçlü development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Reasons />, document.getElementById("root"));


















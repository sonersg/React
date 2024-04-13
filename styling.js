
function Header(){
    return (
        <header>
            <nav className="navbar">
                <img src="react-logo.png" className="logo"/>
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

function Body(){
    return (
        <main className="main">
            <h1>My reasons to learn React</h1>
            <ol>
                <li>easier way to design better web pages</li>
                <li>job opportunities</li>
                <li>less code</li>
                <li>no need html much</li>
                <li>seems cool</li>
            </ol>
        </main>
    )
}

function Footer(){
    return (
        <footer className="footer">
            <small> 2022 Güçlü development. All rights reserved.</small>
        </footer>
    )
}

function Page(){

    return (
        <div>
            <Header />                    
            <Body />                    
            <Footer />                    
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));




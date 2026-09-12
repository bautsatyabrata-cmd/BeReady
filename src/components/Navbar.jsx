import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
        <header className="navbar">

            <div className="navbar-inner">

                <Link
                    to="/"
                    className="logo"
                >
                    <span>⚡</span>
                    <span>BeReady</span>
                </Link>


                <nav className="nav-links">

                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/practice">
                        Practice
                    </NavLink>

                    <NavLink to="/progress">
                        Progress
                    </NavLink>

                    <NavLink to="/author">
                        Author
                    </NavLink>

                </nav>


                <Link
                    to="/practice"
                    className="nav-button"
                >
                    Start Practice
                </Link>

            </div>

        </header>
    );
}

export default Navbar;
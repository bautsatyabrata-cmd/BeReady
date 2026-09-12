import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="navbar">

                <div className="navbar-inner">

                    {/* LOGO */}

                    <Link
                        to="/"
                        className="logo"
                        onClick={closeMenu}
                    >
                        <span>⚡</span>
                        <span>BeReady</span>
                    </Link>


                    {/* DESKTOP NAVIGATION */}

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


                    {/* DESKTOP BUTTON */}

                    <Link
                        to="/practice"
                        className="nav-button"
                    >
                        Start Practice
                    </Link>


                    {/* MOBILE MENU BUTTON */}

                    <button
                        className={`mobile-menu-button ${
                            menuOpen ? "active" : ""
                        }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                </div>


                {/* MOBILE NAVIGATION */}

                <div
                    className={`mobile-menu ${
                        menuOpen ? "open" : ""
                    }`}
                >

                    <NavLink
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/practice"
                        onClick={closeMenu}
                    >
                        Practice
                    </NavLink>

                    <NavLink
                        to="/progress"
                        onClick={closeMenu}
                    >
                        Progress
                    </NavLink>

                    <NavLink
                        to="/author"
                        onClick={closeMenu}
                    >
                        Author
                    </NavLink>

                    <Link
                        to="/practice"
                        className="mobile-start-button"
                        onClick={closeMenu}
                    >
                        Start Practice →
                    </Link>

                </div>

            </header>


            {/* RESPONSIVE NAVBAR CSS */}

            <style>{`

                .navbar {
                    width: 100%;
                    position: relative;
                    z-index: 1000;
                    background: #ffffff;
                    border-bottom: 1px solid #e5e7eb;
                }


                .navbar-inner {
                    max-width: 1380px;
                    height: 72px;
                    margin: 0 auto;
                    padding: 0 40px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                }


                /* LOGO */

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 9px;

                    color: #172033;
                    text-decoration: none;

                    font-size: 20px;
                    font-weight: 800;

                    flex-shrink: 0;
                }

                .logo span:first-child {
                    width: 34px;
                    height: 34px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 8px;

                    background: #172033;
                    color: #ffffff;

                    font-size: 17px;
                }


                /* DESKTOP LINKS */

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    margin-left: auto;
                }

                .nav-links a {
                    padding: 9px 13px;

                    color: #667085;
                    text-decoration: none;

                    font-size: 13px;
                    font-weight: 600;

                    border-radius: 6px;

                    transition:
                        background .2s ease,
                        color .2s ease;
                }

                .nav-links a:hover {
                    background: #f2f4f7;
                    color: #172033;
                }

                .nav-links a.active {
                    background: #f2f4f7;
                    color: #172033;
                }


                /* START BUTTON */

                .nav-button {
                    padding: 10px 16px;

                    background: #172033;
                    color: #ffffff;

                    border-radius: 6px;

                    text-decoration: none;

                    font-size: 12px;
                    font-weight: 700;

                    white-space: nowrap;

                    transition:
                        transform .2s ease,
                        background .2s ease;
                }

                .nav-button:hover {
                    background: #101827;
                    transform: translateY(-1px);
                }


                /* MOBILE BUTTON */

                .mobile-menu-button {
                    display: none;

                    width: 42px;
                    height: 42px;

                    padding: 0;

                    border: 1px solid #d0d5dd;
                    border-radius: 7px;

                    background: #ffffff;

                    cursor: pointer;

                    align-items: center;
                    justify-content: center;

                    flex-direction: column;
                    gap: 5px;
                }

                .mobile-menu-button span {
                    width: 19px;
                    height: 2px;

                    background: #172033;

                    border-radius: 2px;

                    transition:
                        transform .2s ease,
                        opacity .2s ease;
                }


                /* ANIMATED HAMBURGER */

                .mobile-menu-button.active span:nth-child(1) {
                    transform: translateY(7px) rotate(45deg);
                }

                .mobile-menu-button.active span:nth-child(2) {
                    opacity: 0;
                }

                .mobile-menu-button.active span:nth-child(3) {
                    transform: translateY(-7px) rotate(-45deg);
                }


                /* MOBILE MENU */

                .mobile-menu {
                    display: none;
                }


                /* TABLET */

                @media (max-width: 850px) {

                    .navbar-inner {
                        padding: 0 22px;
                    }

                    .nav-links {
                        gap: 0;
                    }

                    .nav-links a {
                        padding: 8px 9px;
                        font-size: 12px;
                    }

                    .nav-button {
                        padding: 9px 12px;
                    }

                }


                /* MOBILE */

                @media (max-width: 700px) {

                    .navbar-inner {
                        height: 64px;
                        padding: 0 16px;
                    }


                    .nav-links,
                    .nav-button {
                        display: none;
                    }


                    .mobile-menu-button {
                        display: flex;
                    }


                    .mobile-menu {

                        display: flex;

                        position: absolute;

                        top: 64px;
                        left: 0;
                        right: 0;

                        padding: 10px 16px 16px;

                        flex-direction: column;
                        gap: 4px;

                        background: #ffffff;

                        border-top: 1px solid #eaecf0;
                        border-bottom: 1px solid #dfe4ea;

                        box-shadow:
                            0 12px 25px rgba(16, 24, 40, .08);

                        transform: translateY(-15px);
                        opacity: 0;
                        visibility: hidden;

                        pointer-events: none;

                        transition:
                            transform .2s ease,
                            opacity .2s ease,
                            visibility .2s ease;
                    }


                    .mobile-menu.open {

                        transform: translateY(0);

                        opacity: 1;

                        visibility: visible;

                        pointer-events: auto;
                    }


                    .mobile-menu a {

                        width: 100%;

                        box-sizing: border-box;

                        padding: 13px 14px;

                        border-radius: 6px;

                        color: #475467;

                        text-decoration: none;

                        font-size: 14px;
                        font-weight: 600;

                        transition:
                            background .2s ease,
                            color .2s ease;
                    }


                    .mobile-menu a:hover,
                    .mobile-menu a.active {

                        background: #f2f4f7;

                        color: #172033;
                    }


                    .mobile-menu .mobile-start-button {

                        margin-top: 7px;

                        background: #172033;

                        color: #ffffff;

                        text-align: center;
                    }


                    .mobile-menu .mobile-start-button:hover {

                        background: #101827;

                        color: #ffffff;
                    }

                }


                /* SMALL MOBILE */

                @media (max-width: 400px) {

                    .navbar-inner {
                        padding: 0 12px;
                    }

                    .logo {
                        font-size: 18px;
                    }

                    .logo span:first-child {
                        width: 32px;
                        height: 32px;
                    }

                    .mobile-menu-button {
                        width: 40px;
                        height: 40px;
                    }

                }

            `}</style>
        </>
    );
}

export default Navbar;
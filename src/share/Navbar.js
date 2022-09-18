import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navabr.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="text-slate-50 flex justify-between h-16 py-0 px-6 items-center bg-sky-900">
            <h3>LOGO</h3>
            <nav ref={navRef}>
                {/* <Link className="my-0 mx-3 hover:text-red-500 no-underline" to="/">Home</Link> */}

                <Link className="my-0 mx-3 hover:text-red-500 no-underline" to="/cart">Cart</Link>
                <Link className="my-0 mx-3 hover:text-red-500 no-underline" to="/login">Login</Link>

                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>

            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>


        </header>
    );
}

export default Navbar;
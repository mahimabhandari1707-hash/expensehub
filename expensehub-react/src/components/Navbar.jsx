import { useState, useEffect } from "react";

function Navbar({ onSignup, user, onLogout }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <span className="logo-icon">⬡</span>
                <span className="logo-text">ExpenseHub</span>
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
                <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
                <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
                {!user && <li><a href="#" className="nav-login">Login</a></li>}
            </ul>

            {user ? (
                <div className="nav-user">
                    <span className="nav-hello">Hello, {user.name}</span>
                    <button className="logout-btn" onClick={() => { if (onLogout) onLogout(); try { localStorage.removeItem('expensehub_user'); } catch(e){} }}>Logout</button>
                </div>
            ) : (
                <button className="signup-btn" onClick={onSignup}>Sign Up Free</button>
            )}

            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
}

export default Navbar;
import { useState, useEffect, useRef } from "react";

const navItems = [
    {
        label: "Features",
        href: "#features",
        submenu: ["Analytics", "Automation", "Integrations"],
    },
    {
        label: "Pricing",
        href: "#pricing",
        submenu: ["Plans", "Enterprise", "Compare"],
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
];

function Navbar({ onSignup, user, onLogout }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const hoverTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuEnter = (label) => {
        if (hoverTimeout.current) {
            window.clearTimeout(hoverTimeout.current);
        }

        setHoveredMenu(label);
        setSubmenuVisible(false);

        hoverTimeout.current = window.setTimeout(() => {
            setSubmenuVisible(true);
        }, 180);
    };

    const handleMenuLeave = () => {
        if (hoverTimeout.current) {
            window.clearTimeout(hoverTimeout.current);
        }

        setHoveredMenu(null);
        setSubmenuVisible(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <span className="logo-icon">⬡</span>
                <span className="logo-text">ExpenseHub</span>
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                {navItems.map((item) => {
                    const isHovered = hoveredMenu === item.label;
                    const showSubmenu = item.submenu && isHovered && submenuVisible;

                    return (
                        <li
                            key={item.label}
                            className={`nav-item${item.submenu ? " has-submenu" : ""}`}
                            onMouseEnter={() => item.submenu ? handleMenuEnter(item.label) : handleMenuLeave()}
                            onMouseLeave={handleMenuLeave}
                        >
                            <a
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                aria-haspopup={item.submenu ? "true" : undefined}
                                aria-expanded={item.submenu ? String(showSubmenu) : undefined}
                            >
                                {item.label}
                            </a>

                            {item.submenu && (
                                <>
                                    <span className={`loading-line${isHovered ? " active" : ""}`} />
                                    <div className={`submenu-wrapper${showSubmenu ? " visible" : ""}`}>
                                        <ul className="submenu">
                                            {item.submenu.map((option) => (
                                                <li key={option}>
                                                    <a href={item.href} onClick={() => setMenuOpen(false)}>
                                                        {option}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </li>
                    );
                })}
                {!user && <li><a href="#" className="nav-login">Login</a></li>}
            </ul>

            {user ? (
                <div className="nav-user">
                    <span className="nav-hello">Hello, {user.name}</span>
                    <button
                        className="logout-btn"
                        onClick={() => {
                            if (onLogout) onLogout();
                            try {
                                localStorage.removeItem('expensehub_user');
                            } catch {
                                // ignore storage errors
                            }
                        }}
                    >
                        Logout
                    </button>
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
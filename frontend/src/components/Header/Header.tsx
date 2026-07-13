import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import ShoppingCartLogo from '../../assets/Shopping_Cart.jpg.png';

const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/gallery", label: "Gallery" },
    { to: "/cake", label: "Cakes" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

function Header() {
    return (
        <header className="navbar navbar-expand-lg premium-header sticky-top">
            <div className="container">
                <Link className="navbar-brand brand" to="/">
                    <div className="logo-circle">BB</div>
                    <div>
                        <small>Luxury Patisserie</small>
                        <h4>Butter Bliss</h4>
                    </div>
                </Link>

                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mx-auto">
                        {navItems.map(({ to, label, end }) => (
                            <li className="nav-item" key={to}>
                                <NavLink end={end} to={to} className="nav-link">
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex gap-3 align-items-center icon-group">
                        <Link className="icon-btn" to="/cart" aria-label="View cart">
                            <img src={ShoppingCartLogo} alt="Cart" className="cart-logo" />
                        </Link>
                        <Link className="btn btn-dark rounded-pill px-4 signin-btn" to="/signin">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
import './Footer.scss'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2025 Butter Bliss, Inc</p>
                    <ul className="nav col-md-5 justify-content-end">
                        <Link to='/' className='nav-link active'>Home</Link>
                         <Link to='/gallery' className='nav-link'>Gallery</Link>
                        <Link to='/cake' className='nav-link'>Cakes</Link>
                        <Link to='/about' className='nav-link'>About</Link>
                        <Link to='/contact' className='nav-link'>Contact</Link>
                    </ul>
                </footer>
            </div>

        </>
    )
}
export default Footer;
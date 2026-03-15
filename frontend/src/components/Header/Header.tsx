import './Header.scss'
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="container-fluid shadow-sm rounded-1 bg-pink">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span className="cfs-1">
                            <p className='logo-font fs-2 mb-0'>Butter Bliss</p>
                        </span>
                    </a>
                    <ul className="nav nav-pills">
                        <Link to='/' className='nav-link'>Home</Link>
                         <Link to='/gallery' className='nav-link'>Gallery</Link>
                        <Link to='/cake' className='nav-link '>Cakes</Link>
                        <Link to='/about' className='nav-link'>About</Link>
                        <Link to='/contact' className='nav-link'>Contact</Link>
                        <Link to='/signin' className='nav-link'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="33px" viewBox="0 -960 960 960" width="35px" fill=""><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg></Link>
                    </ul>
                </header>
            </div>

        </>
    )
}

export default Header;